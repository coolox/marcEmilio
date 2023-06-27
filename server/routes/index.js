const Router = require('express')
const router = new Router()
const productRouter =require('./productRouter')
const userRouter =require('./userRouter')
const brandRouter =require('./brandRouter')
const manfctrRouter =require('./manufactiurerRouter')

router.use('/user',userRouter)
router.use('/brand',brandRouter)
router.use('/manfctr',manfctrRouter)
router.use('/product',productRouter)

module.exports = router