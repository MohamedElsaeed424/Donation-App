import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RequestedItem} from "../requested-Items-categories/super/RequestedItem.model";



@Component({
  selector: 'app-requested-item',
  templateUrl: './requested-item.component.html',
  styleUrl: './requested-item.component.css'
})
export class RequestedItemComponent {
  @Input() currentRequestedItem : RequestedItem;
  @Input() currentRequestedItemId : number;
  constructor() {
    console.log('RequestedItemComponent  constructor');
  }
}
