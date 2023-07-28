const sqlite3 = require('sqlite3').verbose();
let sql;

//connet to DB
 const db = new sqlite3.Database('./test.db',sqlite3.OPEN_READWRITE,(err) => {
     if (err) return console.error(err.message);
 });

//Create table
//   sql = `CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)`;
//   db.run(sql);

//Drop table
//  db.run("DROP TABLE users");

//Insert data into table
//    sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`;
//    db.run(sql,["yucel","haliloglu","yucelhal","sifreiki","yucel@emailcam"],
//     (err) => {
//        if (err) return console.error(err.message);
//    });

//query the data
  sql = `SELECT * FROM users`;
  db.all(sql,{}, (err,rows) => {
      if (err) return console.error(err.message);
      rows.forEach((row) => {
          console.log(row);
      });
  });