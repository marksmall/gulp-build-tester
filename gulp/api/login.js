'use strict'

import gutil from 'gulp-util'
import dot from 'dot'

import user from './user'

// Mostly based on the structure from https://redmine.edina.ac.uk/issues/13829
// but slightly simplified (e.g. serviceRestrictions has been replaced with
// activatedCollections)
const templateUser = {
  state: 'REGISTERED',
  userType: 'Undergraduate',
  title: 'Mr',
  firstName: 'Joe',
  surname: 'Ninety',
  email: 'joe90@puppet.ac.uk',
  username: 'tc1:909090909090909',
  hearabout: 'Student',
  canAccessDownloader: true,
  institution: {
    id: 100001,
    hei: 'tc1',
    name: 'Test College OS',
    downloadDomainRestriction: true,
    subscribedCollections: ['digimap', 'geology', 'historic', 'marine'],
    departments: ['Architecture', 'Computer Science', 'Basement'],
    supportUrl: '/nolocalinfo'
  },
  department: 'Basement',
  roles: {
    admin: true,
    siterep: true,
    supportContactable: true,
    marketingContactable: true
  },
  activatedCollections: [ 'digimap', 'geology', 'historic' ],
  serviceRestrictions: [ 'GEOLOGYDOWNLOAD' ]
}

let templates = dot.process({path: './gulp/api/templates'})

let showLoginPage = (req, res) => {
  gutil.log(gutil.colors.green('\nSetting User in Template: ' + JSON.stringify(user.user, null, 2)))
  res.send(templates.setupForm(user.user ? user.user : templateUser))
}

let login = (req, res) => {
  let b = req.body
  gutil.log('input to login: ' + JSON.stringify(b))

  let userDetails = {
    state: b.state,
    title: b.title,
    firstName: b.firstName,
    surname: b.surname,
    email: b.email,
    username: b.username,
    hearabout: b.hearabout,
    canAccessDownloader: b.canAccessDownloader,
    institution: {
      id: b.institutionid,
      hei: b.institutionhei,
      name: b.institution,
      downloadDomainRestriction: b.downloadDomainRestriction === 'true',
      subscribedCollections: b.subscribedCollections === undefined ? [] : b.subscribedCollections,
      departments: JSON.parse(b.departments),
      supportUrl: '/nolocalinfo'
    },
    department: b.department,
    roles: {
      admin: b.admin === 'true',
      siterep: b.siterep === 'true',
      supportContactable: b.supportContactable === 'true',
      marketingContactable: b.marketingContactable === 'true'
    },
    activatedCollections: b.activatedCollections === undefined ? [] : b.activatedCollections,
    serviceRestrictions: b.serviceRestrictions === undefined ? [] : b.serviceRestrictions
  }

  req.body = userDetails
  user.setUser(req, res)
  gutil.log(gutil.colors.green('Logged In User: ' + JSON.stringify(user.user)))

  res.redirect('/')
}

export default {
  showLoginPage,
  login
}
