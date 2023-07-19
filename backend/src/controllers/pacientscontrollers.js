const { response } = require("../app");
const pacientsmodel = require("../models/pacientsModel");

const getPacient = async (request, response) => {
    
    const  pacients = await pacientsmodel.getPacient();

    return response.status(200).json(pacients);

};

const newPacient = async (req, res) => {
    //const newPacient = await pacientsmodel.newPacient(name , age , gender , address, phone, email, admissionDate, dischargeDate, diagnosis)
    return response.status(201).json({ message: 'ok'});

};

module.exports = {
    getPacient
};