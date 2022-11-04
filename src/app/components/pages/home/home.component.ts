import { Farmacy } from './../../../shared/models/Farmacy';
import { FarmacyService } from './../../../service/farmacy.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public farmacy: Farmacy[] = []

  constructor(private farmacyService:FarmacyService, activatedRoute: ActivatedRoute) {

    //QUANDO MUDAR O VALOR DO PARAMETRO EXECUTA A LOGICA DO SUBSCRIBE
    activatedRoute.params.subscribe((params) =>{

      if(params['searchTerm'])
      this.farmacy = this.farmacyService.getAllFarmacyBySearchTerm(params['searchTerm'])
      else if(params['tag'])
      this.farmacy = this.farmacyService.getAllFarmacyByTag(params['tag'])
      else
      this.farmacy = farmacyService.getAll()

    })



   }

  ngOnInit(): void {

  }

}
