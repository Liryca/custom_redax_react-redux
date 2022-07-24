
export const initialState = 0;

 export const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_COUNT') {
        return state + action.number;
    } if (action.type === 'DECREMENT_COUNT') {
        return state - action.number;
    }
    return state;
}