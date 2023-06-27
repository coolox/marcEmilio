class ApiErorr extends Erorr {
    constructor(status, message){
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new ApiErorr(404, message)
    } 

    static internal(message) {
        return new ApiError(500, message)
    }
    static forbidden(message) {
        return new ApiError(403, message)
    }
}