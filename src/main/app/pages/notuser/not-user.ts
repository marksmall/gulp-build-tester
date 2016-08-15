'use strict'

import {Component} from '@angular/core'

import {Header} from '../../modules/header/header'
import {Footer} from '../../modules/footer/footer'
import {NotUserFormComponent} from '../../modules/notuser/not-user-form.component'

@Component({
  templateUrl: 'pages/notuser/not-user.template.html',
  directives: [Header, Footer, NotUserFormComponent]
})
export class NotUser {

}
