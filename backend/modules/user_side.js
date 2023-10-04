const { db } = require('./SqlConnect.js');

const getPetCard = (req, res) => {
    const id = req.query.ID;

    const sqlStatement = "select * from Pet P join Vet V on P.Vet_id = V.Vet_id where uid = ?;"
    db.query(sqlStatement, [id], (err, result)=>{
        res.send(result)
    })
}

module.exports = { getPetCard }