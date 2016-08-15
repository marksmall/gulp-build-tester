import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core'

/**
 * This class exists because for some reason you can't do:
 * <span [innerHTML]='svg'></span>
 * Angular 2 is doing something to the SVG, so this class exists
 * to manipulate the DOM directly and set innerHTML on a real HTMLElement.
 */
@Component({
  selector: 'dynamic-svg',
  template: `<span #svg></span>`
})
export class DynamicSvgComponent implements AfterViewInit {
  @Input()
  svg: string
  @ViewChild('svg')
  element: ElementRef

  ngAfterViewInit() {
    this.element.nativeElement.innerHTML = this.svg
  }
}
