const argon2 = require("argon2");
const hashedPassword = async (password) => {
  if (!password) throw new Error("Password Required");
  return await argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 3,
    parallelism: 1,
  });
};

const verifyPassword = async (hash, password) => {
  if (!hash || !password) {
    throw new Error("Both stored hash and supplied password are required for verification");
  }
  return await argon2.verify(hash, password);
};

module.exports = {
  hashedPassword: hashedPassword,
  verifyPassword: verifyPassword,
};
