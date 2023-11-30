const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

const app = express()
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    }),
);
app.use(bodyParser.json())



const port = 3000


//collegamento con database
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


//signUp
app.get('/users', async (req, res) => {
    const [users] = await pool.query("SELECT * FROM Common_User")
    res.json(users) 
})
app.post('/users', async (req, res) => {
    const [users] = await pool.query("SELECT * FROM Common_User")
    console.log(users)
    console.log(req.body)
    var UserID = req.body.UserID
    var Name = req.body.Name
    var Surname = req.body.Surname
    var Address = req.body.Address
    var City = req.body.City
    var ZIP = req.body.ZIP
    var TakeAwayIDs = req.body.TakeAwayIDs
    var ResIDs = req.body.ResIDs
    const newUser = await pool.query('INSERT INTO Common_User VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [UserID, Name, Surname, Address, City, ZIP, TakeAwayIDs, ResIDs])
    users.push(newUser)
    res.status(201).send()
    
})



app.listen(port, () => {
    console.log('listening on port', port)
})




//error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Server Error!')
})