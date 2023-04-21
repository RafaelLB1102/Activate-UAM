const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '<YOUR_CLIENT_ID>';
const CLIENT_SECRET = '<YOUR_CLIENT_SECRET>';
const REDIRECT_URI = '<YOUR_REDIRECT_URI>';

passport.use(new GoogleStrategy({
    clientID: "238700749237-co3sqjpkbpcsj9elfkv5ms61j7ta4rgs.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:9000/auth/google/callback"
},
(accessToken, refreshToken, profile, cb) => {
    // Aquí puedes procesar la información del usuario y guardarla en tu base de datos, si es necesario.
    return cb(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
