const { Manufactiurer } = require("../models/models")

class ManufactiurerController {
    async create (req, res) {
        const {name} = req.body
        const manufactiurer = await Manufactiurer.create({name})
        return res.json(manufactiurer)
        
    }
    async getAll (req, res) {
        const manufactiurers = await Manufactiurer.findAll()
        return res.json(manufactiurers)
    }   
}

module.exports = new ManufactiurerController()