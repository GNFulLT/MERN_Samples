require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_DATABASE_USERNAME,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    host: process.env.MYSQL_DATABASE_HOST,
    username: process.env.MYSQL_DATABASE_USERNAME,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    logging: false,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
