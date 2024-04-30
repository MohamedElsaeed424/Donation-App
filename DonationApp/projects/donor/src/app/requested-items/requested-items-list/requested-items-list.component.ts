import {Component, OnDestroy, OnInit} from '@angular/core';
import {RequestedItem} from "../RequestedItem.model";
import {RequestedItemsService} from "../requested-items.service";

@Component({
  selector: 'app-requested-items-list',
  templateUrl: './requested-items-list.component.html',
  styleUrl: './requested-items-list.component.css'
})
export class RequestedItemsListComponent implements OnInit {
  requestedItems : RequestedItem[] ;

  constructor(private requestItemService : RequestedItemsService) { }
  ngOnInit(): void {
    this.requestedItems = this.requestItemService.getRequestedItems();
  }
}
