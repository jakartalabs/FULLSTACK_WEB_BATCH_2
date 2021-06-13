let user = JSON.parse(localStorage.getItem('user-fresh-market'));

export function register(state = {}, action) {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        isRegister: true,
      }
    case 'REGISTER_SUCCESS':
      return {}
    case 'REGISTER_ERROR':
      return {}
    default:
      return state;
  }
}
