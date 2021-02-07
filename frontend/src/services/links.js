import axios from 'axios'
const baseUrl = '/api/link'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const getOne = async id => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const remove = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data    
}

const service = { getAll, create, getOne, remove }

export default service