import { FarmacyService } from './../../../service/farmacy.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  public tags?:Tag[];

  constructor( farmacyService:FarmacyService) {

    this.tags = farmacyService.getAllTags()

  }

  ngOnInit(): void {
  }

}
