const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

  connection.connect(function(err){
    if(err) throw err 
  })

  module.exports=connection