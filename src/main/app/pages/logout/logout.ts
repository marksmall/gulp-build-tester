import {Component, OnInit} from '@angular/core'
import {RouterLink} from '@angular/router-deprecated'

import {NotificationsService} from '../../modules/notifications/notifications.service'
import {SimpleNotificationsComponent} from '../../modules/notifications/simpleNotifications.component'

import {LogoutService} from './logout.service'
import {Header} from '../../modules/header/header'
import {Footer} from '../../modules/footer/footer'

@Component({
  templateUrl: 'pages/logout/logout.template.html',
  providers: [LogoutService],
  directives: [RouterLink, Header, Footer]
})
export class Logout implements OnInit {

  // Indicates that the component is waiting for a response from the service to indicate
  // whether logout was successful or not
  private waitForLogout: boolean

  // Indicates that logout was successful
  private success: boolean

  constructor(private logoutService: LogoutService) {
    this.waitForLogout = true
  }

  /**
   * Calls the logout API method to log the user out.
   */
  ngOnInit(): void {
    this.logoutService.logout().subscribe(
      (success: {success: string}) => {
        console.log('Successfully logged out, response: ' + JSON.stringify(success))
        this.waitForLogout = false
        this.success = true
      },
      (error: any) => {
        console.error('Error Logging out: ' + JSON.stringify(error))
        this.waitForLogout = false
        this.success = false
      }
    )
  }
}

