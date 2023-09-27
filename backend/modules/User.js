const { db } = require("./SqlConnect.js"); // import db from MysqlConnect.js use for execute sql command

const getUser = (req, res) => {
    const id = req.query.id;
    const sqlStatement = "select * from users where uid = ?;";
    db.query(sqlStatement, [id], (err, result) => {
        if (err) { console.log(err); return res.status(500) }
        res.send(result)
    })
}

module.exports = { getUser };