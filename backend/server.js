// Required dependencies 
const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.use(bodyParser.json());


// var sequelize = new Sequelize('database', 'username', 'password');  


// set up connection with local mysql db
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'Ambrose',
    password: 'Developer82',
    database: 'hacknow'
});

conn.connect((err) =>{
    if(err){
    throw err;
    console.log("Not connected");

    } 
  
    else{
        console.log('mysql connected');

    }
   
});


// get all communities
app.get('/api/communities', (req, res) =>{
    let sql = "SELECT * FROM hacknow.Communities";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      });
});


// get all communities
app.get('/api/communities/:id', (req, res) =>{
    let sql = "SELECT comm.id, comm.name, room.name FROM hacknow.Communities comm INNER JOIN hacknow.Rooms room ON (comm.id = room.community_id) WHERE Communities.id=" + req.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      });
});



















// APP ROUTES

// cookieSession config
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['3qa45445afsfe'] //not sure what to put here
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

// Strategy config
passport.use(new GoogleStrategy({
        clientID: '647209399838-q59ko2epjtjleoksc6640agp1bir6asj.apps.googleusercontent.com',
        clientSecret: '84gNXS9uRPd6IfLxaSL1UcBy',
        callbackURL: 'http://localhost:8000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        done(null, profile); // passes the profile data to serializeUser
    }
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
    done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
    if (req.user) {
        console.log("req.user.id is ");    
        console.log(req.user);

        next();
    } else {
        res.redirect('/');
    }
}

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// passport.authenticate middleware is used here to authenticate the request
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile'] // Used to specify the required data
    
    
}));

// The middleware receives the data from Google and runs the function on Strategy config
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/chatrooms');
});

// Secret route
app.get('/secret', isUserAuthenticated, (req, res) => {
    res.render('secret.ejs');
});


//Get Rooms
app.get('/rooms', isUserAuthenticated, (req, res) =>{

});


// chatroom route
app.get('/chatrooms', isUserAuthenticated, (req, res) => {
    console.log(req);
    res.render('chatroom.ejs');
});

// Logout route
app.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/');
});

app.listen(8000, () => {
    console.log('Server Started!');
});