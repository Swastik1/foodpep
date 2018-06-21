const passport = require('passport');
const keys = require('../config/keys');
module.exports = (app) => {

//route handler
app.get(
  '/auth/google',
  passport.authenticate('google', {
    //scope used to know what access you want to have in google
    scope: ['profile','email']
  })
);
//2nd route handler to exchange the code with actual profile and email
app.get('/auth/google/callback'
,passport.authenticate('google'),
(req,res) => {
  res.redirect(keys.hostKey + '/restaurantsearch');
}
);

app.get('/api/logout',(req,res) => {
  req.logout();
  res.redirect('/')
}
);

app.get('/api/current_user',(req,res) => {
  res.send(req.user);
})
};
