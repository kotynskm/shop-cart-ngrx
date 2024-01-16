import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item.model';
import { Store, select } from '@ngrx/store';
import { selectAllCatalogItems } from '../state/catalog/catalog.selectors';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  constructor(private store: Store) {}

  public catalogItems$!: Observable<Item[]>;

  ngOnInit() {
    this.catalogItems$ = this.store.pipe(select(selectAllCatalogItems));
  }
}
