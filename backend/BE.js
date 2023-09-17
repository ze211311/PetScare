const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const {db} = require('./SqlConnect.js')
const { login, registerUS } = require('./login.js')

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const sel = "select * from user;"
    db.query(sel, (err, result)=>{
        console.log(err)
        res.send(result);
    })
    
});

app.get('/login', login)




app.listen(6969);