import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RequestedItem} from "../../RequestedItem.model";
import {RequestedItemsService} from "../../requested-items.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-requested-item',
  templateUrl: './requested-item.component.html',
  styleUrl: './requested-item.component.css'
})
export class RequestedItemComponent {
  @Input() currentRequestedItem : RequestedItem;
  @Input() currentRequestedItemId : number;
}
