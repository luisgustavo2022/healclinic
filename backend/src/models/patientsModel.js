const e = require("express");
const connection = require("./connection");

const getPatient = async () => {
    

    const [patients] = await connection.execute("select *  FROM  patients");
    return patients;

};

const newPatient = async (patient) => {

    const { name } = patient;
    const query = "INSERT INTO Patients (name ) VALUES (?)"


    const [newPatient] = await connection.execute( query,  [name] );
    return newPatient;
}

module.exports = {
    getPatient,
    newPatient,
};