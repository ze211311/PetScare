const { db } = require("./SqlConnect.js"); // import db from MysqlConnect.js use for execute sql command

const UpdatePet = (req, res) => {
  const id = req.query.id;
  const data = req.body;
  const sqlStatement =
    "Update Pet set pet_name = ?, age = ?, weight = ?, clinic = ?, petType = ? where pid = ?;";
  db.query(
    sqlStatement,
    [data.pname, data.age, data.weight, data.clinic, data.pType, id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500);
      }
      res.status(200).send("ok");
    }
  );
};

const getAPet = (req, res) => {
  const id = req.query.id;
  const sqlStatement =
    "select * from Pet p join Vet v on p.Vet_id = v.Vet_id where pid = ?;";
  db.query(sqlStatement, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500);
    }
    res.send(result);
  });
};

const getStatus = (req, res) => {
  const id = req.query.id;
  const sqlStatement =
    "select * from Status St join Symtom Sm on St.Sym_ID = Sm.Sym_ID join Pet P on St.pid = P.pid join Vet v on v.Vet_id = St.Vet_id join users u on v.Vet_id = u.uid where St.pid = ?;";
  db.query(sqlStatement, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500);
    }
    console.log(result)
    res.send(result);
  });
};

module.exports = { UpdatePet, getAPet, getStatus };
