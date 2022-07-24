
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_POSTS':
        return action.payload;

        case 'CREATE_POST':
         return [...state,action.payload]   

        case 'UPDATE_POST':
        return state.map((post) => post._id === action.payload._id ? action.payload : post)

        case "DELETE_POST":
        return state.filter((post) => post._id !== action.payload);

        case "LIKE_POST":
        return state.map((post) => post._id === action.payload._id ? action.payload : post)



        default:
        return state;
    }
}