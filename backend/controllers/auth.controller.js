const db = require("./../db");
const hashed = require("../utils/hashed");


async function addUsers(body) {
  try {
    let hashedPassword = await hashed.hashpassword(body.password);
    let add = await db.query(
      `INSERT INTO users ( Name, Email, Password) VALUES ( '${body.name}', '${body.email}', '${hashedPassword}');`,
    );
    console.log("Adding Users Succesfull", add);

    return add;
  } catch (error) {
    throw error;
  }
}

async function verifyUser(body) {
    console.log("body",body);
    
  try {
    let user = await db.query(
      `select * from users where Email='${body.email}';`,
    );
    let users = user[0][0];
    if (!users) {
      throw new Error("Users not Exists");
    }
    console.log("users",users);
    
    let match = await hashed.verifypassword(users.password, body.password);

    if (!match) {
      throw new Error("Password Not match");
    }
    return users; // Return the user object on successful verification
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addUsers: addUsers,
  verifyUser: verifyUser,
};
