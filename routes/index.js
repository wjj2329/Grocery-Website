var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency


/* Set up mongoose in order to connect to mongo database */
mongoose.connect('mongodb://localhost/usersDB'); //Connects to a mongo database called "usersDB"
var userSchema = mongoose.Schema({ //Defines the Schema for this database
  UserName: String,
  GroceryList: Array,
  WeeklyRecipes: { Weekday: String, Recipe_ID: Number, Recipe_Title: String, Recipe_Img: String }
});
var User = mongoose.model('User', userSchema); //Makes an object from that schema as a model
var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
  console.log('Connected to Database');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { Root: 'public' });
});

/* POST user route */
router.post('/user', function(req, res, next) {
  console.log("POST user route"); //[1]
  console.log(req.body); //[2]
  var newuser = new User(req.body); //[3]
  console.log(newuser); //[3]
  newuser.save(function(err, post) { //[4]
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.delete('/remove', function(req, res, next) {
  console.log("DELETE user route"); //[1]
  console.log(req.body); //[2]
  var removeUser = function(req, callback) {
     db.collection('Users').deleteOne(
        { "userName": req },
        function(err, results) {
           console.log(results);
        }
     );
  };
});

/* GET users from database */
router.get('/user', function(req, res, next) {
  console.log("In the GET route!");
  User.find(function(err,userList) { //Calls the find() method on your database
    if (err) return console.error(err); //If there's an error, print it out
    else {
      console.log(userList); //Otherwise console log the comments you found
      res.json(userList); //Then send them
      
    }
  })
});

module.exports = router;
