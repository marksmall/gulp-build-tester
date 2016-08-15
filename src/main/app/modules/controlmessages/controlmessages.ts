import {Component, Host, Input} from '@angular/core'
import {AbstractControl, FormGroup, FormControl} from '@angular/forms'

import {ValidationService} from './validation.service'

/**
 * Taken from: https://coryrylan.com/blog/angular-2-form-builder-and-validation-management
 */

@Component({
  selector: 'control-messages',
  templateUrl: 'modules/controlmessages/controlmessages.template.html'
})
export class ControlMessages {

  @Input() control: FormControl

  get errorMessage(): string {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName)
      }
    }

    return null
  }
}
