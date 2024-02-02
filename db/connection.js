const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'root',
      database: 'Employee_Tracker'
    },
    console.log(`Connected to the Employee_Tracker database.`)
  );

  connection.connect(function(err){
    if(err) throw err 
  })

  module.exports=connection