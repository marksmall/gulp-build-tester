import {Component} from "@angular/core";

import {Header} from "../../modules/header/header";
import {Footer} from "../../modules/footer/footer";

@Component({
  templateUrl: "pages/nolocalinfo/nolocalinfo.template.html",
  directives: [Header, Footer],
})
export class NoLocalInfo {
}
