import { CartItem } from './../../../shared/models/CartItem';
import { CartService } from './../../../service/cart.service';
import { Cart } from './../../../shared/models/Cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService) {

    this.cartService.getCartObservable().subscribe((cart) => {

      this.cart = cart

    })
  }

  ngOnInit(): void {
  }

  removeFromCart(CartItem: CartItem){

    this.cartService.removeFromCart(CartItem.farmacy.id)

  }

  changeQuantity(cartItem: CartItem, quantityInString: string){

    const quantity = parseInt(quantityInString)

    this.cartService.changeQuantity(cartItem.farmacy.id, quantity)
  }

}
