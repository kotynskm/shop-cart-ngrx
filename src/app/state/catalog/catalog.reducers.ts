import { createReducer, on } from '@ngrx/store';
import { catalogActions } from './catalog.actions';
import { Item } from 'src/app/item.model';

export const initialState: Item[] = [];

export const catalogReducer = createReducer(
  initialState,
  on(catalogActions.loadCatalogItems, (state) => [...state])
);
