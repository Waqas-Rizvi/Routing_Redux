const INITIAL_STATE = {
        username: "Waqas",
        email: "waqashafiz90@gmail.com",
        phone: "03212341020",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png",
        todos: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "UPDATEDATA":
            return {
                ...state,
                username: action.username
            }
            case "UPDATETODOS":
            return {
                ...state,
                todos: action.todos
            }
        default:
            return state
    }

    // switch(action.type) {
    //     case 'API_SUCCESS':
    //         return {
    //             ...state,
    //             apiData: action.data,
    //         };
    //         break;

    //     default:

}

