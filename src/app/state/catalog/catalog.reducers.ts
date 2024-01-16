import { createReducer, on } from '@ngrx/store';
import { catalogActions } from './catalog.actions';
import { Item } from 'src/app/item.model';

export interface CatalogState {
  catalogItems: Item[];
}

export const initialState: CatalogState = {
  catalogItems: [
    { name: 'vaccum', id: '2' },
    { name: 'computer', id: '3' },
  ],
};

export const catalogReducer = createReducer(
  initialState,
  on(catalogActions.loadCatalogItems, (state) => state)
);
