const { Manufacturer } = require("../models/models")

class ManufacturerController {
    async create (req, res) {
        const {name} = req.body
        const manufacturer = await Manufacturer.create({name})
        return res.json(manufacturer)
        
    }
    async getAll (req, res) {
        const manufacturers = await Manufacturer.findAll()
        return res.json(manufacturers)
    }   
}

module.exports = new ManufacturerController()