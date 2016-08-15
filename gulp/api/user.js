'use strict'

import gutil from 'gulp-util'
import _ from 'lodash'

import licence from './licence'

export let user = null

/**
 * Return the User as JSON in the response.
 */
let getUser = (req, res) => {
  let userBody = {}
  if (user !== null) {
    userBody.loggedIn = true
    userBody.userDto = user
  } else {
    userBody.loggedIn = false
    userBody.userDto = null
  }
  res.json(userBody)
}

/**
 * Logout moved here to allow setting the user to null. This will not
 * automatically redirect the user to the homepage.
 */
let logout = (req, res) => {
  if (user && user.firstName !== 'Error') {
    user = null
    gutil.log(gutil.colors.green('Logged out User: ' + JSON.stringify(user)))
    res.json({status: 'success'})
  } else {
    gutil.log(gutil.colors.green('User not logged out: ' + JSON.stringify(user)))
    res.status(500)
    res.json({ message: 'Could not log user off' })
  }
}

/**
 * Set the User's details from the request.
 *
 * This method has been changed to assume that the request body is
 * a JSON object which follows the same structure as the User object.
 */
let setUser = (req, res) => {
  let reqUser = req.body

  user = {}
  user.loggedIn = reqUser.loggedIn
  user.state = reqUser.state
  user.userType = reqUser.userType
  user.title = reqUser.title
  user.firstName = reqUser.firstName
  user.surname = reqUser.surname
  user.email = reqUser.email
  user.username = reqUser.username
  user.hearabout = _.clone(reqUser.hearabout)
  user.canAccessDownloader = reqUser.canAccessDownloader
  user.institution = _.cloneDeep(reqUser.institution)
  user.department = _.clone(reqUser.department)
  user.activations = _.clone(reqUser.activations)
  user.roles = _.clone(reqUser.roles)
  user.activatedCollections = _.clone(reqUser.activatedCollections)
  user.serviceRestrictions = _.clone(reqUser.serviceRestrictions)

  if (user.state === 'PENDING') {
    let expireDate = new Date()
    expireDate.setTime(expireDate.getTime() + (24 * 60 * 60 * 1000))
    user.verificationExpiry = expireDate
  }

  gutil.log(gutil.colors.green('Set User: ' + JSON.stringify(user)))
}

/**
 * Get subset of user data for the update user function.
 */
let getUpdateUser = (req, res) => {
  if (user == null) {
    gutil.log(gutil.colors.green('getUpdateUser: user is null, returning 400 error'))
    res.status(400)
  } else {
    let details = {
      username: user.username,
      state: user.state,
      title: user.title,
      firstName: user.firstName,
      surname: user.surname,
      email: user.email,
      institutionName: user.institution.name,
      department: user.department,
      institutionDepartments: user.institution.departments,
      supportContactable: user.roles.supportContactable,
      marketingContactable: user.roles.marketingContactable
    }
    gutil.log(gutil.colors.green('getUpdateUser: ' + JSON.stringify(details)))
    res.status(200)
    res.json(details)
  }
}

/**
 * Set the update user data.
 */
let setUpdateUser = (req, res) => {
  if (req.body.firstName !== 'Error') {
    gutil.log(gutil.colors.green('setUpdateUser: ' + JSON.stringify(req.body)))
    user.title = req.body.title
    user.firstName = req.body.firstName
    user.surname = req.body.surname
    user.department = req.body.department
    user.roles.supportContactable = req.body.supportContactable
    user.roles.marketingContactable = req.body.marketingContactable
    res.status(200)
    res.json('true')
  } else {
    gutil.log(gutil.colors.green('setUpdateUser: return error'))
    res.status(400)
    res.json('false')
  }
}

/**
 * Get subset of user data for the update user function.
 */
