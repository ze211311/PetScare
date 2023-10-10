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
    const sqlStatement = "update users set pet_name = ?, age = ?, weight = ?, clinic = ?, petType = ? where uid = ?";
    db.query(sqlStatement, [data.pet_name, data.age, data.weight, data.clinic, data.petType, id], (err, result) => {
        if (err) { console.log(err); return res.status(500) }
        return res.status(200)
    });
}

module.exports = { getUser, updateUser };