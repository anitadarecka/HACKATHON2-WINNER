const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM city;")
    .then(([res]) => res);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * from city WHERE id = ?", [id])
    .then(([res]) => res);
};

const findByName = (name) => {
  return db
    .promise()
    .query("SELECT id FROM city WHERE name = ? ;", [name])
    .then(([res]) => res)
    .catch((err) => console.error(err));
};

module.exports = {
  findAll,
  findOne,
  findByName,
};
