const Router = require('express')
const router = new Router()
const manufactiurerController = require('../controllers/manufactiurerController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), manufactiurerController.create)
router.get('/', manufactiurerController.getAll)

module.exports = router