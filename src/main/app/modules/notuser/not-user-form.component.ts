import {Component, OnInit} from '@angular/core'
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, FormControl, FormControlName, Validators} from '@angular/forms'
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

import {find, cloneDeep, isEqual} from 'lodash'

import {ControlMessages} from '../controlmessages/controlmessages'
import {ValidationService} from '../controlmessages/validation.service'

import {FormView} from '../../core/commons/formview'
import {ErrorResponse} from '../../core/commons/errorresponse'
import {NotUserDto} from './not-user'
import {NotUserService} from './not-user.service'

@Component({
  selector: 'not-user-form',
  templateUrl: 'modules/notuser/not-user-form.template.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, ControlMessages],
  providers: [NotUserService]
})
export class NotUserFormComponent implements OnInit {

  private user: NotUserDto
  // Original state of the DTO.
  private original: NotUserDto

  // Unfortunately enum's need to be properties of components to be usable in templates:
  // https://github.com/angular/angular/issues/2885
  private formView = FormView

  // Which of the views is currently being displayed
  private view: FormView

  // If an error has occured, the message from the server
  private errorMessage: string

  private notUserForm: FormGroup

  constructor(private fb: FormBuilder,
              private notUserService: NotUserService,
              private router: Router) {
    this.view = FormView.Wait
    this.errorMessage = null
    this.notUserForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'institution': ['', Validators.required],
      'comments': ''
    })
  }

  /**
   * Run when form submitted.
   */
  setNotUser() {
    console.log('User: ', this.user)
    this.notUserService.setNotUser(this.user).subscribe(
      (success: boolean) => {
        this.view = FormView.SuccessConfirmation
      },
      (error: any) => {
        this.view = FormView.ErrorConfirmation
      })
  }

  /** Run when form is first initialised or reset */
  getNotUser() {
    this.notUserService.getNotUser().subscribe(
      (data: NotUserDto) => {
        this.user = data
        this.original = cloneDeep(data)
        this.view = FormView.Form
      },
      (err: ErrorResponse) => {
        this.errorMessage = err.message ? err.message : 'There has been an internal error.'
        this.view = FormView.Error
      }
    )
  }

  /**
   * Run to reset form to original state.
   *
   * This retrieves the data from the backend again. This is simpler than
   * caching the original data returned when initialised. A disadvantage of
   * this is that the reset button is always active, even when the form is
   * unchanged.
   *
   * Reseting forms is an ongoing issue in angular2:
   * https://github.com/angular/angular/issues/4933
   * Some messages in the above link suggest recreating the form, although
   * this is ugly and results in a complete refresh of the form.
   */
  reset(): void {
    this.user = _.cloneDeep(this.original)
  }

  /**
   * Returns true when the form data has changed from the original values.
   */
  hasChanged(): boolean {
    return !isEqual(this.original, this.user)
  }

  /**
   * Returns true if the form is in a state where submission of the data
   * is possible, i.e. the form is valid and there has been changes.
   */
  canSubmit(): boolean {
    return this.notUserForm.valid && this.hasChanged()
  }

  navigate() {
    console.log('Add routing to home view')
    this.router.navigate(['Welcome'])
  }

  /**
   * Get the Observable of a user from the service, then assign it.
   */
  ngOnInit() {
    this.getNotUser()
  }

}
