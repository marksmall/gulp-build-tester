import {Injectable} from '@angular/core'


import {Collection} from './collection'
import {COLLECTIONS} from './config'

@Injectable()
export class CollectionService {
  getCollections() {
    return Promise.resolve(COLLECTIONS)
  }
}
