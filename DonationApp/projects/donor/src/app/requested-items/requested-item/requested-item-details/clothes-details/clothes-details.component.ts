import {Component, Input} from '@angular/core';
import {Clothes} from "../../../requested-Items-categories/categories/clothes.model";
import {RequestedItem} from "../../../requested-Items-categories/super/RequestedItem.model";

@Component({
  selector: 'app-clothes-details',
  templateUrl: './clothes-details.component.html',
  styleUrl: './clothes-details.component.css'
})
export class ClothesDetailsComponent {
  @Input() clothes: Clothes;
}
