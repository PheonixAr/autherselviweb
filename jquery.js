// // var path = require('path'),
// //        opendatabase = require('opendatabase')

// // var database_dir = path.join(path.dirname(__filename), 'test_openDatabase.sqlite')
// // var open_db = new opendatabase({name: database_dir, version: "1.0", description: "Example database for indurate.js", size: 3*1024*1024})


// // var log = function(message) {
// //     console.log('[opendatabase test script] '+message)

// // }

// // var err = function(tx, error) {
// //     console.log(error.message+'Code: '+error.code)
// //     // tx object is here as well
// //     log('inserting data into table from the error callback..')
// //     tx.executeSql('INSERT OR REPLACE INTO opendb_test VALUES(?, ?);', ['Column 1 text', 'Column 2 text'], function(tx, results) {
// //         log('Successfully created new table with sql command --> '+results.rows.sql+'\nResults length is '+results.rows.length+'\nRow Affected: '+results.rowsAffected+'\nInsert Id '+results.insertId)
// //         log('\n\n-- This should indicate that your opendatabase module is working correctly. --')
// //     }, err) // <-- !THIS WILL BE CALLED IN A INFINATE LOOP IF THE TX RETURNS AN ERROR

// // }

// // log('Opening a new transaction..')
// // open_db.transaction(function(tx) {
// //     log('Creating a new table if not exists..')
// //     tx.executeSql('CREATE TABLE IF NOT EXISTS opendb_test(? TEXT UNIQUE, ? TEXT);', ['name', 'column_field'], function(tx, results) {
// //         log('Successfully created new table with sql command --> '+results.rows.sql+'\nResults length is '+results.rows.length+'\nRow Affected: '+results.rowsAffected+'\nInsert Id '+results.insertId)
// //         log('Inserting a table with a bad sql command (syntax errors)..')
// //         tx.executeSql('INSERT OR REPdLACE INTO opendb_test VALUES(?, ?);', ['Column 1 text', 'Column 2 text'], function(tx, results) {
// //             log('This can\'t happen because the command syntax is bad')
// //         }, err) // Call this due to syntax errors
// //     }, err)

// // })


// <script type="text/javascript">
//                 var db;
                
//                 $(function(){
//                     db = openDatabase('HelloWorld');
                
//                     db.transaction(
//                         function(transaction) {
//                             transaction.executeSql(
//                                 'CREATE TABLE IF NOT EXISTS Table1 ' +
//                                 '  (TableID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
//                                 '   Field1 TEXT NOT NULL );'
//                             );
//                         }
//                     );
                
//                     db.transaction(
//                         function(transaction) {
//                             transaction.executeSql(
//                                 'SELECT * FROM Table1;',function (transaction, result) {
//                                     for (var i=0; i < result.rows.length; i++) {
//                             alert('1');
//                                         $('body').append(result.rows.item(i));
//                                     }
//                                 }, 
//                                 errorHandler
//                             );
//                         }
//                     );
                
//                     $('form').submit(function() {
//                         var xxx = $('#xxx').val();
//                         db.transaction(
//                             function(transaction) {
//                                 transaction.executeSql(
//                                 'INSERT INTO Table1 (Field1) VALUES (?);', [id], function(){
//                                     alert('Saved!');
//                                 }, 
//                                 errorHandler
//                                 );
//                             }
//                         );
//                         return false;
//                     });
//                 });
                
//                 function errorHandler(transaction, error) {
//                     alert('Oops. Error was '+error.message+' (Code '+error.code+')');
//                     transaction.executeSql('INSERT INTO errors (code, message) VALUES (?, ?);', 
//                     [error.code, error.message]);
//                     return false;
//                 }
//                 </script>
