import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const base = axios.create({
  baseURL: 'http://test1.iti.dp.ua/api'
})

export default base;
