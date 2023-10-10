const { db } = require("./SqlConnect.js"); // import db from MysqlConnect.js use for execute sql command

const UpdatePet = (req, res) => {
    const id = req.query.id;
    const data = req.body;
    const sqlStatement = "Update Pet set pet_name = ?, age = ?, weight = ?, clinic = ?, petType = ? where pid = ?;";
    db.query(sqlStatement, [data.pname, data.age, data.weight, data.clinic, data.pType, id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500)
        }
        res.status(200).send("ok")
    })
}

const getAPet = (req, res) => {
    const id = req.query.id;
    const sqlStatement = "select * from Pet p join Vet v on p.Vet_id = v.Vet_id where pid = ?;";
    db.query(sqlStatement, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500)
        }
        res.send(result)
    });
}

module.exports = { UpdatePet, getAPet };