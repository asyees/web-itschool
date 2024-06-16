var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  port     : '3310',
  user     : 'root',
  password : '123456789',
  database : 'detmi'
});

migration.init(connection, __dirname + '/migrations');