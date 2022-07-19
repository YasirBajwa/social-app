
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_POST':
        return action.payload;

        case 'CREATE_POST':
         return state   


        default:
        return state;
    }
}