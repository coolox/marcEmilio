const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, UserInfo} = require('../models/models')

const generateJwt = (id, userName, role) => {
    return jwt.sign(
        {id, userName, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}
class UserController {
    async registration (req, res, next) {
        const {userName, password, role} = req.body
        if(!userName || !password){
            return next(ApiError.badRequest("Некоректный userName или пароль"))
        }
        const candidate = await User.findOne({where: {userName}})
        if(candidate){
            return next(ApiError.badRequest("Пользователь с таким userName уже существует "))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({userName, role, password: hashPassword})
        const userInfo = await UserInfo.create({userId: user.id})
        const token = generateJwt(user.id, user.userName, user.role)
        return res.json({token})
    }
    async login (req, res, next) {
        const {userName, password} = req.body
        const user = await User.findOne({where: {userName}})
        if (!user){
            return next(ApiError.internal('Пользователь не найден'))
        }
        const comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.userName, user.role)
        return res.json({token})
    }
    async check (req, res, next) {
        const token = generateJwt(req.user.id, req.user.userName, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()