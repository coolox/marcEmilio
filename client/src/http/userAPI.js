import { $host, $authHost } from ".";
import jwt_decode from "jwt-decode"

export const registration = async(userName, password, name, role)=>{
    const {data} = await $authHost.post('api/user/registration', {userName, password, name, role})
    localStorage.getItem('token', data.token) // Поменял на Гет
    return jwt_decode(data.token)
}
export const login = async(userName, password)=>{
    const {data} = await $host.post('api/user/login', {userName, password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const check = async()=>{
    try {
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token',data.token)
        return jwt_decode(data.token)
    } catch (error) {
        console.log("no token", error)
    }
}

export const fetchUsers = async()=>{
    const {data} = await $authHost.get('api/user')
    console.log('jwt data', data)
    const users= jwt_decode(data.token)
    console.log(users.id)
    return users.id
}
export const fetchUserInfo = async(id)=>{
    const {data} = await $host.get('api/user/' + id)
    console.log("info:", data)
    const inf = jwt_decode(data.token)
    console.log("decoded info",inf.id)
    return inf.id
}
export const deleteUser = async(id)=>{
    const {data} = await $authHost.post('api/user/delete/' + id)
    return data
}