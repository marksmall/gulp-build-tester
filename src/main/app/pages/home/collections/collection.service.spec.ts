import {describe, it, xit, inject, fakeAsync, tick, addProviders} from '@angular/core/testing'

import {CollectionService} from './collection.service'
import {Collection} from './collection'

describe('Collection Service', () => {
  beforeEach(() => {
    addProviders([CollectionService])
  })

  it('should retrieve Collections', fakeAsync(inject([CollectionService], (collectionService: CollectionService) => {
    let collections: Promise<Collection[]> = collectionService.getCollections()

    expect(collections).toBeDefined()

    tick()

    collections.then((collections: Collection[]) => {
      expect(collections.length).toBeGreaterThan(0)
    })
  })))
})
