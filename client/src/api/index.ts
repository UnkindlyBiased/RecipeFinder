import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4816'
})

export default api