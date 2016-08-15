'use strict'

// import Angular 2
import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {Router, RouteData} from '@angular/router-deprecated'
import {Location} from '@angular/common'

import {Subscription} from 'rxjs/Subscription'

import {capitalize} from 'lodash'

import {CollectionDetailComponent} from './collection-detail.component'
import {CollectionService} from './collection.service'
import {Collection, isSubscribed} from './collection'
import {User} from '../../../modules/user/user'
import {UserService} from '../../../modules/user/user.service'
import {DynamicSvgComponent} from '../../../modules/svg/dynamic-svg.component'

@Component({
  selector: 'collections',
  templateUrl: 'pages/home/collections/collections.template.html',
  directives: [CollectionDetailComponent, DynamicSvgComponent],
  providers: [CollectionService]
})
export class CollectionsComponent implements OnInit {
  private collections: Collection[]
  selectedCollection: Collection
  user: User
  @Output() collectionChange = new EventEmitter<Collection>()

  constructor(private collectionService: CollectionService,
              private userService: UserService,
              private router: Router,
              private routeData: RouteData,
              private location: Location) {
    console.log('Collection component loaded')
  }

  selectCollection(collection: Collection) {
    let collectionId = capitalize(collection.id)

    this.router.navigate([`/${collectionId}`])
    this.onSelect(collection)
  }

  canAccessCollection(collection: Collection): boolean {
    if (!this.user) {
      return true
    }

    if (!this.isSubscribed(collection)) {
      return false
    }

    return true
  }

  private isSubscribed(collection: Collection): boolean {
    return isSubscribed(this.user, collection)
  }

  /**
   * Get the promise of a list of collections from the service, then assign the list to
   * the collections variable.
   */
  private getCollections(): Promise<Collection[]> {
    return this.collectionService.getCollections().then(collections => {
      this.collections = collections

      let collectionId = this.routeData.get('collectionId')
      if (collectionId) {
        this.onSelect(this.getCollectionFromId(collectionId))
      }

      return collections
    })
  }

  /**
   * Executed when a user clicks on a collection.
   */
  private onSelect(collection: Collection) {
    console.log('Selected Collection: ', collection)
    this.selectedCollection = collection
    this.collectionChange.emit(collection)
  }

/**
 * Gets the currently selected collection from a collection id
 */
  private getCollectionFromId(collectionId: string): Collection {
    let collections = this.collections.filter(c => c.id === collectionId)
    if (collections.length !== 1) {
      throw `Configuration error. Collection id ${collectionId} is unknown.`
    }

    return collections[0]
  }

  private getUser(): Subscription {
    return this.userService.getUser().subscribe(user => {
      this.user = user

      this.sortCollections()

      return user
    })
  }

  private sortCollections() {
    let subscribedCollections = this.collections.filter(c => this.isSubscribed(c))
    let notSubscribedCollections = this.collections.filter(c => !this.isSubscribed(c))

    this.collections = subscribedCollections.concat(notSubscribedCollections)
  }

  /**
   * Once this component has been loaded, initialise it by excuting this function.
   */
  ngOnInit() {
    this.getCollections()
        .then(() => this.getUser())

    // Need to check the browser pop state events to update the selected collection
    // when the back/forward buttons are pressed.
    // This subscribes to the history change event.
    this.location.subscribe(value => {
      try {
        let collectionUrl = value.url === '' ? '/welcome' : value.url
        let collection = this.getCollectionFromId(collectionUrl.slice(1))
        this.onSelect(collection)
      } catch (e) { /* ignore, not a collection URL */ }
    })
  }
}
