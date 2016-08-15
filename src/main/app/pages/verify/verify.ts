import {Component, OnInit} from '@angular/core'
import {Router, RouteParams} from '@angular/router-deprecated'

import {Header} from '../../modules/header/header'
import {Footer} from '../../modules/footer/footer'

import {User} from '../../modules/user/user'
import {VerifyService} from './verify.service'
import {UserService} from '../../modules/user/user.service'

@Component({
  templateUrl: 'pages/verify/verify.template.html',
  providers: [VerifyService],
  directives: [Header, Footer]
})
export class Verify implements OnInit {
  // Adding two booleans to control this so to display nothing while the API
  // validates the token. We don't want to eg, display failure case as the default
  // while the token is validated, then replace with success as that'll look bad.
  success: boolean
  failure: boolean

  // Indicates that we're still waiting for the reply to the verify service. Need
  // to wait for this before rendering the header (which contains a resend email button)
  waitForVerification: boolean
  user: User

  constructor(private router: Router,
              private routeParams: RouteParams,
              private verifyService: VerifyService,
              private userService: UserService) {
    this.waitForVerification = true
  }

  navigateLicence() {
    this.router.navigate(['Activate'])
  }

  navigateHome() {
    this.router.navigate(['Welcome'])
  }

  ngOnInit() {
    let token = this.routeParams.get('token') || 'notokensupplied'

    this.verifyService.verify(token).subscribe(success => {
      this.success = success
      this.failure = !success
      this.waitForVerification = false
    },
    error => {
      this.failure = true
      this.waitForVerification = false
    })

    this.userService.getUser().subscribe(user => {
      this.user = user
    })
  }
}
