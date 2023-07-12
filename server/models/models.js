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

const Manufacturer = sequelize.define('manufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const BrandManufacturer = sequelize.define('brand_manufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(UserInfo, {as:'info'})
UserInfo.belongsTo(User)

UserInfo.hasOne(ProductList)
ProductList.belongsTo(UserInfo)

ProductList.hasMany(Product)
Product.belongsTo(ProductList)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Manufacturer.hasMany(Product)
Product.belongsTo(Manufacturer)

Product.hasMany(ProductInfo, {as:'info'})
ProductInfo.belongsTo(Product)

/* Manufacturer.belongsToMany(Brand, {through: BrandManufacturer})
Brand.belongsToMany(Manufacturer, {through: BrandManufacturer})
 */
module.exports = {
    User, UserInfo, Product, ProductInfo, ProductList, Brand, Manufacturer, BrandManufacturer
}