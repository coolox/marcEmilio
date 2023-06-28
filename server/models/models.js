const sequelize = require('../db')
const{DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userName: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: { type: DataTypes.STRING, defaultValue:'USER'}
})

const UserInfo = sequelize.define('user_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    sales_amount: {type: DataTypes.INTEGER},
    sales_quantity: { type: DataTypes.INTEGER}
})

const ProductList = sequelize.define('product_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    sales_quantity: { type: DataTypes.INTEGER},
    sales_date: {type: DataTypes.INTEGER}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: { type: DataTypes.STRING, allowNull: false}
})

const ProductInfo = sequelize.define('product_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    color: {type: DataTypes.STRING,  allowNull: false},
    pcs: {type: DataTypes.INTEGER}
})

const Manufactiurer = sequelize.define('manufactiurer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const BrandManufactiurer = sequelize.define('brand_manufactiurer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

UserInfo.hasOne(ProductList)
ProductList.belongsTo(UserInfo)

ProductList.hasMany(Product)
Product.belongsTo(ProductList)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Manufactiurer.hasMany(Product)
Product.belongsTo(Manufactiurer)

Product.hasMany(ProductInfo, {as:'info'})
ProductInfo.belongsTo(Product)

Manufactiurer.belongsToMany(Brand, {through: BrandManufactiurer})
Brand.belongsToMany(Manufactiurer, {through: BrandManufactiurer})

module.exports = {
    User, UserInfo, Product, ProductInfo, ProductList, Brand, Manufactiurer, BrandManufactiurer
}