import { configureStore } from "@reduxjs/toolkit";
 
const initValue={counter: 0, showCounter: true};
const counterReducer = (state = initValue, action) => {
    if (action.type === "increment"){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };

    }

    if(action.type === "increaseby"){
        return{
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }
    if (action.type === "decrement"){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if(action.type === "toggler"){
        return{
            counter: state.counter,
            showCounter: !state.showCounter,
        }
    }
    

    return state;
};
 
const store = configureStore({ reducer: counterReducer });

export default store;