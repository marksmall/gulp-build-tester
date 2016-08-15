import {Component, OnInit} from '@angular/core'
import {RouteParams} from '@angular/router-deprecated'

import {SimpleNotificationsComponent} from '../notifications/simpleNotifications.component'
import {NotificationsService} from '../notifications/notifications.service'
import {ConfigService} from '../config/config.service'

const ERROR_QUERY_PARAMS = [
  'notSubscribed',
  'notActivated',
  'domainRestricted',
]

@Component({
  selector: 'authentication-notification',
  templateUrl: 'modules/authentication/authentication-notification.template.html',
  providers: [NotificationsService],
  directives: [SimpleNotificationsComponent]
})
export class AuthenticationNotificationComponent implements OnInit {
  constructor(private configService: ConfigService,
              private notificationsService: NotificationsService,
              private routeParams: RouteParams) { }

  private showErrors(config: Map<string,any>) {
    ERROR_QUERY_PARAMS.forEach(param => {
      let paramValue = this.routeParams.get(param)
      if (paramValue) {
        let message = config.get(`authorisation.${param}`) || 'Message error'
        let content = `
          <div class='title'>Authorisation Error</div>
          <div class='content'>
            ${message}
          </div>
        `
        this.notificationsService.html(content, 'error')
      }
    })
  }

  ngOnInit() {
    this.configService.getConfig().subscribe(config => {
      this.showErrors(config)
    })
  }
}
