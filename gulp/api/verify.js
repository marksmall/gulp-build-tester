'use strict';

import {user} from './user';
import gutil from "gulp-util";

let verify = (req, res) =>{

  if (req.params.token === 'success') {
    user.state = 'REGISTERED';
    res.status(200);
    res.json({ message: 'success' });
  }
  else {
    res.status(400);
    res.json({ message: 'failure' });
  }
};

let resend = (req, res) => {
  gutil.log(gutil.colors.green('Resending verify email'));
  res.json();
}

export default {
  verify,
  resend
};
