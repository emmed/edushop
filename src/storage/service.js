const TOKEN_KEY = 'logAndToken'

const TokenService = {
    getToken(){
        return localStorage.getItem(TOKEN_KEY)
    }
}
export{TokenService}