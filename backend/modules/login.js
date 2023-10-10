const jwt = require('jsonwebtoken');
require('dotenv').config(); // this line make you be able to access value in .env file
const { db } = require("./SqlConnect.js"); // import db from MysqlConnect.js use for execute sql command

function checkLogin(email, password) { //check is user login us correct
    const sqlStatement = `select uid as ID, User_type as A from users where email = lower(?) and password = ?;`;
    return new Promise((resolve) => {
        db.query(sqlStatement, [email, password], (err, result) => {
            if (err) {
                console.log(err)
                resolve('error ' + err)
            }
            if (result.length == 0) resolve(null)
            else {
                const token = { ID: result[0].ID, Admin: result[0].A }
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
        res.json({ accessToken: accessToken, message: null })
    } catch (error) {
        console.log(error);
        res.send(500).json({ err: error })
    }
}

//for user
const registerUS = (req, res) => {
    const user = req.body;
    const sqlStatement = "insert into users(email,username,password,tel,Full_name) values(lower(?),?,?,?,?)";
    db.query(sqlStatement, [user.email, user.username, user.password, user.tel, user.fullName], (err, result) => {
        if (err) { console.log(err); return res.status(500).json({ message: "server failed" }) }
        if (result.insertId != 0) {
            const temp = GenAT({ ID: result.insertId, Admin: 0 })
            res.json({ accessToken: temp, message: null })
        } else {
            return res.status(500).json({ message: "server failed" })
        }
    })
}
module.exports = { login, registerUS }
