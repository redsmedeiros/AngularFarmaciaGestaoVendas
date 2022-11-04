import { sample_farmacy, sample_tags } from './../../data';
import { Farmacy } from './../shared/models/Farmacy';
import { Injectable } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FarmacyService {

  constructor() { }

  //METODO BUSCA O ARRAY DE PRODUTOS
  public getAll():Farmacy[] {

    return sample_farmacy

  }

  //METODO DE PESQUISA
  public getAllFarmacyBySearchTerm(searchTerm: string){

    return this.getAll().filter( farm => farm.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }

  //METODO PARA PEGAR OS DADOS DE TAG
  public getAllTags():Tag[]{
    return sample_tags
  }

  //METODO PARA SELECIONAR OS DADOS DO ARRAY DE PRODUTOS POR TAGS
  public getAllFarmacyByTag(tag:string):Farmacy[]{
    return tag == 'All' ? this.getAll() : this.getAll().filter( farmacy => farmacy.tags?.includes(tag))
  }

  //METODO PARA OBTER O PRODUTO POR ID
  public getFarmacyById(farmId: string): Farmacy{
    return this.getAll().find( farm => farm.id == farmId) ?? new Farmacy() //CASO RETORNE INDEFINIDO
  }

  //1:39:30
}
