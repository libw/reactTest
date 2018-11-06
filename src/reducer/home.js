let initialState = {
    show: 1
}
export default function home(state = initialState, action = {}) {
    switch (action.type) {

        case 'SHOW':
            // console.log(action)
            
            state.show=action.payload
            // console.log(state.show)
            return Object.assign({}, state, {
                show: action.payload
            });

        default:
            return state
    }
}
// const defaultState = {
//     show:1
// };
// export default function home(state = defaultState, action){
//   switch (action.type) {
//     case 'SHOW':
//       return state.show = action.payload;

//     default: 
//       return state;
//   }
// };
