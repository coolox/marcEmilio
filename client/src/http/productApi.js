import { $host, $authHost } from ".";

export const createManufacturer = async(manufacturer)=>{
    const {data} = await $authHost.post('api/manufacturer', manufacturer)
    return data
}
export const fetchManufacturers = async()=>{
    const {data} = await $host.get('api/manufacturer')
    return data
}
export const createBrand = async(brand)=>{
    const {data} = await $authHost.post('api/brand', brand)
    return data
}
export const fetchBrands = async()=>{
    const {data} = await $host.get('api/brand')
    return data
}
export const createProduct = async(product)=>{
    const {data} = await $authHost.post('api/product', product)
    return data
}
export const fetchProducts = async(manufacturerId, brandId, page, limit=5)=>{
    const {data} = await $host.get('api/product', {params: {
        manufacturerId, brandId, page, limit
    }})
    return data
}
export const fetchOneProduct = async(id)=>{
    const {data} = await $host.get('api/product/' + id)
    return data
}
