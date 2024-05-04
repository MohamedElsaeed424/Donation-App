import {Component, OnInit} from '@angular/core';
import {ItemCategory} from "../categories-models/all-categories.enum";
import {RequestedItem} from "../super/RequestedItem.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestedItemsService} from "../../requested-items.service";

@Component({
  selector: 'app-requested-item-category',
  templateUrl: './requested-item-category.component.html',
  styleUrl: './requested-item-category.component.css'
})
export class RequestedItemCategoryComponent  implements OnInit{
  category : ItemCategory ;
  requestedItemsCategory : RequestedItem [] ;

  constructor(
    private requestedItemsService : RequestedItemsService ,
    private route : ActivatedRoute)
  {
    console.log("Constructor of category component")
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(this.route);
      console.log(params['category']);
      this.category = params['category'];
      this.requestedItemsCategory =this.requestedItemsService.filterRequestedItemsByCategory(this.category);
    });

    console.log("category",this.requestedItemsCategory);
  }

  protected readonly ItemCategory = ItemCategory;
}
