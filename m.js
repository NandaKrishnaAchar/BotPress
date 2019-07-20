/*  CREATE DATABASE
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/
/*
  CREATE COLLECTION
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/

/*
  INSERTING TO COLLECTION
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var newscat="Astrology";
var userID=123;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { newscat:"Astrology", userID:123 };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

*/

/*
   FETCHING FROM DATABASE
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { newscat: "Astrology" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

/*  By using newscategory for user, we can fetch top news of tat category at tat time from AMARUJALA NEWS api
    Here the fetched news is var news="This is astrology news";
*/


var cron = require('node-cron');
//Runs every minute...
cron.schedule('* * * * *', () => {	
   var news="This is astrology news";
   console.log(news);
});	

