
export interface User {
  state: string
  userType: string
  title: string
  firstName: string
  surname: string
  email: string
  username: string
  hearabout: string
  institution: Institution
  department: string
  roles: Roles
  canAccessDownloader: boolean
  activatedCollections: string[]
  serviceRestrictions: string[]
  verificationExpiry?: Date
}

export interface Institution {
  hei: string
  name: string
  downloadDomainRestriction: boolean
  subscribedCollections: string[]
  departments: string[]
}

export interface Roles {
  admin: boolean
  siterep: boolean
  supportContactable: boolean
  marketingContactable: boolean
}

