
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senior1234',
  database: 'senior_web'
});
con.connect((err) => {
  if (err){
    console.log('Error connecting to Db');
    return;
  }
  // var sql='SELECT * FROM bus_info';
  // con.query(sql, function (err, data) {
  // if (err){
  //     console.log(err)
  // }
  // console.log(data)
  // });
  console.log('Connected!');
});

module.exports = con;