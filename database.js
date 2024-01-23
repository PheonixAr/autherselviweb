// database connectivity//
// import { encrypt,decrypt } from './validation';

//  const enc = encrypt;
//  const dec = decrypt;



const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vijay@2003',
  database: 'authentication'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database:', err);
    return;
  }

  console.log('Connected to MySQL database!');

  // Query the database
  connection.query('select * from authentication', (err, results) => {
    if (err) {
      console.log('Error querying database:', err);
      return;
    }

    console.log('Results:', results);

    // Close the connection
    connection.end();
  });
});




// function checkdb(){

// }