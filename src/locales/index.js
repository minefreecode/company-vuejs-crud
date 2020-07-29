import Vue from 'vue'
//импорт библиотеки для локализации
import VueI18n from 'vue-i18n'
//Импортируем хранилище
import store from '@/store/index'

import en from './en/index'

Vue.use(VueI18n)

const messages = {
  en,
}

export default new VueI18n({
  locale: store.getters.lng,
  messages,
})
