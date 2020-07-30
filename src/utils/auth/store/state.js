//Состояния
const state = {
  logged: 0,
  user: localStorage.getItem('user'),//Если в локальном хранилище уже есть данные
  token: localStorage.getItem('token'),//Если в локальном хранилище уже есть данные
  permissions: localStorage.getItem('permissions'),//Если в локальном хранилище уже есть данные
  userUpdated: false,
  userPasswordUpdated: false,
  userPasswordUpdateError: false,
  userPasswordUpdateErrorMsg: '',
  loginWait: false,
  loginFailed: false,
}

export default state
