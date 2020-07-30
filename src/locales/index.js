import Vue from 'vue'
//Внешняя библиотека для локализации
import VueI18n from 'vue-i18n'
//Импортируем хранилище чтобы получить getter
import store from '@/store/index'
//импортируем английские словари
import en from './en/index'
//Для использования плагина локализации
Vue.use(VueI18n)

//Словарь сообщений
const messages = {
  en,
}

//Экспортируем обьъект интернационализации с указанием локали и словарями
export default new VueI18n({
  locale: store.getters.lng,
  messages,
})
