/**
 * @ngdoc directive
 * @name disable-paste
 *
 * @description
 * The disable-paste directive prevents a user pasting text in element.
 *
 *
 * @example
 * <example>
 *   <div class="form-group">
 *      <label for="repeatEmail">Repeat Email address<sup>*</sup></label>
 *      <input type="repeatEmail" class="form-control" ngControl="repeatEmail" disable-paste>
 *    </div>
 * </example>
 */

import {Directive, ElementRef} from "@angular/core";


@Directive({
  selector: "[disable-paste]",
  host: {
    "(paste)": "onPaste($event)"
  }
})

export class DisablePaste {

  constructor(private el: ElementRef) {
    this.el = el.nativeElement;
  }

  onPaste(event: Event) {
    event.preventDefault();
  }
}