let getRegisteringUser = (req, res) => {
  if (user == null) {
    gutil.log(gutil.colors.green('getRegisteringUser: user is null, returning 400 error'))
    res.status(400)
    res.json({
      message: 'getRegisteringUser internal error (user is null)'
    })
  } else if (user.firstName === 'Error') {
    gutil.log(gutil.colors.green('getRegisteringUser: user\'s first name is \'Error\', returning 400 error'))
    res.status(400)
    res.json({
      message: 'There has been an internal error. Please refresh the page and try again.'
    })
  } else {
    let details = {
      title: user.title,
      firstName: user.firstName,
      surname: user.surname,
      email: user.email,
      state: user.state,
      institutionName: user.institution.name,
      departments: [ 'Edina', 'Ed Uni' ],
      department: '',
      userTypes: [ 'Student', 'Staff' ],
      userType: '',
      hearAbouts: [ 'Search Engine', 'Word of Mouth' ],
      hearAbout: '',
      supportContactable: user.roles.supportContactable,
      marketingContactable: user.roles.marketingContactable
    }
    gutil.log(gutil.colors.green('getUpdateUser: ' + JSON.stringify(details)))
    res.status(200)
    res.json(details)
  }
}

/**
 * Set the update user data.
 */
let registerUser = (req, res) => {
  if (req.body.firstName === 'Error') {
    gutil.log(gutil.colors.green('registerUser: user\'s first name is \'Error\', returning 400 error'))
    res.status(400)
    res.json({
      message: 'There has been an internal error. Please refresh the page and try again.'
    })
  } else {
    gutil.log(gutil.colors.green('registerUser: ' + JSON.stringify(req.body)))
    user.title = req.body.title
    user.firstName = req.body.firstName
    user.surname = req.body.surname
    user.department = req.body.department
    user.userType = req.body.userType
    user.hearAbout = req.body.hearAbout
    user.roles.supportContactable = req.body.supportContactable
    user.roles.marketingContactable = req.body.marketingContactable
    user.state = 'PENDING'
    res.status(200)
    res.json({ message: 'success' })
  }
}

/**
 * Get subset of user data for the Not User function.
 */
let getNotUser = (req, res) => {
  if (user == null) {
    gutil.log(gutil.colors.green('getNotUser: user is null, returning 400 error'))
    res.status(400)
  } else if (user.state !== 'REGISTERED') {
    gutil.log(gutil.colors.green('getNotUser: user is not registered'))
    res.status(400)
    res.json({
      message: 'Not registered: you must register before using this service'
    })
  } else if (user.firstName === 'Error') {
    gutil.log(gutil.colors.green('getNotUser: user\'s first name is \'Error\', returning 400 error'))
    res.status(400)
    res.json({
      message: 'There has been an internal error. Please refresh the page and try again.'
    })
  } else {
    let details = {
      name: user.firstName + ' ' + user.surname,
      email: user.email,
      institutions: ['Edina', 'Test College OS', 'Edinburgh University'],
      institution: user.institution.name,
      comments: 'Please leave comments here...'
    }
    gutil.log(gutil.colors.green('getNotUser: ' + JSON.stringify(details)))
    res.status(200)
    res.json(details)
  }
}

/**
 * Set the update user data.
 */
let setNotUser = (req, res) => {
  if (req.body.name !== 'Error') {
    gutil.log(gutil.colors.green('setNotUser: ' + JSON.stringify(req.body)))

    res.status(200)
    res.json('true')
  } else {
    gutil.log(gutil.colors.green('setNotUser: return error'))
    res.status(400)
    res.json('false')
  }
}

/**
 * The purposes array for selection.
 */
const purposes = [{
  id: 1,
  purposeType: 'BUILT_IN',
  name: 'Academic Works (coursework, projects, dissertations etc.)'
}, {
  id: 2,
  purposeType: 'BUILT_IN',
  purpose: 'Research'
}, {
  id: 3,
  purposeType: 'BUILT_IN',
  purpose: 'Teaching (setting coursework, study packs etc.)'
}, {
  id: 4,
  purpose: 'Presentations (conferences, workshops, posters etc.)'
}, {
  id: 5,
  purposeType: 'BUILT_IN',
  purpose: 'Campus Maps'
}, {
  id: 6,
  purposeType: 'BUILT_IN',
  purpose: 'Supporting Digimap users'
}, {
  id: 7,
  purposeType: 'BUILT_IN',
  purpose: 'General Interest'
}, {
  id: 8,
  purposeType: 'USER_SUBMITTED',
  purpose: 'Other'
}]

