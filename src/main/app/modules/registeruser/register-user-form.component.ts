import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, FormControl, FormControlName, Validators} from "@angular/forms";
import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import "rxjs/add/operator/filter";

import {isEqual, cloneDeep} from "lodash";

import {ControlMessages} from "../controlmessages/controlmessages";
import {ValidationService} from "../controlmessages/validation.service";

import {FormView} from "../../core/commons/formview";
import {ErrorResponse} from "../../core/commons/errorresponse";

import {RegisterUserDto} from "./register-user";
import {RegisterUserService} from "./register-user.service";

import {DisablePaste} from "../../core/commons/disablepaste.directive";

@Component({
  selector: "register-user-form",
  templateUrl: "modules/registeruser/register-user-form.template.html",
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, ControlMessages, DisablePaste],
  providers: [RegisterUserService]
})
export class RegisterUserFormComponent implements OnInit {

  private user: RegisterUserDto;
  private existingDepartmentModel: string;
  private newDepartmentModel: string;

  private formView = FormView;
  private view: FormView;         // Which of the views is currently being displayed
  private errorMessage: string;   // If an error has occured, the message from the server

  private titles: string[] = ["Mr", "Miss", "Mrs", "Ms", "Dr", "Prof"];

  institution: string;

  registerUserForm: FormGroup;
  title: FormControl = new FormControl("", Validators.required);
  firstName: FormControl = new FormControl("", Validators.required);
  surname: FormControl = new FormControl("", Validators.required);
  email: FormControl = new FormControl("", [Validators.required,ValidationService.emailValidator]);
  repeatEmail: FormControl = new FormControl("", [Validators.required, ValidationService.emailValidator]);
  department: FormControl = new FormControl("", Validators.required);
  newDepartment: FormControl = new FormControl("");
  userType: FormControl = new FormControl("", Validators.required);
  hearAbout: FormControl = new FormControl("", Validators.required);
  marketingContactable: FormControl = new FormControl("");
  supportContactable: FormControl = new FormControl("");

  // The original state of the update user DTO
  private original: RegisterUserDto;

  constructor(private fb: FormBuilder,
              private userService: RegisterUserService,
              private router: Router) {
    this.view = FormView.Wait;
    this.userService = userService;
    this.errorMessage = null;

    this.registerUserForm = fb.group({
      "title": this.title, // Use Control instance.
      "firstName": this.firstName,
      "surname": this.surname,
      "matchingEmail": fb.group({
        "email": this.email,
        "repeatEmail": this.repeatEmail
      }, { validator: ValidationService.matchingEmailAddressesValidator("email", "repeatEmail")}),
      "departmentGroup": fb.group({
        "department": this.department,
        "newDepartment": this.newDepartment
      }, { validator: this.departmentValidator }),
      "userType": this.userType,
      "hearAbout": this.hearAbout,
      "marketingContactable": this.marketingContactable,
      "supportContactable": this.supportContactable
    });

    // observe the full form as a whole, apply complex cross field validations. Pre-save the form
    //in the background and easy implementation of requirements like undo/redo of valid states.
    this.registerUserForm.valueChanges.map((value) => {
      //Update user with department
      if(value.departmentGroup.department !== "" && value.departmentGroup.department !== "request_new_dept") {
        this.user.department = value.departmentGroup.department;
      } else if(value.departmentGroup.newDepartment !== "" ) {
        this.user.department = value.departmentGroup.newDepartment;
      }
      return value;
    })
    .filter((value) => this.registerUserForm.valid)
    .subscribe((value) => {
      console.log("Model Driven Form valid value: vm: ", value);
    });

  }

  /**
   * Checks the validity of the existing department and new department fields. If the
   * existing department is empty then the other department must be valid. If the
   * existing department is non-empty then we don't care about the value of new
   * department.
   */
  departmentValidator(group: FormGroup): { newDepartmentEmpty: boolean } {
    if (group.controls["department"].value === "request_new_dept" && group.controls["newDepartment"].value === "") {
      group.controls["newDepartment"].setErrors({ newDepartmentEmpty: true });
      return { newDepartmentEmpty: true };
    } else {
      group.controls["newDepartment"].setErrors(null);
      return null;
    }
  }

  /**
   * Run when form submitted.
   */
  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      (isSuccess: void) => {
        this.view = FormView.SuccessConfirmation;
      },
      (err: ErrorResponse) => {
        this.view = FormView.ErrorConfirmation;
      }
    );
  }

  getUser() {
    this.userService.getRegisteringUser().subscribe(
      data => {
        this.user = data;
        this.original = cloneDeep(data);
        this.existingDepartmentModel = data.department;
        this.newDepartmentModel = "";
        this.view = FormView.Form;
      },
      err => {
        this.errorMessage = err.message;
        this.view = FormView.Error;
      }
    );
  }

  /**
   * Returns true when the form data has changed from the original values.
   */
  hasChanged(): boolean {
    return !isEqual(this.original, this.user);
  }

  /**
   * Returns true if the form is in a state where submission of the data
   * is possible, i.e. the form is valid and there has been changes.
   */
  canSubmit(): boolean {
    return this.registerUserForm.valid && this.hasChanged();
  }

  /**
   * Run to reset form to original state.
   */
  resetUser(): void {
    this.user = _.cloneDeep(this.original);
    this.existingDepartmentModel = this.user.department;
    this.newDepartmentModel = "";
  }

  /**
   * Get the Observable of a user from the service, then assign it.
   */
  ngOnInit() {
    this.getUser();
  }

  navigate() {
    this.router.navigate(["Welcome"]);
  }
}
