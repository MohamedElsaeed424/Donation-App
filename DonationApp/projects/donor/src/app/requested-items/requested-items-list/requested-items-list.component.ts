import {Component, Input, OnInit} from '@angular/core';
import {RequestedItem} from "../categories/super/RequestedItem.model";
import {RequestedItemsService} from "../requested-items.service";

@Component({
  selector: 'app-requested-items-list',
  templateUrl: './requested-items-list.component.html',
  styleUrl: './requested-items-list.component.css'
})
export class RequestedItemsListComponent implements OnInit {
  requestedItems : RequestedItem[] ;
   searchQuery: string = '';
  constructor(private requestItemService : RequestedItemsService) { }
  ngOnInit(): void {
    this.requestedItems = this.requestItemService.getRequestedItems();
  }
}
