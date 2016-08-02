'use strict';

export default function startReducer(state = {price:'undefined'}, action) {
    switch (action.type) {
      case 'SET_PRICE_LABEL':
            return {price:action.payload}
            break;
    }
    return state;
}