"use strict";

// import Angular 2
import {Component} from "@angular/core";

import {Header} from "../../modules/header/header";
import {Footer} from "../../modules/footer/footer";
import {Collection} from "./collections/collection";
import {CollectionsComponent} from "./collections/collections.component";
import {BlogsTabComponent} from "../../modules/blog/blog.component";
import {NewsflashComponent} from "../../modules/newsflash/newsflash.component";
import {JiscBanner} from "../../modules/jiscbanner/jisc-banner.component";
import {VerifyNotificationComponent} from "../../modules/verify/verify-notification.component";
import {AuthenticationNotificationComponent} from "../../modules/authentication/authentication-notification.component";

@Component({
  selector: "page-home",
  templateUrl: "pages/home/home.template.html",
  directives: [JiscBanner, Header, Footer, CollectionsComponent, BlogsTabComponent, NewsflashComponent, VerifyNotificationComponent, AuthenticationNotificationComponent]
})
export class Home {
  backgroundCssName = "welcome-background";
  backgroundBlurCssName = "welcome-background-blur";

  constructor() {
    console.log("Home component loaded");
  }

  collectionChange(collection: Collection) {
    console.log(`collection event output ${collection.id}`);
    this.backgroundCssName = `${collection.id}-background`;
    this.backgroundBlurCssName = `${collection.id}-background-blur`;
  }
}
