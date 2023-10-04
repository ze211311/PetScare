const { db } = require("./SqlConnect.js"); // import db from MysqlConnect.js use for execute sql command

const UpdatePet = (req, res) => {
    const id = req.query.id;
    const data = req.body;
    const sqlStatement = "Update Pet set pet_name = ?, age = ?, weight = ?, clinic = ? where pid = ?;";
    db.query(sqlStatement, [data.pname, data.age, data.weight, data.clinic, id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500)
        }
        return res.status(200)
    })
}

module.exports = { UpdatePet };