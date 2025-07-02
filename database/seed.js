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
  
  const campus = await Campus.bulkCreate([
    {name: "BMCC", address: "245 Greenwich St New York, NY", description: "Start here, go anywhere"}
  ]);
  console.log("🌱 Seeded the database again");
  db.close();
}
  console.log("🌱 Seeded the database");
  db.close();
};

// seed();

module.exports = Student;