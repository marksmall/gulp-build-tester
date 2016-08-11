"use strict";

import {Component} from "@angular/core";

import {Header} from "../../modules/header/header";
import {Footer} from "../../modules/footer/footer";
import {UpdateUserFormComponent} from "../../modules/updateuser/update-user-form.component";

@Component({
  templateUrl: "pages/update/update.template.html",
  directives: [Header, Footer, UpdateUserFormComponent]
})
export class Update {

}
