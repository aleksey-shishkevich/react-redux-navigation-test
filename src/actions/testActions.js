'use strict';

export function setPrice(filter) {
  return {
    type: 'SET_PRICE',
    payload: filter
  };
} 

