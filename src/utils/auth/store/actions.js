import Vue from 'vue'
import api from '@/config/api'
import auth from '@/config/auth'

//Вспомогательная функция получения Url
const getUrl = (url) => {
  let urlArray = []
  if (auth.api) {
    urlArray.push(auth.api)
  } else {
    urlArray.push(api.url)
    if (api.path.prefix) {
      urlArray.push(api.path.prefix)
    }
  }
  if (auth.prefix) {
    urlArray.push(auth.prefix)
  }
  urlArray.push(url)
  return urlArray.join('/')
}
//Экшены
const actions = {
  //Экшен 'Вход'
  login ({ commit }, credential) {
    commit('loginWait', true)
    return new Promise((resolve) => {
      const path = auth.paths.login || 'login'
      Vue.http.post(getUrl(path), credential)
        .then(response => response.json())
        .then((result) => {
          commit('login', result)
          resolve()
        })
        .catch(() => {
          commit('loginWait', false)
          commit('loginFailed')
        })
    })
  },
  //Экшен 'Выход'
  logout ({ commit }) {
    return new Promise((resolve) => {
      const path = auth.paths.logout || 'logout'
      Vue.http.post(getUrl(path))
        .then(response => response.json())
        .then(() => {
          commit('logout')
          resolve()
        })
    })
  },
  //Экшен 'Получить пользователя'
  getUser ({ commit }) {
    return new Promise((resolve) => {
      const path = auth.paths.getUser || 'user'
      Vue.http.get(getUrl(path))
        .then(response => response.json())
        .then((response) => {
          if ([
            400,
            401,
            403,
          ].includes(response.status)) {
            commit('logout')
          }
          resolve()
        })
    })
  },
  //Экшен 'Обновить токен'
  refreshToken ({
    commit,
  }, data) {
    const path = auth.paths.refreshToken || 'refresh-token'
    Vue.http.post(getUrl(path))
      .then(response => response.json())
      .then((result) => {
        commit('refreshToken', result)
      })
  },
  //Экшен 'Редактировать пользователя'
  editUser ({ commit, dispatch }, data) {
    const path = auth.paths.editUser || 'user'
    Vue.http.post(getUrl(path), data)
      .then(response => {
        let result = response.body
        commit('editUser', result)
      }, (error) => {
        dispatch('openAlertBox', [
          'alertError',
          error.statusText,
        ], { root: true })
      })
  },
  //Экшен 'Редактировать пароль'
  editPassword ({
    commit,
    dispatch,
  }, data) {
    const path = auth.paths.changePassword || 'password'
    Vue.http.post(getUrl(path), data)
      .then(response => {
        let result = response.body
        commit('editPassword', result)
      }, (error) => {
        dispatch('openAlertBox', [
          'alertError',
          error.statusText,
        ], { root: true })
      })
  },
}

export default actions
