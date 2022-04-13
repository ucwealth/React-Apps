const redux = require('redux')
// create an action
const BUY_CAKE = 'BUY_CAKE'
// create action creator
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Time to buy some cake!'
    }
}
// create state
const initialState = {
    numCakes: 10
}
// create reducer : (prevState, action) => newState
const cakeReducer = (state= initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numCakes: state.numCakes - 1
        }
        default: return state 
    }
}
// create store
const store = redux.createStore(cakeReducer)
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
// create dispatch
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()