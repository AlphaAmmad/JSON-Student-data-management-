import sql from "mssql"

const sqlConfig = {
    user: "asim",
    password: "databaselab",
    database: "Silberschatz",
    server: '10.0.130.100',
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs

}

export const connection = new sql.ConnectionPool(sqlConfig).connect()
.then( pool => {
    console.log(`Connected to MSSQL`)
    return pool;
} )
.catch(err => console.log(`Connection failed`));