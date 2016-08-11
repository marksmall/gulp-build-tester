"use strict";

import {Component} from "@angular/core";

import {Header} from "../../modules/header/header";
import {Footer} from "../../modules/footer/footer";
import {RegisterUserFormComponent} from "../../modules/registeruser/register-user-form.component";

@Component({
  templateUrl: "pages/registration/registration.template.html",
  directives: [Header, Footer, RegisterUserFormComponent]
})
export class Registration {

}
