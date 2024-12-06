const express = require("express");
const app = express();
const mysql = require('mysql2');

const hostname = '127.0.0.1';
const port = 3000;

const db = mysql.createConnection({
   host: 'localhost',
   database: 'library_db'

});

db.connect((err) => {
   if(err) {
      console.error('Error connecting to the db');
      return;
   }
   console.log('connected to db')
});

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
   res.render('index');
})

app.post('/login', (req, res) => {
   const {username, password} = req.body;
   db.query('SELECT * FROM user_info WHERE username = ? AND password = ?', [username, password], (err, result)=>{
      if(err){
         res.send('Database login error')
         return;
      }
   
      if(result.length > 0){
         res.send('Login Successful');
      }
      else{
         res.send('Index', {errorMessage: 'Invalid username or password'})
      }
   });
});

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
