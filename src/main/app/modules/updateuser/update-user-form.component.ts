import {Component, OnInit} from '@angular/core'
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, FormControlName, Validators} from '@angular/forms'
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated'

import {cloneDeep, isEqual} from 'lodash'

import {ControlMessages} from '../controlmessages/controlmessages'
import {ValidationService} from '../controlmessages/validation.service'

import {FormView} from '../../core/commons/formview'
import {ErrorResponse} from '../../core/commons/errorresponse'
import {UpdateUserService} from './update-user.service'
import {UpdateUserDto} from './update-user'

@Component({
  selector: 'update-user-form',
  templateUrl: 'modules/updateuser/update-user-form.template.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, ControlMessages],
  providers: [UpdateUserService]
})
export class UpdateUserFormComponent implements OnInit {

  // Ideally would be const static but isn't supported by typescript
  private titles: string[] = ['Mr', 'Miss', 'Mrs', 'Ms', 'Dr', 'Prof']

  private user: UpdateUserDto
  private existingDepartment: string
  private newDepartment: string

  // The original state of the update user DTO
  private original: UpdateUserDto

  private formView = FormView

  // Which of the views is currently being displayed
  private view: FormView

  // If an error has occured, the message from the server
  private errorMessage: string

  private updateUserForm: FormGroup

  constructor(fb: FormBuilder,
              private router: Router,
              private userService: UpdateUserService) {
    this.userService = userService
    this.view = FormView.Wait
    this.updateUserForm = fb.group({
      'title': ['', Validators.compose([Validators.required])],
      'firstName': ['', Validators.compose([Validators.required])],
      'surname': ['', Validators.compose([Validators.required])],
      'existingDepartment': '',
      'newDepartment': '',
      'marketingContactable': '',
      'supportContactable': '',
    }, {
      validator: this.departmentValidator
    })

    // Listens to changes in the form values, reflecting the existingDepartment
    // and newDepartment values back onto the user model.
    this.updateUserForm
        .valueChanges
        .subscribe((values) => {
          if (values.existingDepartment === '') {
            this.user.department = values.newDepartment
          } else {
            this.user.department = values.existingDepartment
          }
          console.log('User details: ', values)
        })
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
    return this.updateUserForm.valid && this.hasChanged()
  }

  /**
   * Checks the validity of the existing department and new department fields. If the
   * existing department is empty then the other department must be valid. If the
   * existing department is non-empty then we don't care about the value of new
   * department.
   */
  departmentValidator(group: FormGroup): { required: boolean } {
    if (group.controls['existingDepartment'].value === '' && group.controls['newDepartment'].value === '') {
      group.controls['newDepartment'].setErrors({ required: true })
      return { required: true }
    } else {
      group.controls['newDepartment'].setErrors(null)
      return null
    }
  }

  /**
   * Get the Observable of a user from the service, then assign it.
   */
  ngOnInit() {
    this.getUser()
  }

  /**
   * Initialise form model from backend.
   */
  getUser() {
    this.user = null
    this.userService.getUpdateUser().subscribe(
      data => {
        this.user = data
        this.original = cloneDeep(data)
        this.existingDepartment = this.user.department
        this.newDepartment = ''
        this.view = FormView.Form
      },
      err => {
        this.errorMessage = err.message
        this.view = FormView.Error
      }
    )
  }

  /**
   * Run when form submitted.
   */
  updateUser(): void {
    this.userService.setUpdateUser(this.user).subscribe(
      (success: void) => {
        this.view = FormView.SuccessConfirmation
      },
      (error: ErrorResponse) => {
        this.view = FormView.ErrorConfirmation
      }
    )
  }

  /**
   * Run to reset form to original state.
   */
  resetUser(): void {
    this.user = _.cloneDeep(this.original)
    this.existingDepartment = this.user.department
    this.newDepartment = ''
    this.view = FormView.Form
  }

  /**
   * Takes the user back to the home page.
   */
  navigate(): void {
    this.router.navigate(['Welcome'])
  }
}
