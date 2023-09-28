const path = require('path');
const { db } = require('./SqlConnect.js');
const fs = require('fs');

const uploadUProfile = (req, res) => {
    const file = req.files;
    const id = req.query.ID;

    const sqlStatement = "update users set propic_path = ? where uid = ?;"
    Object.keys(file).forEach(key => {
        const filename = "U" + id + path.extname(file[key].name);
        if (fs.existsSync("images/userProfile/" + filename)) {
            db.query("select propic_path as path from users where uid = ?;", [id], (err, result) => {
                fs.unlinkSync("images/userProfile/" + result[0].path);
            })
        }
        db.query(sqlStatement, [filename, id], (err, result) => {
            if (err) return res.status(500)
        })
        file[key].mv("images/userProfile/" + filename, (err) => {
            if (err) {
                console.log(err)
                return res.status(500)
            }
        })
    });

    return res.status(200).send()
}

module.exports = { uploadUProfile }