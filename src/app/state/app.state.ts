import { CartState } from './cart/cart.reducers';
import { CatalogState } from './catalog/catalog.reducers';

export interface AppState {
  cart: CartState;
  catalog: CatalogState;
}
