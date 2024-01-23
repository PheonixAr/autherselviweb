// class demo{
//   constructor(name){
//     this.name=name;
//   }
//   printall(){
//     console.log(this.name);
//   }
// }
// class demo2 extends demo{
//   print(name){
//     super.parentMethod(name);
//   } 
// }

// let obj = new demo2("aravind")
// obj.printall()



// class db_parse {
    
//   constructor(dbfname,dblname,dbemail,dbpassword)
//   {
//       this.dbemail= dbemail;
//       this.dbfname = dbfname;
//       this.dblname = dblname;
//       this.dbpassword = dbpassword; 
//   }
  
// }


// class convert extends db_parse
// {
// jsonformatc(){

  
// }

// }

// let convertobj =  new convert();
// convertobj.jsonformatc()




//  // database/

// //  database connectivity

// let dbfname2 = dbfname;
// let dblname2 = dblname;
// let dbemail2 = dbemail;
// let dbpassword2 = dbpassword;







// const emailobj = form["email-ID"];
// const password = form["password"];

// //   console.log(dbemail,dbpassword,dbfname,dblname);
 
//    let jsontoDB = database(dbfname,dblname,dbpassword,dbemail)   
    
//   // {"fname":"aravind","lname":"b","email-Id":"aravind@gmail.com","password":"asfsdffa"}
// //   console.log(dbemail,dbpassword,dbfname,dblname);
 
//    let jsontoDB = database(dbfname,dblname,dbpassword,dbemail)   
    
//   // {"fname":"aravind","lname":"b","email-Id":"aravind@gmail.com","password":"asfsdffa"}


// Function to generate a random encryption key



// function form_data()
// {

// const form = document.getElementById('myForm');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();

// // 1: get form data
// const formData = new FormData(form);
// // 2: store form data in object
// const jsonObject = Object.fromEntries(formData);
// // 3: convert form data object to a JSON string
// const jsonString = JSON.stringify(jsonObject);

// const  jparse =JSON.parse(jsonString);

// var dbfname = jparse.fname;
// var dblname = jparse.lname;
// let dbemail = jparse.emailId;
// let dbpassword = jparse.password;

// });

// }
//  const output = form_data();
//  console.log(output.dbfname);


const mysql = require('mysql');
  const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vijay@2003",
  database: "authentication"
  });

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Make SQL statement:
  const sql = "INSERT INTO loginauth (firstname,lastname,Email,password) VALUES ?";
  //Make an array of values:
  const values = [
      // [form[dblname],form[dblname],form[dbemail],form["password"]]
    //   [this.dbfname,this.dblname,this.dbemail,this.dbpassword]
          // ['demo','n','aff@gmail.com','ddfadf']
          // []
          [dbfname,dblname,dbemail,dbpassword]
  ];
  console.log(dbpassword);
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
  });

  });