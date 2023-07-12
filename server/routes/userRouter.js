const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', checkRole('ADMIN'), userController.registration)
router.post('/login', userController.login)
router.get('/', checkRole('ADMIN'), userController.getAll)
router.get('/auth', authMiddleware, userController.check)
router.get('/:id', userController.getOne)
router.post('/delete/:id', checkRole('ADMIN'), userController.delete)

module.exports = router