const EXPRESS = require("express")
const MONGOOSE = require("mongoose");
const APP = EXPRESS();
const ROUTES_APP = require("./routes");
const passport = require('passport');
require('./passport-setup');

require("dotenv").config();

APP.use(passport.initialize());
APP.use(passport.session());

// Ruta de inicio de sesión
APP.get('/login', (req, res) => {
  res.send('<a href="/auth/google">Inicia sesión con Google</a>');
});

// Ruta de cierre de sesión
APP.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// Ruta del perfil del usuario
APP.get('/profile', isLoggedIn, (req, res) => {
  res.send(`Bienvenido, ${req.user.displayName}!`);
});

// Middleware para verificar si el usuario está autenticado
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

APP.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

APP.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Autenticación exitosa, redirige a la página de perfil.
    res.redirect('/profile');
  });


APP.listen(process.env.CONNECTION_PORT, () => {
  console.log(`Listening port ${process.env.CONNECTION_PORT}`)
});

MONGOOSE.set("strictQuery", false);

MONGOOSE.connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("successful conection"))
  .catch((err) => console.log(err));

APP.use(EXPRESS.json());
ROUTES_APP(APP);
