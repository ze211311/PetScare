const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const { db } = require('./modules/SqlConnect.js')
const { login, registerUS } = require('./modules/login.js')
const { getUser, updateUser } = require('./modules/User.js')
const fileUpload = require('express-fileupload')
const { uploadUProfile, uploadPProfile } = require('./modules/imgUP.js');
const { getPetCard } = require('./modules/user_side.js');
const { UpdatePet, getAPet, getStatus, regPet, getVac, getApp } = require('./modules/pet.js')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('images'));


app.get('/', (req, res) => {
    const sel = "select * from users;"
    db.query(sel, (err, result) => {
        res.send(result);
    })

});

app.post('/regis', registerUS);

app.get('/login', login)

app.get('/getUser', getUser)

app.post('/upload/UProfile', fileUpload({ createParentPath: true, limits: { fileSize: 5 * 1024 * 1024 } }), uploadUProfile)

app.post('/upload/PProfile', fileUpload({ createParentPath: true, limits: { fileSize: 5 * 1024 * 1024 } }), uploadPProfile)

app.get('/user/getPet', getPetCard)

app.get('/user/getAPet', getAPet)

app.post('/user/update', updateUser)

app.post('/pet/update', UpdatePet)

app.get('/pet/getStatus', getStatus)

app.post('/pet/regPet', regPet)

app.get('/pet/getVac', getVac)

app.get('/pet/getApp', getApp)

app.listen(6969);