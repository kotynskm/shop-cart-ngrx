import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducers';

// select the state item that we are interested from the overall app state (in this case, we want the cart items state)
export const selectCartState = createFeatureSelector<CartState>('cart');
export const selectAllCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.cartItems
);
