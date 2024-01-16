import { createReducer, on } from '@ngrx/store';
import { catalogActions } from './catalog.actions';
import { Item } from 'src/app/item.model';

export interface CatalogState {
  catalogItems: Item[];
}

export const initialState: CatalogState = {
  catalogItems: [
    {
      name: 'vaccum',
      id: '2',
      price: 250,
      details: 'our best model with maximum suction',
    },
    {
      name: 'computer',
      id: '3',
      price: 2300,
      details: 'perfect for gaming, best graphics card on the market',
    },
    {
      name: 'sweater',
      id: '4',
      price: 300,
      details: 'merino wool, cozy and warm',
    },
    { name: 'coffee', id: '5', price: 5, details: 'beans roasted in house' },
  ],
};

export const catalogReducer = createReducer(
  initialState,
  on(catalogActions.loadCatalogItems, (state) => state)
);
