const Router = require('express')
const router = new Router()
const productRouter =require('./productRouter')
const userRouter =require('./userRouter')
const brandRouter =require('./brandRouter')
const manufactiurerRouter =require('./manufactiurerRouter')

router.use('/user',userRouter)
router.use('/brand',brandRouter)
router.use('/manufactiurer',manufactiurerRouter)
router.use('/product',productRouter)

module.exports = router