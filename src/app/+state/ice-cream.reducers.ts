import { createReducer, on, createSelector } from '@ngrx/store';
import { IceCream } from '../models/icecream.interface';
import { addIceCream, errorIceCream, loadIceCreams } from './ice-cream.actions';


export interface IceCreamState {
  iceCreams: IceCream[];
  cart: IceCream[];
  error: string;
}

export const initialState: IceCreamState = {
    iceCreams: [],
    cart: [],
    error: '',
};

export const IceCreamReducer = createReducer(
    initialState,
    on(loadIceCreams, (state, action) => {
      return { ...state, iceCreams: action.iceCreams }
    }),
    on(addIceCream, (state, action) => {
      const cart = [...state.cart, action.iceCream];
      return { ...state, cart }
    }),
    on(errorIceCream, (state, action) => ({
        ...state,
        error: action.message,
    }))
);

// SELECTORS
export const selectIceCreamState = (state: any) => state.iceCreamState as IceCreamState;
export const selectIceCreams = createSelector(selectIceCreamState, (state) => state.iceCreams);

export const selectError = createSelector(selectIceCreamState, (state) => state.error);

export const selectIceCreamsCartCount = createSelector(selectIceCreamState, (state) => state.cart.length);
