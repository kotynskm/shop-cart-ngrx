import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Item } from 'src/app/item.model';

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    'load cart items': emptyProps,
    'add item to cart': props<{ item: Item }>(),
    'remove item from cart': props<{ itemId: string }>(),
  },
});
