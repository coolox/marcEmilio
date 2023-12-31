const Router = require('express')
const router = new Router()
const manufacturerController = require('../controllers/manufacturerController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), manufacturerController.create)
router.get('/', manufacturerController.getAll)

module.exports = router