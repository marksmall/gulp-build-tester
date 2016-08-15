// Ensure Bootstrap 3 JavaScript is included.
require('jquery')
require('bootstrap-sass')

// Ensure ECMAScript Internationalization API polyfills available so Dates work on Safari.
require('intl-locales-supported')
require('intl')
require('intl/locale-data/jsonp/en.js')

import {Component, ApplicationRef} from '@angular/core'
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from '@angular/router-deprecated'

import {Home} from '../pages/home/home'
import {Logout} from '../pages/logout/logout'
import {Update} from '../pages/update/update'
import {Registration} from '../pages/registration/registration'
import {Activate} from '../pages/activate/activate'
import {NotUser} from '../pages/notuser/not-user'
import {Verify} from '../pages/verify/verify'
import {NoLocalInfo} from '../pages/nolocalinfo/nolocalinfo'

import {UserService} from '../modules/user/user.service'
import {ConfigService} from '../modules/config/config.service'

@Component({
  selector: 'app',
  templateUrl: 'core/app.template.html',
  directives: [RouterOutlet, RouterLink],
  providers: [UserService, ConfigService],
})
@RouteConfig([
  // IMPORTANT if any URLs here are modified, the Apache rewrite rules need modified too
  // Start of collection list
  // Path can be anything, as and collectionId *must* match except for as must start with a capital
  // eg, path: '/abc', as: 'Xyz', data: { collectionId: 'xyz' }
  { path: '/', component: Home, name: 'Welcome', data: { collectionId: 'welcome' } },
  { path: '/os', component: Home, name: 'Digimap', data: { collectionId: 'digimap' } },
  { path: '/historic', component: Home, name: 'Historic', data: { collectionId: 'historic' } },
  { path: '/geology', component: Home, name: 'Geology', data: { collectionId: 'geology' } },
  { path: '/marine', component: Home, name: 'Marine', data: { collectionId: 'marine' } },
  { path: '/environment', component: Home, name: 'Environment', data: { collectionId: 'environment' } },
  { path: '/discover', component: Home, name: 'Discover', data: { collectionId: 'discover' } },
  // End of collection list
  { path: '/logout', component: Logout, name: 'Logout', data: undefined },
  { path: '/update', component: Update, name: 'Update', data: undefined },
  { path: '/register', component: Registration, name: 'Register', data: undefined },
  { path: '/activate', component: Activate, name: 'Activate', data: undefined },
  { path: '/notuser', component: NotUser, name: 'NotUser', data: undefined },
  { path: '/verify/:token', component: Verify, name: 'Verify', data: undefined },
  { path: '/verify', component: Verify, name: 'Verify', data: undefined },
  { path: '/nolocalinfo', component: NoLocalInfo, name: 'NoLocalInfo', data: undefined },
  // IMPORTANT if any URLs here are modified, the Apache rewrite rules need modified too
])
export class App {
  constructor(private applicationRef: ApplicationRef, private router: Router) {
    console.log('Application bootstrapped!')

    // The hack below makes history work in IE11 and Safari
    // https://github.com/angular/angular/issues/7873
    router.subscribe(() => {
      this.applicationRef.tick()
      setTimeout(() => {
        this.applicationRef.tick()
      }, 100)
    })
  }
}

