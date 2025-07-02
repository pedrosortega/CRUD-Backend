const db = require("./db");
const { DataTypes } = require("sequelize");
const { Student, Campus } = require("./index");

const seed = async () => {
  db.logging = false;
  await db.sync({ force: true });
  const students = await Student.bulkCreate([
    {
      firstName: "Florencio",
      lastName: "Rendon",
      email: "flo@gmail.com",
      gpa: 3.9,
    },
    {
      firstName: "Deb",
      lastName: "Agosto",
      email: "deb@gmail.com",
      gpa: 3.9
    },
    {
      firstName: "Pedro",
      lastName: "Ortega",
      email: "pedro@gmail.com",
      gpa: 3.9,
    },
    {
      firstName: "Mark",
      lastName: "Fartushiniak",
      email: "mark@gmail.com",
      gpa: 3.9,
    },
  ]);

  const campuses = await Campus.bulkCreate([
    {
      name: "BMCC",
      address: "245 Greenwich",
      descripton: "Start here, go anywhere"
    },
    {
      name: "City College",
      address: "Manhattan",
      descripton: "Hello world"
    },
    {
      name: "Brooklyn College",
      address: "Brooklyn",
      descripton: "wellcome to brookyln c"
    },
    {
      name: "SUNY Maritime",
      address: "Bronx",
      descripton: "text"
    },
  ]);

  await campuses[0].setUser(students[0]);
  await campuses[1].setUser(students[1]);
  await campuses[2].setUser(students[2]);
  await campuses[3].setUser(students[3]);

  console.log("Campus : ", campuses[0])
  console.log("🌱 Seeded the database");
  db.close();
};

seed();

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
