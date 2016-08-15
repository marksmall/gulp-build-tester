'use strict'

import {Injectable} from '@angular/core'

import {Http, Response, Headers, URLSearchParams} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {Blog} from './blog'

@Injectable()
export class BlogService {

  private http: Http
  private API = 'api/blogs'

  constructor(http: Http) {
    this.http = http
  }

  /**
   * Get posts for a specific group of posts, we currently have 'news' and 'events'.
   *
   * @param id Identifier for types of Posts i.e. 'news', 'events' etc.
   */
  getPosts(id: string): Observable<Blog[]> {
    let params: URLSearchParams = new URLSearchParams()
    params.set('id', id)

    return this.http.get(this.API, {search: params}).map((res:Response) => {
      let blogs = res.json()
      blogs.forEach((element: any) => {
        element.date = new Date(element.date)
      })

      return blogs
    })
  }

}
