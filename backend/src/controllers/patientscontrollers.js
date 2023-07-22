const { response } = require("../app");
const patientsmodel = require("../models/patientsModel");

const getPatient = async (_request, response) => {
    
    const  patients = await patientsmodel.getPatient();

    return response.status(200).json(patients);

};

const newPatient = async (request, response) => {
    

    const newPatient = await patientsmodel.newPatient(request.body);

    return response.status(201).json(newPatient);

};

const deletePatiens = async (request, response) => {
    const { id } = request.params;

    await patientsmodel.deletePatient(id);
    return response.status(204).json();
     
};
const updatePatient = async (request, response) => {
    const { id } = request.params;
    await patientsmodel.updatePatient(id, request.body);
    return response.status(204).json();
};

module.exports = {
    getPatient,
    newPatient,
    deletePatiens,
    updatePatient,
};