const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path")

const hostname = '127.0.0.1';
const port = 3000;

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'library_db'

});

db.connect((err) => {
   if(err) {
      console.error('Error connecting to the db');
      return;
   }
   console.log('connected to db')
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.post('/login', (req, res) => {
   const query = "SELECT * FROM user_info WHERE username = ? AND password = ?"
   const {username, password} = req.body;
   db.query(query, [username, password], (err, result)=>{
      if(err){
         res.send('Database login error')
         return;
      } 
   
      if(result.length > 0){
         res.send('Login Successful');
      }
      else{
         res.send('Login Failed. Invalid username or password');
      }
   });
});

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
