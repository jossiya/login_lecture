const mysql=require("mysql");
const { connect } = require("../../../../login/app/src/config/db");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE,
});

db=connect();

module.export= db