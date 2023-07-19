const e = require("express");
const connection = require("./connection");

const getPacient = async () => {
    

    const [patients] = await connection.execute("select *  FROM  patients");
    return patients;

};

const newPacient = async (name , age , gender , address, phone, email, admissionDate, dischargeDate, diagnosis) => {

    // Constantes para os nomes das colunas da tabela Patients

    const name = 'name';
    const age = 'age';
    const gender = 'gender';
    const address = 'address';
    const phone = 'phone';
    const email = 'email';
    const admissionDate = 'admissionDate';
    const dischargeDate = 'dischargeDate';
    const diagnosis = 'diagnosis';
    const query = "INSERT INTO Patients (name, age, gender, address, phone, email, admission_date, discharge_date, diagnosis, doctor_id, hospital_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"


    const [newPatient] = await connection.execute( query,  [name , age , gender , address, phone, email, admissionDate, dischargeDate, diagnosis] );
    return newPatient;
}

module.exports = {
    getPacient,
    newPacient,
};