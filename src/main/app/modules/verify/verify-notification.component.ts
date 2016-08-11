import {Component, OnInit} from "@angular/core";

import {User} from "../user/user";
import {UserService} from "../user/user.service";
import {RegisterUserService} from "../registeruser/register-user.service";
import {NotificationsService} from "../notifications/notifications.service";
import {SimpleNotificationsComponent} from "../notifications/simpleNotifications.component";

@Component({
  selector: "verify-notification",
  templateUrl: "modules/verify/verify-notification.template.html",
  providers: [NotificationsService, RegisterUserService],
  directives: [SimpleNotificationsComponent],
})
export class VerifyNotificationComponent implements OnInit {
  user: User;

  private passiveNotification = { timeOut: 5, clickToClose: true };

  constructor(private userService: UserService,
              private notificationsService: NotificationsService,
              private registerUserService: RegisterUserService) { }

  isPending(): boolean {
    if (this.user) {
      return this.user.state === "PENDING";
    }

    return false;
  }

  resendVerification() {
    this.registerUserService.resendConfirmation(this.user).subscribe(() => {
      this.notificationsService.success("Success",
                                        `Your verification email has been resent to ${this.user.email}`,
                                        this.passiveNotification);
    });
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.user = user);
  }
}
