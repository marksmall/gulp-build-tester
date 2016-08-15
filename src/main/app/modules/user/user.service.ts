import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/share'

import {User} from '../user/user'

const API = 'api/user'

@Injectable()
export class UserService {
  userObservable: Observable<User>

  constructor(private http: Http) {
  }

  getUser(): Observable<User> {
    if (!this.userObservable) {
      this.userObservable = this.http.get(API)
          .map((res: Response) => {
            let userBody = res.json()
            let user = userBody.userDto
            if (userBody.loggedIn) {
              if (user.verificationExpiry) {
                user.verificationExpiry = new Date(user.verificationExpiry)
              }
              return user
            }
            return null
          })
          .share()
    }
    return this.userObservable
  }
}
