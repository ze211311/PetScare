const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const {db} = require('./modules/SqlConnect.js')
const { login, registerUS } = require('./modules/login.js')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('images'));


app.get('/', (req, res) => {
    const sel = "select * from users;"
    db.query(sel, (err, result)=>{
        console.log(err)
        res.send(result);
    })
    
});

app.get('/login', login)

app.listen(6969);