import Vue from 'vue'
import Vuex from 'vuex'

// main store
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// crud
import crud from '@/utils/crud/store/'
// auth
import auth from '@/utils/auth/store/'
// app
import app from '@/utils/app/store/'

import customModules from '@/config/store-modules'

//Собираем хранилища в модули
const mainModules = { crud, auth, app }

//Объединяем с общими настройками модулей
const modules = Object.assign(customModules, mainModules)

//Подключаем плагин Vuex
Vue.use(Vuex)

//Экспортируем хранилище Vuex с подключенными модулями, состояниями, геттерами, мутациями, экшенами
export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,
})
