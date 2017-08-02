export default function (state = {}, action) {
    switch (action.type) {
        case 'SELECT_DEPARTMENT': {
            return action.department
        }

        default: {
            return state;
        }
    }
}