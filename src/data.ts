import { Farmacy } from "./app/shared/models/Farmacy";
import { Tag } from "./app/shared/models/Tag";

export const sample_farmacy: Farmacy[] = [
  {
    id:'1',
    name:'Siringas',
    price:13.50,
    deliveryTime: '2 dias',
    favorite:false,
    origins:['São Paulo'],
    stars: 4.0,
    imageUrl:'assets/1.jpg',
    tags:['Siringas', 'Farmácia']
  },
  {
    id:'2',
    name:'Remédios',
    price:11.50,
    deliveryTime: '4 dias',
    favorite:false,
    origins:['São Paulo'],
    stars: 4.0,
    imageUrl:'assets/2.jpg',
    tags:['Remédios', 'Farmácia']
  },
  {
    id:'3',
    name:'Gazes',
    price:31.50,
    deliveryTime: '4 dias',
    favorite:false,
    origins:['São Paulo'],
    stars: 4.0,
    imageUrl:'assets/3.jpg',
    tags:['Gazes', 'Farmácia']
  },
  {
    id:'4',
    name:'Jalecos',
    price:11.50,
    deliveryTime: '4 dias',
    favorite:true,
    origins:['São Paulo'],
    stars: 4.0,
    imageUrl:'assets/4.jpg',
    tags:['Jalecos']
  },
]

export const sample_tags:Tag[] = [
  {name: 'All', count: 4},
  {name:'Jalecos', count: 1},
  {name:'Farmácia', count:3},
  {name:'Gazes', count:1},
  {name:'Siringa', count: 1},
  {name:'Remedios', count:1}
]
