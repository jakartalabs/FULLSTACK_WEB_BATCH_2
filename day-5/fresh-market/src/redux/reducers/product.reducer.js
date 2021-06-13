export const category=(state = {}, action) =>{
  switch (action.type) {
    case 'GET_CATEGORY_REQUEST':
      return {
        isLoading: true
      }
    case 'GET_CATEGORY_SUCCESS':
      return {
        items: action.category
      }
    case 'GET_CATEGORY_ERROR':
      return {
        error: action.error
      }
    default:
      return state;
  }
}