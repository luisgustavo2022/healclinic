const getAll = (request, response) => {
    return response.status(200).json({ message: "controller ta tudo certo"})

}


module.exports = {
    getAll
}