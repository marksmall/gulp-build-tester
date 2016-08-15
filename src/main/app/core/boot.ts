'use strict'

import 'reflect-metadata'

// import the application
import {App} from './app'

// import Angular 2
import {bootstrap} from '@angular/platform-browser-dynamic'
import {provide, enableProdMode} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {FORM_PROVIDERS} from '@angular/common'
import {disableDeprecatedForms, provideForms} from '@angular/forms'

// import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform/common_dom'

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
// import {LocationStrategy, PathLocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS} from 'angular2/router'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated'

// enable production mode of Angular
// In dev mode, the system.js code is inline, where as in production
// it is in an external src file. So checking for the presence of a src
// attribute tells us if we're in dev or prod.
let scripts = document.scripts
let src = scripts[scripts.length-1].getAttribute('src')
if (src) {
  enableProdMode()
}

// bootstrap our app
console.log('Bootstrapping the Application')

// in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
bootstrap(App, [
  //appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  FORM_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  // ELEMENT_PROBE_PROVIDERS, // remove in production
  // provide(LocationStrategy, { useClass: PathLocationStrategy }) // can be switched to HashLocationStrategy if you cannot configure your server appropriately for URL rewriting

]).then(
  (success:any) => console.log('Application Bootstrap successful'),
  (error:any) => console.error(error)
)
