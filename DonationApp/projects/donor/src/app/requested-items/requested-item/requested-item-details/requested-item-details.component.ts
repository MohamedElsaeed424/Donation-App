import {Component, Input, OnInit} from '@angular/core';
import {RequestedItem} from "../../RequestedItem.model";
import {RequestedItemsService} from "../../requested-items.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-requested-item-details',
  templateUrl: './requested-item-details.component.html',
  styleUrl: './requested-item-details.component.css'
})
export class RequestedItemDetailsComponent implements OnInit{
  currentRequestedItem : RequestedItem;
  currentRequestedItemId : number;
  constructor(
    private requestItemService : RequestedItemsService,
    private route: ActivatedRoute,
    private router:Router) {
    console.log('RequestedItemDetailsComponent constructor');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentRequestedItemId = +params['id'];
      this.currentRequestedItem =this.requestItemService.getRequestedItem(this.currentRequestedItemId);
      console.log(this.currentRequestedItem);
    });
  }

  onDonate(){

  }



}
