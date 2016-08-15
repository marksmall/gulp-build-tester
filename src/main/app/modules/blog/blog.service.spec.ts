import {describe, expect, it, xit,inject, fakeAsync, tick, addProviders} from '@angular/core/testing'
import {MockBackend} from '@angular/http/testing'
import {provide} from '@angular/core'
import 'rxjs/add/operator/map'
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http'

import {BlogService} from './blog.service'
import {Blog} from './blog'

describe('News Service', () => {
  // Setup Http injectable to mock Http requests.
  beforeEach(() => {
    addProviders([BaseRequestOptions, MockBackend, BlogService,
      provide(Http, {
        useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions)
        }, deps: [MockBackend, BaseRequestOptions]
      }),
    ])
  })

  it('should retrieve News Blog posts', fakeAsync(inject([BlogService, MockBackend],
    (blogService: BlogService, mockBackend: MockBackend) => {
    let response: Blog[]
    let mockBody = '[{\'id\':1,\'title\':\'Mock Title\'}]'

    // Mock backend request and verify that the request URL is as expected.
    mockBackend.connections.subscribe((conn: any) => {
      expect(conn.request.url).toBe('api/blogs?id=news')
      let response = new ResponseOptions({body: mockBody})
      conn.mockRespond(new Response(response))
    })

    // Make request and assign response.
    blogService.getPosts('news').subscribe((res) => {
      response = res
    })

    // Emulate passage of time.
    tick()

    // Verify response.
    expect(response[0].title).toBe('Mock Title')
  })))
})
