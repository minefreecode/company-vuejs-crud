//Импортируется основная библиотека Vue
import Vue from 'vue'

//Импортируются справочники локализации
import i18n from './locales/index'

//Объект роутера. В данном случае у нас 1 маршрут для приложения
import router from './router'

//Загружаем хранилище
import store from './store'

//Импортируем Vuetify с подключенными плагинами
import vuetify from './plugins/vuetify'
import './plugins/http'
import './plugins/ie'
import './plugins/custom/'
import App from './App.vue'

/**
 * Добавляем интерцепторы Axios для добавления токенов перед выполнением запросов
 */
Vue.http.interceptors.push((request, next) => {
  //Настройка Http с проверкой имеется ли токен в хранилище
  if (localStorage.getItem('token')) {
    //Добавляем токен в заголовки
    request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  }
  //Пришел ответ что неавторизован
  next(response => {
    if (response.status === 400 || response.status === 401 || response.status === 403) {
      store.commit('auth/logout')
      router.push({ path: '/login' })
    }
  })
})
//Создаем объект Vue и монтируем к #app
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
