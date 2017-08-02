export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_DEPARTMENT_RATE': {
            return action.department
        }

        default: {
            return state;
        }
    }
}

