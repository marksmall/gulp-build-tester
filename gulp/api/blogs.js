'use strict'

// import gutil from 'gulp-util'

import news from './news'
import events from './events'

let getPosts = (req, res) => {
  // gutil.log(gutil.colors.green('Req Query String: ' + JSON.stringify(req.query)))

  let posts = null
  if (req.query.id === 'news') {
    posts = news.news
  } else if (req.query.id === 'events') {
    posts = events.events
  }

  res.json(posts)
}

export default {
  getPosts
}
