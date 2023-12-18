import { createReducer, on } from '@ngrx/store';
import { cartActions } from './cart.actions';
import { Item } from 'src/app/item.model';

export interface CartState {
  cartItems: Item[];
}
export const initialState: CartState = {
  cartItems: [{ name: 'item', id: '1' }],
};

export const cartReducer = createReducer(
  initialState,
  on(cartActions.loadCartItems, (state) => state),
  on(cartActions.addItemToCart, (state, { item }) => ({
    ...state,
    cartItems: [...state.cartItems, item],
  })),
  on(cartActions.removeItemFromCart, (state, { itemId }) => ({
    ...state,
    cartItems: state.cartItems.filter((item) => item.id != itemId),
  }))
);
