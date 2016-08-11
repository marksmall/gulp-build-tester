"use strict";

// import Angular 2
import {Component, AfterViewInit} from "@angular/core";

import {inlineSvg} from "../../modules/svg/inline-svg-img";

@Component({
	selector: "footer",
	templateUrl: "modules/footer/footer.template.html"
})
export class Footer implements AfterViewInit {

  ngAfterViewInit() {
    $("img[src$=\".svg\"]").each(inlineSvg);
  }
}
