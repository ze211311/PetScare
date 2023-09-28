const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const { db } = require('./modules/SqlConnect.js')
const { login, registerUS } = require('./modules/login.js')
const { getUser } = require('./modules/User.js')
const fileUpload = require('express-fileupload')
const { uploadUProfile } = require('./modules/imgUP.js');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('images'));


app.get('/', (req, res) => {
    const sel = "select * from users;"
    db.query(sel, (err, result) => {
        console.log(err)
        res.send(result);
    })

});

app.post('/regis', registerUS);

app.get('/login', login)

app.get('/getUser', getUser)

app.post('/upload/UProfile', fileUpload({ createParentPath: true, limits: { fileSize: 5 * 1024 * 1024 } }), uploadUProfile)

app.listen(6969);