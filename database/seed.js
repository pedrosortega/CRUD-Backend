const db = require("./db");
const { DataTypes } = require("sequelize");

  const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); 
  const students = await Student.bulkCreate([
    { firstName: "Florencio", lastName: "Rendon", email: "flo@gmail.com", gpa: 3.9},
    { firstName: "Deb", lastName: "Agosto", email: "deb@gmail.com", gpa: 3.9 },
    { firstName: "Pedro", lastName: "Ortega", email: "pedro@gmail.com", gpa: 3.9 },
    { firstName: "Mark", lastName: "Fa", email: "mark@gmail.com", gpa: 3.9}
  ]);
}

const BMCC = async () => {
  db.logging = false;
  await db.sync({ force: true }); 
  const campuses = await Campus.bulkCreate([
    { firstName: "Florencio", lastName: "Rendon", email: "flo@gmail.com", gpa: 3.9},
  ]);
  
  console.log("🌱 Seeded the database");
  db.close();
};

// seed();

// Table students {
//   id INTEGER [primary key]
//   firstName STRING
//   lastName STRING
//   email STRING
//   imageUrl STRING
//   gpa FLOAT
// }

// Table campuses {
//   id INTEGER [primary key]
//   name STRING
// }
module.exports = Student;