"use strict";

import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import {User} from "../user/user";
import {RegisterUserDto} from "./register-user";

let query = require("query-string");

const API = {
  register: "api/user/register",
  resend: "api/user/register/resend",
};

@Injectable()
export class RegisterUserService {
  constructor(private http: Http) {
  }

  /**
   * Get the current user state which can be viewed/modified by the update user
   * function. Rethrows errors as an observable.
   */
  getRegisteringUser(): Observable<RegisterUserDto> {
    return this.http.get(API.register)
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => res.json());
  }

  registerUser(user: RegisterUserDto): Observable<void> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put(API.register,
                         JSON.stringify(user),
                         { headers: headers })
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => null);
  }

  resendConfirmation(user: User): Observable<void> {
    return this.http.get(API.resend)
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => null);
  }
}
