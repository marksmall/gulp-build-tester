import {FormGroup} from "@angular/forms";

/**
 *  Taken from: https://coryrylan.com/blog/angular-2-form-builder-and-validation-management
 */
 export class ValidationService {

  static getValidatorErrorMessage(code: string) {
    let config = {
      "required": "Required",
      "invalidCreditCard": "Is invalid credit card number",
      "invalidEmailAddress": "Invalid email address",
      "invalidPassword": "Invalid password. Password must be at least 6 characters long, and contain a number.",
      "emailAddressesDoNotMatch": "The email addresses do not match."
    };
    return config[code];
  }

  static creditCardValidator(control: any) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control && control.value && control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { "'invalidCreditCard": true };
    }
  }

  static emailValidator(control: any) {
    // RFC 2822 compliant regex
    if (control && control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { "invalidEmailAddress": true };
    }
  }

  static passwordValidator(control: any) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control && control.value && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { "invalidPassword": true };
    }
  }

  /**
   * Matching Email Addresses Control Group Validator.
   *
   * We attach this validator to the Control Group rather than a control with two email controls with input that we require matching.
   * The error message is attached to repeat email control.
   *
   * http://stackoverflow.com/questions/31788681/angular2-validator-which-relies-on-multiple-form-fields
   */
  static matchingEmailAddressesValidator(emailControlName: string, repeatEmailControlName: string) {
    return (group: FormGroup): { [key: string]: boolean } => {
      let emailControl = group.controls[emailControlName];
      let repeatEmailControl = group.controls[repeatEmailControlName];

      if (emailControl.value === repeatEmailControl.value) {
        if(emailControl.value) {
          repeatEmailControl.setErrors(null);
          return null;
        }
        return null;
      } else {
        repeatEmailControl.setErrors( { "emailAddressesDoNotMatch": true } );
        return { "emailAddressesDoNotMatch": true };
      }
    };
  }

}
