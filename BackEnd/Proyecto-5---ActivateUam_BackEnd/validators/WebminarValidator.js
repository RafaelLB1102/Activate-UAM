/* {
    "name": "Programación Competitiva #2",
    "status": "active",
    "speakers": [
      {
        "name": "David Asaaf",
        "majors": [
          "Ing. de sistemas",
          "magister"
        ]
      }
    ]
  } */


var errors = []

const validateWebminar = (req, res) => {
    validateName(req)
    return errors
}

const validateName = (req) => {
    const NAME = req.body.name
    
    if (NAME.length < 5 || NAME.length > 30) {
        errors.push({ message: "el nombre no tiene la longitud correcta (Min 5 - Max 30)" })
    }
}


module.exports = {
    validateWebminar
}
