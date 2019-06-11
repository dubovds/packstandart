import axios from 'axios'

const API_URL = process.env.API_URL || 'http://test1.iti.dp.ua'
axios.defaults.baseURL = "http://test1.iti.dp.ua"
// export default axios.create({
//   baseURL: "http://test1.iti.dp.ua",
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.token
//   }
// })