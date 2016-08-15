import {User} from '../../../modules/user/user'

export interface Collection {
  id: string
  name: string
  icon: string
  description?: string
  subscriptionRequired: boolean
  licence?: string
  licenceUrl?: string
  help?: Help
  apps: Application[]
}

export interface Application {
  id: string
  name: string
  link: string
  description: string
  infoContent: string
  infoExpanded?: boolean
  ipAccessRestricted?: boolean
}

interface Help {
  left: HelpIcon
  right: HelpIcon
}

interface HelpIcon {
  text: string
  link: string
}

export function isSubscribed(user: User, collection: Collection): boolean {
    if (!user) {
      return true
    }

    if (!collection.subscriptionRequired) {
      return true
    }

    return user.institution.subscribedCollections.indexOf(collection.id) !== -1
}

export function isActivated(user: User, collection: Collection): boolean {
  if (!user) {
    return true
  }

  return user.activatedCollections.indexOf(collection.id) !== -1
}

export function noServiceRestriction(user: User, application: Application): boolean {
  return user.serviceRestrictions.indexOf(application.id) === -1
}
