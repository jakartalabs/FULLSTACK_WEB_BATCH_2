let user = JSON.parse(localStorage.getItem('user-fresh-market'));

const initialState = user ? {isLogin:true, user} : {};
export function auth(state=initialState,action){
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        isLogin: true,
        user: action.user
      }
    case 'LOGIN_SUCCESS':
      return {
        isLogin: true,
        user: action.user
      }
    case 'LOGIN_ERROR':
      return {}
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
}