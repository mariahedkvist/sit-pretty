const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const connect = async () => {
  const conn = await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPass}@mhed.ybaktlr.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log(`MongoDB connected ${conn.connection.host}`);
};

module.exports = connect;
