const sql = require('mssql');
module.exports = function () {
    const sqlConfig = {
        user: 'BD2321021',
        password: '',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    }
    return sql.connect(sqlConfig);
}