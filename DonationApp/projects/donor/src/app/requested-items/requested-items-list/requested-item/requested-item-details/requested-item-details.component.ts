import {Component, OnInit} from '@angular/core';
import {RequestedItem} from "../../../RequestedItem.model";

@Component({
  selector: 'app-requested-item-details',
  templateUrl: './requested-item-details.component.html',
  styleUrl: './requested-item-details.component.css'
})
export class RequestedItemDetailsComponent implements OnInit  {
  currentReqItem : RequestedItem ;
  constructor() {}

  ngOnInit(): void {
  }
}
