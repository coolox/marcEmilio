const Router = require('express')
const router = new Router()
const manufactiurerController = require('../controllers/manufactiurerController')

router.post('/', manufactiurerController.create)
router.get('/', manufactiurerController.getAll)

module.exports = router