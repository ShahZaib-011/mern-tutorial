import axios from 'axios'

const API_URL = "/api/users/"

const register =async(userData) => {
    const response = await axios.post(userData,API_URL)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

export const authService = {
    register
}
export default authService