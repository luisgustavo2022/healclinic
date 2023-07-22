const { response } = require("../app");
const patientsmodel = require("../models/patientsModel");

const getPatient = async (request, response) => {
    
    const  patients = await patientsmodel.getPatient();

    return response.status(200).json(patients);

};

const newPatient = async (req, res) => {
    //const newPatient = await patientsmodel.newPatient(name , age , gender , address, phone, email, admissionDate, dischargeDate, diagnosis)
    return response.status(201).json({ message: 'ok'});

};

module.exports = {
    getPatient,
    newPatient,
};