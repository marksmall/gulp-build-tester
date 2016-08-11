"use strict";

import {Component} from "@angular/core";

import {Header} from "../../modules/header/header";
import {Footer} from "../../modules/footer/footer";
import {ActivateCollectionsFormComponent} from "../../modules/activatecollections/activate-collections-form.component";

@Component({
  templateUrl: "pages/activate/activate.template.html",
  directives: [Header, Footer, ActivateCollectionsFormComponent]
})
export class Activate {

}
