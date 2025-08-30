import mysql from 'mysql2';

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "schooldb"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL DB Connected");
});

export default db;