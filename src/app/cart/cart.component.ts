import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllCartItems } from '../state/cart/cart.selectors';
import { Observable } from 'rxjs';
import { Item } from '../item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private store: Store) {}
  public cartItems$!: Observable<Item[]>;

  ngOnInit() {
    this.cartItems$ = this.store.pipe(select(selectAllCartItems));
  }
}
