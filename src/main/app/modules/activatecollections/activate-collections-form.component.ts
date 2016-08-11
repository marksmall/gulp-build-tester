import {Component, OnInit} from "@angular/core";
import {NgClass} from "@angular/common";
import {REACTIVE_FORM_DIRECTIVES, AbstractControl, FormBuilder, FormGroup, FormControl, FormControlName, Validators} from "@angular/forms";

import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {find, cloneDeep, isEqual, trim} from "lodash";

import {ControlMessages} from "../controlmessages/controlmessages";
import {ValidationService} from "../controlmessages/validation.service";

import {CollectionService} from "../../pages/home/collections/collection.service";
import {Collection} from "../../pages/home/collections/collection";
import {DynamicSvgComponent} from "../svg/dynamic-svg.component";

import {FormView} from "../../core/commons/formview";
import {ErrorResponse} from "../../core/commons/errorresponse";

import {ActivateCollectionsDto, Purpose} from "./activatecollections";
import {ActivationService} from "./activation.service";


@Component({
  selector: "activate-collections-form",
  templateUrl: "modules/activatecollections/activate-collections-form.template.html",
  directives: [REACTIVE_FORM_DIRECTIVES, ControlMessages, NgClass, ROUTER_DIRECTIVES, DynamicSvgComponent],
  providers: [ActivationService, CollectionService]
})
export class ActivateCollectionsFormComponent implements OnInit {

  private activations: ActivateCollectionsDto[];
  private original: ActivateCollectionsDto[];

  private collections: Collection[] = [];

  private formView = FormView;

  // Which of the views is currently being displayed
  private view: FormView;

  // If an error has occured, the message from the server
  private errorMessage: string;

  private activateCollectionsForm: FormGroup;

  private defaultPanelHeadingStyle = "panel-heading";
  // Model variable to hold the Accordion Panel heading styling
  // for each collection.
  private headingStyles: { [key:string]: string; } = {};


  constructor(private fb: FormBuilder,
              private activationService: ActivationService,
              private router: Router,
              private collectionService: CollectionService) {
    this.view = FormView.Wait;
  }

  /**
   * Create a control group for a collection.
   *
   * @return AbstractControl
   */
  private createCollectionControlGroup(): AbstractControl {
    return this.fb.group({
      "collection": [""],
      "licence": [""],
      "licenceAccepted": ["", Validators.required],
      "purpose": ["", Validators.required],
      "otherPurpose": [""]
    }, { validator: this.collectionGroupValidator});
  }

  /**
   * This is a validator for each control group for a collection. It encapsulates the various validation rules for input data
   * we require before for a collection can be activated.
   *
   * FIXME: This is important enough to warant it's own file and be imported.
   *
   * @param ControlGroup
   *
   * @return { required: boolean }
   */
  private collectionGroupValidator(collectionGroup: FormGroup): { required: boolean } {
    if (collectionGroup.controls["licenceAccepted"].value) {
      if (collectionGroup.controls["purpose"].value === 0) {
        collectionGroup.controls["purpose"].setErrors({required:true});
        return {required:true};
      }

      if (collectionGroup.controls["purpose"].value === "8") {
          let value = collectionGroup.controls["otherPurpose"].value;
          if (value.length < 3 || value.length > 254) {
            collectionGroup.controls["otherPurpose"].setErrors({required:true});
            return {required:true};
          }
      }
    }

    collectionGroup.controls["licenceAccepted"].setErrors(null);
    collectionGroup.controls["purpose"].setErrors(null);
    collectionGroup.controls["otherPurpose"].setErrors(null);
    return null;
  }

/**
 * Initialise the activateCollectionsForm
 */
  private initActivateCollectionForm() {
    // Create ControlGroups for each subscribed collection.
    let controlGroupsForCollections: { [key:string]: AbstractControl; } = {};

    this.activations.forEach((activation: ActivateCollectionsDto) => {
      //create  a control group with name (e.g, for OS this will be "osGroup")
      // controlGroupsForCollections[activation.collection.id + "Group"] = this.createCollectionControlGroup();
      controlGroupsForCollections[activation.id + "Group"] = this.createCollectionControlGroup();
    });

    // Create form with subscribed collections
    this.activateCollectionsForm = this.fb.group(controlGroupsForCollections);

    this.activateCollectionsForm.valueChanges
      .subscribe((formGroup: FormGroup) => {
        for (let group in formGroup) {
          if (formGroup.hasOwnProperty(group)) {
            group = group.substr(0, group.indexOf("Group"));

            // Lookup associated DTO.
            this.activations
              .filter(dto => dto.id === group)
              .filter(dto => dto.licenceAccepted === false)
              .forEach(dto => {
                dto.purpose.id = 0;
                dto.otherPurpose = "";
            });
          }
        }
    });
  }

