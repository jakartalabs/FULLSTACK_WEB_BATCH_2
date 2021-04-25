import { ADD_DATA } from '../constants/type';

const initialState = {
  articles: [],
}

function _articles(state = initialState, action) {
  if (action.type === ADD_DATA) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  return state
}

export default _articles;