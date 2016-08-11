import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {NotificationsService} from "../notifications/notifications.service";
import {SimpleNotificationsComponent} from "../notifications/simpleNotifications.component";

import {User} from "../user/user";
import {UserService} from "../user/user.service";
import {ConfigService} from "../config/config.service";
import {inlineSvg} from "../svg/inline-svg-img";
import {RegisterUserService} from "../registeruser/register-user.service";

@Component({
	selector: "header",
	templateUrl: "modules/header/header.template.html",
	providers: [NotificationsService, RegisterUserService],
  directives: [ROUTER_DIRECTIVES, SimpleNotificationsComponent]
})
export class Header implements OnInit, AfterViewInit {

  user: User;
  loginUrl: string;

  private activeNotification = { timeOut: 0, clickToClose: true };

  constructor(private userService: UserService,
              private configService: ConfigService,
              private notificationService: NotificationsService,
              private registerUserService: RegisterUserService,
              private router: Router) {
    this.user = null;
  }

  /**
   * Get the Observable of a user from the service, then assign it.
   */
  getUser() {
    this.userService.getUser().subscribe(
      user => {
        console.log("User Data: ", user);
        this.user = user;

        this.isUnregistered(this.user);
      },
      (err: any) => this.handleInternalError(err)
    );
  }

  setUser(user: User) {
    console.log("User: ", user);
    this.user = user;
  }

  getConfig() {
    this.configService.getConfig().subscribe(
      (config: Map<string,any>) => {
        this.loginUrl = config.get("url.wayf.login");
      },
      (err: any) => this.handleInternalError(err)
    );
  }

  /**
   * Functions that test user's state
   */
  isNewUser(user: User): boolean {
    return user && user.state === "UNREGISTERED";
  }

  isRegisteredUser(user: User): boolean {
    return user && user.state === "REGISTERED";
  }

  isPendingUser(user: User): boolean {
    return user && user.state === "PENDING";
  }

  furtherActivations(user:User) {
    return user && this.isRegisteredUser(user) && !this.allCollectionsActive(user);
  }

  /**
   * Test to check if all collections active.
   */
  allCollectionsActive(user: User): boolean {
    let activeCollections = _.clone(user.activatedCollections).sort();
    let subscribedCollections = _.clone(user.institution.subscribedCollections).sort();
    let equal = _.isEqual(activeCollections, subscribedCollections);
    return equal;
  }

  resendVerification() {
    this.registerUserService.resendConfirmation(this.user).subscribe(() => {
      this.notificationService.success("Success",
                                       `Your verification email has been resent to ${this.user.email}`);
    });
  }

  private handleInternalError(err: any) {
    let body = JSON.parse(err._body);
    this.notificationService.error("Internal Error", body.message);
  }

  /**
   * Once this component has been loaded, initialise it by excuting this function.
   */
  ngOnInit() {
    this.getUser();
    this.getConfig();
  }

  private isUnregistered(user: User) {
    let isNewUser = this.isNewUser(user);
    let routeName = this.router.parent.currentInstruction.component.routeName;

    if (isNewUser && routeName !== "Register") {
      this.notificationService.alert("User Registration Required",
                                     "You need to register before using the Digimap service.",
                                     this.activeNotification);
    }
  }

  /**
   * Navigate to a page based on User State.
   */
  navigate() {
    if (this.isNewUser(this.user)) {
      // Re-direct to register view.
      console.log("Re-directing to Registration View");
      this.router.navigate(["Register"]);
    }
  }

  ngAfterViewInit() {
    $("img[src$=\".svg\"]").each(inlineSvg);
  }
}
