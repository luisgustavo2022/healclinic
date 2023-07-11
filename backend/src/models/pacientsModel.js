const connection = require("./connection");

const getAll = async () => {
    const patients = await connection.execute("select *  FROM  patients");
    return patients;
};

module.exports = {
    getAll
};