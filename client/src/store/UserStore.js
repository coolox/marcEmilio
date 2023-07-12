import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._user = {}
        this._users =[]
        this._name =[]
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setUser(user) {
        this._user = user
    }
    setUsers(users) {
        this._users = users
    }
    setName(name) {
        this._name = name
    }

    get isAuth(){
        return this._isAuth
    }
    get isAdmin(){
        return this._isAdmin
    }
    get user(){
        return this._user
    }
    get users(){
        return this._users
    }
    get name(){
        return this._name
    }
}