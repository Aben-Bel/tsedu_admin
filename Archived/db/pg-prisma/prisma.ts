let config = require("../../config");

var environment = config.NODE_ENV || "development";
var prismaConfig = require("../../prismafile")[environment];

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


module.exports = require("knex")(prismaConfig);
