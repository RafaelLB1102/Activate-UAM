var errors = []

const validateEventUAM = (req, res) => {
    validateName(req)
    validatePlace(req)
    validateCategory(req)
    return errors
}

const validateName = (req) => {
    const NAME = req.body.name

    if (NAME.length > 60) {
        errors.push({ message: "el nombre no tiene la longitud correcta (Min 5 - Max 30)" })
    }

}

const validatePlace = (req) => {
    const PLACES = ["Sacatín", "Fundadores", "Parque de los estudiantes", "Cupula"]
    const PLACE = req.body.place
    if (!PLACES.includes(PLACE)) {
        errors.push({ message: "El lugar es invalido" })
    }
}

const validateCategory = (req) => {
    const CATEGORIES = ["Deporte","Cultura","Arte"]
    const CATEGORY = req.body.category
    if(!CATEGORIES.includes(CATEGORY)){
        errors.push({ message: "La categoria es invalida" })
    }
}


module.exports = {
    validateEventUAM
}
