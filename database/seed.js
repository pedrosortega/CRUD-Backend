const db = require("./db");
// const { DataTypes } = require("sequelize");
const { Student, Campus } = require("./index");
const { Duck, User } = require("./index");

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
      gpa: 3.9,
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

  const users = await User.bulkCreate([
    { username: "admin", passwordHash: User.hashPassword("password") },
    { username: "user1", passwordHash: User.hashPassword("password") },
    { username: "user2", passwordHash: User.hashPassword("password") },
  ]);

  // const ducks = await Duck.bulkCreate([
  //   { name: "James Pond" },
  //   { name: "Quakie Chan" },
  //   { name: "Goose" },
  // ]);

  const campuses = await Campus.bulkCreate([
    {
      name: "BMCC",
      address: "245 Greenwich",
      descripton: "Start here, go anywhere",
    },
    {
      name: "City College",
      address: "Manhattan",
      descripton: "Hello world",
    },
    {
      name: "Brooklyn College",
      address: "Brooklyn",
      descripton: "wellcome to brookyln c",
    },
    {
      name: "SUNY Maritime",
      address: "Bronx",
      descripton: "text",
    },
  ]);

  await students[0].setCampus(campuses[0]);
  await students[1].setCampus(campuses[1]);
  await students[2].setCampus(campuses[2]);
  await students[3].setCampus(campuses[3]);

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
