const pacientsmodel = require("../models/pacientsModel");

const getAll = async (request, response) => {
    
    const  pacients = await pacientsmodel.getAll();

    return response.status(200).json(pacients);

};


module.exports = {
    getAll
};