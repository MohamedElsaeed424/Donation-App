import { Component, Injector, Input, OnInit } from '@angular/core';
import { RequestedItem } from "../../requested-Items-categories/super/RequestedItem.model";
import { RequestedItemsService } from "../../requested-items.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Book } from "../../requested-Items-categories/categories/book.model";
import { Clothes } from "../../requested-Items-categories/categories/clothes.model";
import { Food } from "../../requested-Items-categories/categories/food.model";
import { School } from "../../requested-Items-categories/categories/school.model";
import { Toy } from "../../requested-Items-categories/categories/toy.model";
import { MedicalSupply } from "../../requested-Items-categories/categories/medical-supplies.model";
import {ItemCategory} from "../../requested-Items-categories/categories/all-categories.enum";

@Component({
  selector: 'app-requested-item-details',
  templateUrl: './requested-item-details.component.html',
  styleUrls: ['./requested-item-details.component.css']
})
export class RequestedItemDetailsComponent implements OnInit {
  currentRequestedItem: RequestedItem; // Union type
  currentRequestedItemId: number;

  constructor(
    private requestItemService: RequestedItemsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log('RequestedItemDetailsComponent constructor');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentRequestedItemId = +params['id'];
      this.currentRequestedItem = this.requestItemService.getRequestedItem(this.currentRequestedItemId);
      console.log(this.currentRequestedItem);
    });
  }


  onDonate() {
    // Implement your functionality here
  }

  protected readonly ItemCategory = ItemCategory;
}
