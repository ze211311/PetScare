const jwt = require('jsonwebtoken');
require('dotenv').config(); // this line make you be able to access value in .env file
const { db } = require("./SqlConnect.js"); // import db from MysqlConnect.js use for execute sql command

function checkLogin(email, password) { //check is user login us correct
    const sqlStatement = `select uid as ID from users where email = lower(?) and password = ?;`;
    return new Promise((resolve) => {
        db.query(sqlStatement, [email, password], (err, result) => {
            if (err) {
                console.log(err)
                resolve('error ' + err)
            }
            if (result.length == 0) resolve(null)
            else {
                const token = { ID: result[0].ID}
                resolve(token)
            }
        })

    });
}

function GenAT(user) { //generate toke with jwt
    return jwt.sign(user, process.env.SE);
    //command to get SE "node; require('crypto').randomBytes(64).toString('hex');"
}

function decodeJWT(token) {
    return jwt(token)
}

const login = async (req, res) => {
    const email = req.query.em;
    const password = req.query.pd;

    try {
        let user = await checkLogin(email, password);
        if (user == null) return res.status(200).json({ message: "email or password is incorrect!!" })
        const accessToken = GenAT(user);
        res.json({ accessToken: accessToken,message:null })
    } catch (error) {
        console.log(error);
        res.send(500).json({ err: error })
    }
}

//for user
const registerUS = (req, res) => {
    const user = req.body;
    const sqlStatement = "insert into user(username,FirstName,LastName,email,phone,passwordH) values(?,?,?,lower(?),?,?)";
    db.query(sqlStatement, [user.Username, user.Firstname, user.Lastname, user.Email, user.Phone, user.PD], (err, result) => {
        if (err) return res.status(500).json({ message: "server failed" })
        if (result.insertId != 0) {
            const temp = GenAT({ ID: result.insertId, isUser: true })
            res.json({ accessToken: temp })
        } else {
            return res.status(500).json({ message: "server failed" })
        }
    })
}
module.exports = { login, registerUS }
