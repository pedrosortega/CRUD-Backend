const db = require("./db");
const { DataTypes } = require("sequelize");

const Student = db.define('student',
  {
    user_id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true}
    },
    lastName:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true }
    },
    imageURL:
    {
      type: DataTypes.STRING,
      defaultValue: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
      allowNull: true
    },
    email: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },
    gpa:
    {
      type: DataTypes.FLOAT(0.0),
      allowNull: false,
    }
  } 
)
  const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); // Drop and recreate tables
  const students = await Student.bulkCreate([
    { firstName: "Florencio", lastName: "Rendon", email: "flo@gmail.com", gpa: 3.9},
    { firstName: "Deb", lastName: "Agosto", email: "deb@gmail.com", gpa: 3.9 },
    { firstName: "Pedro", lastName: "Ortega", email: "pedro@gmail.com", gpa: 3.9 },
    { firstName: "Mark", lastName: "Fa", email: "mark@gmail.com", gpa: 3.9}
  ]);

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