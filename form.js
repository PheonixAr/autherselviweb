
class child{
      database()
        
      {    
        const mysql = require('mysql2');

        // Create a connection to the MySQL server
        const connection = mysql.createConnection({
          host: 'root', // Replace with your MySQL server host
          user: 'localhost', // Replace with your MySQL username
          password: 'Vijay@2003', // Replace with your MySQL password
          database: 'authentication' // Replace with your MySQL database name
        });
        
        // Connect to the database
        connection.connect((err) => {
          if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
          }
          console.log('Connected to MySQL database');
        });
        
        // Perform a sample query
        var sql = "INSERT INTO loginauth (firstname,lastname,Email,password) VALUES ?";
  //Make an array of values:
        var values = [
        ["phoenix","aravidn","phoenix567@gmail.com","9488470266"]
        ['demo','n','aff@gmail.com','ddfadf']
        ];

        connection.query(sql,[value], (err, results) => {
          if (err) {
            console.error('Error executing query:', err);
            return;
          }
          console.log('Query results:', results);
        
          // Close the connection after the query
          connection.end((err) => {
            if (err) {
              console.error('Error closing connection:', err);
            }
            console.log('Connection closed');
          });
        });
        
      //Make an array of values:
    }
}
// const output = database("aravind","vijay","phoenix@gmail.com","126378631");

const form = document.getElementById('myForm');
class parent extends child{
        anonymo(event) {
        event.preventDefault();

      // 1: get form data
      const formData = new FormData(form);
      // 2: store form data in object
      const jsonObject = Object.fromEntries(formData);
      // 3: convert form data object to a JSON string
      const jsonString = JSON.stringify(jsonObject);

      const  jparse =JSON.parse(jsonString);

           const dbfname = jparse.fname;
           const dblname = jparse.lname;
           const dbemail = jparse.emailId;
           const dbpassword = jparse.password;

            var objdata = {
               fname:dbfname, lname:dblname ,email:dbemail,pass:dbpassword
            };


          // Function to generate a random encryption key
      async function generateKey() {
          return await crypto.subtle.generateKey(
            { name: 'AES-GCM', length: 256 },
            true,
            ['encrypt', 'decrypt']
          );
        }
        
        // Function to encrypt a message
        async function encryptMessage(message, key) {
          const iv = crypto.getRandomValues(new Uint8Array(16));
          const encodedMessage = new TextEncoder().encode(message);
        
          const encryptedBuffer = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: iv },
            key,
            encodedMessage
          );
        
          return {
            iv: iv,
            encryptedMessage: new Uint8Array(encryptedBuffer)
          };
        }
        
        // Function to decrypt a message
        async function decryptMessage(encryptedData, key) {
          const { iv, encryptedMessage } = encryptedData;
        
          const decryptedBuffer = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: iv },
            key,
            encryptedMessage
          );
        
          return new TextDecoder().decode(decryptedBuffer);
        }
        
        // Example usage
        (async () => {
          const encryptionKey = await generateKey();
        
          const originalMessage = dbpassword;
          let encryptedData = await encryptMessage(originalMessage, encryptionKey);
          console.log('Encrypted:', encryptedData);
        
          const decryptedMessage = await decryptMessage(encryptedData, encryptionKey);
          console.log('Decrypted:', decryptedMessage);
        })();

        // database connectivity 
      }
        
    }


  const obj =  new parent()
  form.addEventListener('submit',obj.anonymo);
  obj.database;


// const opt= output.dbpassword;
// console.log(opt);