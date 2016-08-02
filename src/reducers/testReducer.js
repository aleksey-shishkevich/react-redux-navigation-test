'use strict';

export default function testReducer(state = {price:null}, action) {
    switch (action.type) {
      case 'SET_PRICE':
            if (state.price!=action.payload){
                return {price:action.payload}
            }
            return state;
            break;
    }
    return state;
}