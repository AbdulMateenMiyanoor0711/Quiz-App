const db = require("./../db");
const hashed = require("../utils/hashed");

async function getUsers(body) {
  try {
    let get = await db.query(`SELECT * FROM users;`);
    console.log("Getting Users Succesfull", get);
    return get[0];
  } catch (error) {
    throw error;
  }
}
async function addUsers(body) {
  try {
    let hashedPassword = await hashed.hashedPassword(body.password);
    let add = await db.query(
      `INSERT INTO users (Name, Email, Password, created_at) VALUES (?, ?, ?, NOW())`,
      [body.name, body.email, hashedPassword]
    );
    console.log("Adding Users Succesfull", add);

    return add;
  } catch (error) {
    throw error;
  }
}

async function verifyUser(body) {
  console.log("body", body);

  try {
    let user = await db.query(
      `select * from users where Email=?;`,
      [body.email]
    );
    let users = user[0][0];
    console.log("users", users);
    if (!users) {
      throw new Error("Users not Exists");
    }

    let match = await hashed.verifyPassword(users.password, body.password);
  
    
        if (!match) {
      throw new Error("Password Not match");
    }
    return users;
    
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUsers: getUsers,
  addUsers: addUsers,
  verifyUser: verifyUser,
};
