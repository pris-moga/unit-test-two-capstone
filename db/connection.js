const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

let mongoDB = process.env.MONGO_STRING;

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