const collectionNames = [{
  id: 'digimap',
  name: 'Ordnance Survey Collection'
}, {
  id: 'historic',
  name: 'Historic Collection'
}, {
  id: 'geology',
  name: 'Geology Collection'
}, {
  id: 'marine',
  name: 'Marine Collection'
}, {
  id: 'environment',
  name: 'Environment Collection'
}]

let getCollectionList = () => {
  let subscribedCollections = user.institution.subscribedCollections
  let activatedCollections = user.activatedCollections
  let notActivated = _.difference(subscribedCollections, activatedCollections)

  let activeCollections = []

  // Create DTOs for non-activated collections.
  notActivated.forEach((activated) => {
    let name = _(collectionNames).filter(collection => collection.id === activated).map(collection => collection.name).value()
    name = name[0]
    activeCollections.push({
      id: activated,
      name: name,
      licence: licence.licence,
      licenceAccepted: false,
      purposes: purposes,
      purpose: {
        id: 0,
        purposeType: null,
        purpose: null
      },
      otherPurpose: '',
      state: 'NOT_ACTIVATED'
    })
  })

  activatedCollections.forEach((activated) => {
    let name = _(collectionNames).filter(collection => collection.id === activated).map(collection => collection.name).value()
    // Randomly choose purpose. If purpose.id = 8, then choose state 'QUERIED' and add some text for otherPurpose.
    // Otherwise,  we randomly choose one of the state: 'ACTIVE', 'DEACTIVATED', 'EXPIRED', 'REJECTED'.
    let purpose = _.shuffle(purposes)[0]
    let otherPurpose = purpose.id === 8 ? 'SOME OTHER PURPOSE TEXT' : ''
    let state = _.sample(['ACTIVE', 'DEACTIVATED', 'EXPIRED', 'REJECTED'])
    // Only reset state if purpose.id are equal.
    state = purpose.id === 8 ? 'QUERIED' : state

    activeCollections.push({
      id: activated,
      name: name,
      licence: licence.licence,
      licenceAccepted: true,
      purposes: purposes,
      purpose: purpose,
      otherPurpose: otherPurpose,
      state: state
    })
  })

  return activeCollections
}

/**
 * Get subset of user data for the Activate Collections function.
 */
let getActivations = (req, res) => {
  if (user == null) {
    gutil.log(gutil.colors.green('getCollections: user is null, returning 400 error'))
    res.status(400)
    res.json({
      message: 'User is not logged in'
    })
  } else if (user.firstName === 'Error') {
    gutil.log(gutil.colors.green('getActivations: user\'s first name is Error'))
    res.status(400)
    res.json({
      message: 'User\'s first name was Error'
    })
  } else {
    gutil.log(gutil.colors.green('getActivations: returning success'))
    let list = getCollectionList()

    res.status(200)
    res.json(list)
  }
}

/**
 * Set the Activated Collections user data.
 */
let setActivations = (req, res) => {
  if (user.firstName === 'Error') {
    gutil.log(gutil.colors.green('setActivations: user\'s first name is Error'))
    res.status(400)
    res.json({
      message: 'User\'s first name was Error'
    })
  } else {
    gutil.log(gutil.colors.green('setActivations: ' + JSON.stringify(req.body, null, 2)))
    let collections = req.body

    let activatedCollections = []
    collections.forEach((collection) => {
      gutil.log(gutil.colors.green('collection: ' + JSON.stringify(collection, null, 2)))
      if (collection.licenceAccepted) {
        activatedCollections.push(collection.id)
      }
    })

    user.activatedCollections = activatedCollections
    gutil.log(gutil.colors.green('Activated Collections: ' + activatedCollections))
    res.status(200)
    res.json({ message: 'success' })
  }
}

export default {
  user,
  getUser,
  setUser,
  getUpdateUser,
  setUpdateUser,
  getRegisteringUser,
  registerUser,
  getNotUser,
  setNotUser,
  getActivations,
  setActivations,
  logout
}
