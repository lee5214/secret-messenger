const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google/', passport.authenticate('google', {
      //use keyword 'google' to fire google strategy
      scope: ['profile', 'email'],
    }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user); //passport automaticly attachs user(and other functions) to req
    //res.send(req.session)
  });

};
