let config = require("./config/index");

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "development_db",
      port: 5432,
    },
    migrations: {
      directory: __dirname + "/db/pg/migrations",
    },
    seeds: {
      directory: __dirname + "/db/pg/seeds/development",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: config.pg.HOST,
      user: config.pg.USER,
      password: config.pg.PASSWORD,
      database: config.pg.DATABASE,
      port: config.pg.PORT,
      ssl: true,
    },
    migrations: {
      directory: __dirname + "/db/pg/migrations",
    },
    seeds: {
      directory: __dirname + "/db/pg/seeds/production",
    },
  },
};
