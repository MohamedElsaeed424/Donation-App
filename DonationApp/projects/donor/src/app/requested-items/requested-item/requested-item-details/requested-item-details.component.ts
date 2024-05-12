import { Component, Injector, Input, OnInit } from '@angular/core';
import { RequestedItem } from "../../categories/super/RequestedItem.model";
import { RequestedItemsService } from "../../requested-items.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {ItemCategory} from "../../categories/categories-models/all-categories.enum";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-requested-item-details',
  templateUrl: './requested-item-details.component.html',
  styleUrls: ['./requested-item-details.component.css']
})
export class RequestedItemDetailsComponent implements OnInit {
  currentRequestedItem: RequestedItem; // Union type
  currentRequestedItemId: number;
  selectedQuantity: number = 1;

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
      this.currentRequestedItem = this.requestItemService.getRequestedItemByItemId(this.currentRequestedItemId);
      console.log(this.currentRequestedItem);
    });
  }
  submitDonation() {
    this.router.navigate(['./pick-up-details'], {relativeTo: this.route});
  }

  protected readonly ItemCategory = ItemCategory;
}
