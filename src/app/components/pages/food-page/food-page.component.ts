import { CartService } from './../../../service/cart.service';
import { FarmacyService } from './../../../service/farmacy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Farmacy } from 'src/app/shared/models/Farmacy';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  public farmacy!: Farmacy;

  constructor(activatedRoute:ActivatedRoute, farmacyservice:FarmacyService, private cartService:CartService, private router:Router) {

    activatedRoute.params.subscribe((params) =>{

      if(params['id'])
      this.farmacy = farmacyservice.getFarmacyById(params['id'])

    })
   }

  ngOnInit(): void {
  }

  addToCart(){

    this.cartService.addToCart(this.farmacy)

    this.router.navigateByUrl('/cart-page')

  }

}
