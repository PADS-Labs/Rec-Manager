var pg = require('pg');

var conString = process.env.ELEPHANTSQL_URL || "postgres://hsvpbsvb:NF1tFnvlAMUjzJMnIa3GeKkrki9rX8ta@baasu.db.elephantsql.com:5432/hsvpbsvb/";

var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});



//CREATE DATABASE reinforcement;

// const mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'baasu.db.elephantsql.com',
//     user: 'hsvpbsvb',
//     password: 'NF1tFnvlAMUjzJMnIa3GeKkrki9rX8ta',
//     database: 'Reinforcement'
// });

// connection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
//     console.log('Connected to the MySQL server.');
//   });


//Connection URL format: postgres://username:password@hostname/databasename


//SQL POOLING:
// var pool = mysql.createPool({
//     connectionLimit: 5,
//     host: 'localhost',
//     user: 'root',
//     password: '', 
//     database: 'todoapp'
// });

// pool.getConnection(function(err, connection) {
//     // execute query
//     // ...
//   });

//   pool.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     // close all connections
//   });