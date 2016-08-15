import {describe, it, xit, inject, fakeAsync, tick, addProviders} from '@angular/core/testing'
import {TestComponentBuilder} from '@angular/compiler/testing'

import {CollectionsComponent} from './collections.component'
import {CollectionDetailComponent} from './collection-detail.component'
import {CollectionService} from './collection.service'
import {COLLECTIONS} from './config'
import {Collection} from './collection'

/**
 * Disabled test for the moment until there are better docs on component + directive testing
 */
describe('Collections component', () => {

  let tcb: TestComponentBuilder

  beforeEach(() => {
    addProviders([TestComponentBuilder, CollectionsComponent, CollectionDetailComponent])
    inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      this.tcb = tcb
    })
  })

  xit('Select Collection', () => {
    this.tcb.createAsync(CollectionsComponent).then((fixture: any) => {
      let collectionsComponent: CollectionsComponent = fixture.componentInstance

      collectionsComponent.collectionChange.subscribe((c: Collection) => {
        expect(c.id).toBe(COLLECTIONS[1].id)

        tick()
      })

      collectionsComponent.selectCollection(COLLECTIONS[1])

      expect(collectionsComponent.selectedCollection === COLLECTIONS[1])
    })
  })
})
