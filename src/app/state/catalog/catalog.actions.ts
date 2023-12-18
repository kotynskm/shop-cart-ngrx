import { createActionGroup, props } from '@ngrx/store';
import { Item } from 'src/app/item.model';

export const catalogActions = createActionGroup({
  source: 'Catalog',
  events: {
    'load catalog items': props<{ items: Item[] }>,
  },
});
