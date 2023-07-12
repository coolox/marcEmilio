import {makeAutoObservable} from 'mobx'

export default class ProductStore {
    constructor() {
        this._brands= []
        this._manufacturers = []
        this._products = []
        this._selectedBrand = {}
        this._selectedManufacturer = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }
    setManufacturers(manufacturers) {
        this._manufacturers = manufacturers
    }
    setProducts(products) {
        this._products = products
    }
    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand
    }
    setSelectedManufacturer(manufacturer){
        this.setPage(1)
        this._selectedManufacturer = manufacturer
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }
   /*  setLimit(limit){
        this._limit = limit
    } */

    get brands(){
        return this._brands
    }
    get manufacturers(){
        return this._manufacturers
    }
    get products(){
        return this._products
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get selectedManufacturer(){
        return this._selectedManufacturer
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}