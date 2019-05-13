import axios from 'axios'

const API_URL = process.env.API_URL || 'http://test1.iti.dp.ua/api/auth/login/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})