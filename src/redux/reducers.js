import { combineReducers } from 'redux';

const initialState = { value: 0 }

/**
 * https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
 */
// app reducer
const counterReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'increment':
      return {
        value: state.value + 1
      }
      break;
    case 'decrement':
      return {
        value: state.value - 1
      }
  
    default:
      return state;
  }

}

// combine the reducers
// if there was multiple
export default combineReducers({
  counter: counterReducer
})
