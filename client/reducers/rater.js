export default function (state = {}, action) {
  switch (action.type) {
    case 'UPDATE_RATING': {
      return Object.assign({}, state, {count: action.count});
    }

    default: {
      return state;
    }
  }
}
