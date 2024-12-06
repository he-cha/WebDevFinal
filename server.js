const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path")
const cors = require('cors')
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
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.post('/login', (req, res) => {
   const { username, password } = req.body;
   db.query('SELECT * FROM user_info WHERE username = ?', [username], (err, rows) => {
      if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
      }

      if (rows.length === 0 || rows[0].password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
      }
      res.json({ success: true });
   });
});

app.get('/api/books', (req,res)=>{
   db.query('SELECT * FROM books', (err, rows)=>{
      if(err){
         return res.status(500).json({ error: 'Server error' });
      }
      res.json({books: rows});
   });
});
 


app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