  /**
   * Process activation DTOs before sending to the server. This is to fix data lost
   * in the form. For instance, the id type changes to a string, so we need to change
   * it back. The purpose type and display name are lost so again we re-set these.
   *
   * FIXME: It would be better not to have to do this, not sure if it is possible though.
   *
   * @return ActivateCollectionsDto[]
   */
  private processActivations(): ActivateCollectionsDto[] {
    let activations = this.activations.filter((activation: ActivateCollectionsDto) => activation.licenceAccepted).map((dto: ActivateCollectionsDto) => {
      // Don't require these on the server so to save transfer, setting to empty string.
      dto.licence = "";
      dto.icon = "";
      console.log("DTO: ", dto);

      // The form sets the number to a string so need to reset back again.
      let purposeIdString: any = dto.purpose.id;
      let purposeId = parseInt(purposeIdString, 10);
      dto.purpose.id = purposeId;

      // Ensure other purpose is empty if id 1-7 (Do we need to be more specific?).
      // This is for when an expired activation with other purpose is re-activated
      // with one of the BUILT-IN purposes.
      if (dto.purpose.id < 8) {
        dto.otherPurpose = "";
      }

      // Get purpose type and display text corresponding to the collection id.
      let purposeData = dto.purposes.filter((purpose: Purpose) => purpose.id === dto.purpose.id)
                                      .map((purpose: Purpose) => {
                                        return {
                                          purposeType: purpose.purposeType,
                                          purpose: purpose.purpose
                                        };
                                      });
      let data = purposeData[0];
      // Set type and display text.
      dto.purpose.purposeType = data.purposeType;
      dto.purpose.purpose = data.purpose;

      return dto;
    });

    console.log("Processed Activations: {}", activations);
    return activations;
  }

  /**
   * Submit the form and inform the user of the result.
   */
  activateCollections() {
    // Pre-process activations purpose.
    // FIXME: I'd like to see a better way to do this but didn't get it to work.
    let processedActivations:ActivateCollectionsDto[] = this.processActivations();

    this.activationService.setActivations(processedActivations).subscribe(
      (success: void) => {
        this.view = FormView.SuccessConfirmation;
      },
      (error: any) => {
        this.view = FormView.ErrorConfirmation;
      });
  }

  /**
   * Get a list of DTOs to populate the form using the activation service.
   */
  getActivations() {
    this.activations = null;
    this.activationService.getActivations().subscribe(
      (data: any) => {
        this.activations = data;
        this.original = cloneDeep(data);

        // Now create the  activateCollectionsForm control group
        this.initActivateCollectionForm();
        // Initialise headingStyles
        this.initHeadingStyles();

        this.view = FormView.Form;
      },
      (err: ErrorResponse) => {
        this.errorMessage = err.message;
        this.view = FormView.Error;
      }
    );
  }

  /**
   * A test to check if there are any Activations in given state.
   * This is used in the sumary to render portions of the view.
   *
   * @return boolean
   */
  hasActivationsInState(state: string): boolean {
    let hasState = false;

    this.activations.forEach((activation: ActivateCollectionsDto) => {
      if (activation.state === state) {
        hasState = true;
      }
    });

    return hasState;
  }

  /**
   * Check if new activation set ready to be sent to the server.
   *
   * @return boolean
   */
  hasNewActivations(): boolean {
    let hasState = false;

    this.activations.forEach((activation: ActivateCollectionsDto) => {
      if (activation.licenceAccepted === true && activation.state === "NOT_ACTIVATED") {
        hasState  = true;
      }
    });

    return hasState;
  }

  /**
   * Are there any subscribed collections not yet activated, or ready to be sent.
   *
   * @return boolean
   */
  hasOutstandingActivations(): boolean {
    let hasState = false;

    this.activations.forEach((activation:ActivateCollectionsDto) => {
      if(activation.licenceAccepted === false && activation.state === "NOT_ACTIVATED") {
        hasState  = true;
      }
    });

    return hasState;
  }

