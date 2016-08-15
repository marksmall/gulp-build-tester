'use strict'

let getConfig = (req, res) => {
  res.json({
    'url.wayf.login': '/api/login',
    'newsflash': ['Oh hey something <strong>bad</strong> might be happening.<br><br>Very bad', 'Second item'],
    'session.timeout': '3600',
    'root.url': 'http://digimap.edina.ac.uk(configurable)',
    'authorisation.domainRestricted': 'This application is restricted from your IP',
    'authorisation.notActivated': 'You have not activated this collection',
    'authorisation.notSubscribed': 'Your institution is not subscribed to this collection'
  })
}

export default {
  getConfig
}
