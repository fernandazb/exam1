import axios from 'axios'

const API ='http://localhost:3000/api'
export const registerUser = (user) => axios.post(`${API}/user`, user)
export const showUsers = () => axios.get(`${API}/showall`)
export const showUser = (id) => axios.get(`${API}/user/${id}`)
export const updateUsers = (user) => axios.push(`${API}/user/${user._id}`, user)
export const deleteUser = (id) => axios.delete(`${API}/user/${id}`)