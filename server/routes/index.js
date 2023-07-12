const Router = require('express')
const router = new Router()
const productRouter =require('./productRouter')
const userRouter =require('./userRouter')
const brandRouter =require('./brandRouter')
const manufacturerRouter =require('./manufacturerRouter')

router.use('/user',userRouter)
router.use('/brand',brandRouter)
router.use('/manufacturer',manufacturerRouter)
router.use('/product',productRouter)

module.exports = router