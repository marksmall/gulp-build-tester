import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router-deprecated'

import {Collection, Application, isSubscribed, isActivated, noServiceRestriction} from './collection'
import {User} from '../../../modules/user/user'
import {UserService} from '../../../modules/user/user.service'
import {NotificationsService} from '../../../modules/notifications/notifications.service'
import {SimpleNotificationsComponent} from '../../../modules/notifications/simpleNotifications.component'
import {ConfigService} from '../../../modules/config/config.service'
import {DynamicSvgComponent} from '../../../modules/svg/dynamic-svg.component'
import {INFO_ICON} from './config'

@Component({
  selector: 'collection-detail',
  templateUrl: 'pages/home/collections/collection-detail.template.html',
  providers: [NotificationsService],
  directives: [SimpleNotificationsComponent, DynamicSvgComponent]
})
export class CollectionDetailComponent implements OnInit {
  @Input() collection: Collection
  private user: User
  private loginUrl: string
  private infoIcon = INFO_ICON

  constructor(private userService: UserService,
              private notificationsService: NotificationsService,
              private configService: ConfigService,
              private router: Router) { }

  canAccessApplication(application: Application): boolean {
    if (!this.user) {
      return true
    }

    if (!isSubscribed(this.user, this.collection)) {
      return false
    }

    if (!noServiceRestriction(this.user, application)) {
      return false
    }

    if (application.ipAccessRestricted && !this.user.canAccessDownloader) {
      return false
    }

    return true
  }

  accessApplication(application: Application): boolean {
    if (!this.collection.subscriptionRequired) {
      return true
    }

    if (!this.user) {
      if (this.loginUrl) {
        window.location.href = this.loginUrl
      }
      return false
    }

    if (!isSubscribed(this.user, this.collection)) {
      this.notificationsService.alert('Instutution Not Subscribed',
                                      `Your institution does not subscribe to the ${this.collection.name} collection.`
                                      )
      return false
    }


    if (this.user.state === 'UNREGISTERED') {
      this.router.navigate(['/Register'])
      return false
    }

    if (this.user.state === 'PENDING') {
      this.notificationsService.alert('Registration Required',
                                      'Please respond to the registration email.'
                                      )
      return false
    }

    if (!isActivated(this.user, this.collection)) {
      this.router.navigate(['/Activate'])
      return false
    }

    if (!noServiceRestriction(this.user, application)) {
      this.notificationsService.alert('Access Revoked',
                                      'Sorry, you need to contact the helpdesk for access to this service for your account.'
                                      )
      return false
    }

    if (application.ipAccessRestricted && !this.user.canAccessDownloader) {
      this.notificationsService.alert('Inaccessible due to IP restriction',
                                      `You are unable to access all data download facilities from this computer.
                                      This is because your institution has opted to restrict download access to
                                      computers belonging to .ac.uk networks. This computer does not appear to belong to such a network.
                                      Please contact your Digimap site representative if you believe this is a mistake.`
                                      )
      return false
    }

    return true
  }

  getConfig() {
    this.configService.getConfig().subscribe(
      (config: Map<string,any>) => {
        this.loginUrl = config.get('url.wayf.login')
      },
      (err: any) => { console.error('Error getting config: ', err) }
    )
  }

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.user = user
    })
  }

  selectIcon(app: Application) {
    app.infoExpanded = !app.infoExpanded
  }

  ngOnInit() {
    this.getUser()
    this.getConfig()
  }
}
