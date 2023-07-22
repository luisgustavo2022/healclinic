const validateBody = (request, response, next) => {
 const {body} = request;
 if (body.name == undefined) {
   return response.status(400).json({message: "usuário precisa de um nome!!!"})
 };
 if (body.name == "") {
   return  response.status(400).json({message: "usuário precisa de um nome!!!"})
 };

 next();
};





module.exports = {
    validateBody,
};