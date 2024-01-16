import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatalogState } from './catalog.reducers';

export const selectCatalogState =
  createFeatureSelector<CatalogState>('catalog');
export const selectAllCatalogItems = createSelector(
  selectCatalogState,
  (state: CatalogState) => state.catalogItems
);
