const initialSatet = {

}

export const boardReducer = (state = initialSatet, action) => {
    switch (action.type) {
        case "": state = [...state];
            break;
        default:
            break;
    }
    return state;
}