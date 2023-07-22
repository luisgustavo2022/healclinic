const express = require("express");
const connection = require("./connection");

const getPatient = async () => {
    

    const [patients] = await connection.execute("select *  FROM  patients");
    return patients;

};

const newPatient = async (patient) => {

    const { name } = patient;
    const query = "INSERT INTO patients (name ) VALUES (?)"


    const [newPatient] = await connection.execute( query,  [name] );
    return {insertId: newPatient.insertId};
};

const deletePatient = async (id) => {
    const removedPatiens = await connection.execute("DELETE FROM patients WHERE id = ?",  [id]);
    return  removedPatiens;
};
const updatePatient = async (id, patient) => {
    const {name} = patient;
    const updatePatiens = await connection.execute("UPDATE patients SET name = ? WHERE id = ?", [name, id]);
    return  updatePatiens;
};

module.exports = {
    getPatient,
    newPatient,
    deletePatient,
    updatePatient,
};