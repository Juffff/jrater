export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_RATE_ITEMS_LIST': {
            return action.data
        }
        default: {
            return state;
        }
    }
}