  /**
   * Run to reset form to original state.
   */
  reset(): void {
    this.activations = _.cloneDeep(this.original);
    this.view = FormView.Form;
  }

  /**
   * Set the header style based on the state of the activation e.g. DEACTIVATED, QUERIED etc.
   */
  private initHeadingStyles() {
    this.activations.forEach((activation: ActivateCollectionsDto) => {
      let style = `${this.defaultPanelHeadingStyle} ${activation.state.toLowerCase()}` ;
      this.headingStyles[activation.id] = style;
    });
  }

  /**
   * Licence is disabled if Activation's state is not NOT_ACTIVATED or EXPIRED.
   * Any other state the user should not be able to amend.
   *
   * @param ActivateCollectionsDto
   *
   * @return boolean
   */
  disableLicence(activation: ActivateCollectionsDto): boolean {
    if(activation.state === "NOT_ACTIVATED" || activation.state === "EXPIRED" || activation.state === "REJECTED") {
      return false;
    }

    return true;
  }

  /**
   * Called to disable the purpose fields if a collection's licence hasn't
   * been accepted (click checkbox) and is not either activated or not yet expired.
   *
   * @param ActivateCollectionsDto
   */
  isPurposeDisabled(activation: ActivateCollectionsDto) {
    if((activation.state === "NOT_ACTIVATED" || activation.state === "EXPIRED" || activation.state === "REJECTED") && activation.licenceAccepted) {
      return false;
    }

    return true;
  }

  /**
   * Check to see if "Other Purpose" field should be visible on form based on
   * wheter the activation already has a purpose with numbers 1-7. If it is 8 which
   * corresponds to 'Other' then we return true.
   *
   * @param ActivateCollectionsDto
   */
  showOtherPurpose(activation: ActivateCollectionsDto) {
    // FIXME: This is a hack, the template keeps changing my id: number to id: string.
    //        When I try an equivalence check, the types don't match. This doesn't affect
    //        the working of the app, but it does have typescript compiler errors about
    //        converting between number and string.
    let purposeIdString: any = activation.purpose.id;
    let purposeId = parseInt(purposeIdString, 10);

    if(purposeId === 8) {
      return true;
    }

    return false;
  }

  /**
   * Returns true when the form data has changed from the original values.
   *
   * @return boolean
   */
  hasChanged(): boolean {
    return !isEqual(this.original, this.activations);
  }

  /**
   * Returns true if the form is in a state where submission of the data
   * is possible, i.e. the form is valid and there has been changes.
   *
   * @return boolean
   */
  canSubmit(): boolean {
    return this.hasChanged() && this.activateCollectionsForm.valid;
  }

  /**
   * Takes the user back to the home page.
   */
  navigate(): void {
   this.router.navigate(["Welcome"]);
  }

  /**
   * Get the path to the icon associated with the activation.
   *
   * @param ActivateCollectionsDto
   *
   * @return string
   */
  getIcon(dto: ActivateCollectionsDto): string {
    let icon: string;

    this.collections.forEach((collection: Collection) => {
      if (dto.id === collection.id) {
        icon = collection.icon;
      }
    });

    return icon;
  }

  /**
   * Get the link to the printer friendly version of the licence associated with the activation.
   *
   * @param ActivateCollectionsDto
   *
   * @return string
   */
  getPrinterFriendlyLink(dto: ActivateCollectionsDto): string {
    let url: string;

    this.collections.forEach((collection: Collection) => {
      if (dto.id === collection.id) {
        url = collection.licenceUrl;
      }
    });

    return url;
  }

  /**
   * Get the licence HTML associated with the activation.
   *
   * @param ActivateCollectionsDto
   *
   * @return string
   */
  getLicence(dto: ActivateCollectionsDto): string {
    let licence: string;

    this.collections.forEach((collection: Collection) => {
      if (dto.id === collection.id) {
        licence = collection.licence;
      }
    });

    return licence;
  }

  /**
   * Get the Observable of a user from the service, then assign it.
   */
  ngOnInit() {
    // Get a list of the collections, these will be used to supply the
    // template with the necessary icons and licences.
    this.collectionService.getCollections().then(collections => {
      this.collections = collections;
    });

    this.getActivations();
  }

}
