import axios from 'axios'

const instance = axios.create({
    baseURL:'https://thetinder-backend.herokuapp.com'
}

)

export default instance;