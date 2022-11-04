import { Farmacy } from './Farmacy';

export class CartItem{

  public quantity:number = 1;

  public price:number = this.farmacy.price

  constructor(public farmacy:Farmacy){}



}
