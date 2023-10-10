const { db } = require("./SqlConnect.js"); // import db from MysqlConnect.js use for execute sql command

const getUser = (req, res) => {
    const id = req.query.id;
    const sqlStatement = "select * from users where uid = ?;";
    db.query(sqlStatement, [id], (err, result) => {
        if (err) { console.log(err); return res.status(500) }
        res.send(result)
    })
}

const updateUser = (req, res) => {
    const id = req.query.id;
    const data = req.body;
    const sqlStatement = "update users set tel = ?, username = ?, password = ?, email = ? where uid = ?";
    db.query(sqlStatement, [data.phone, data.username, data.password, data.email, id], (err, result) => {
        if (err) { console.log(err); return res.status(500) }
       res.status(200).send("ok")
    });
}

module.exports = { getUser, updateUser };