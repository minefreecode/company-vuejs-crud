//Возвращает то что во входном параметре или английскую локаль по умолчанию
const getters = {
  lng: state => (state.locale != null ? state.locale : state.defaultLocale),//локаль
}

//Экспортируем функцию
export default getters
