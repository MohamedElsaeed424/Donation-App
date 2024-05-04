import { Component, Input } from '@angular/core';

import { RequestedItem } from "../../../categories/super/RequestedItem.model";
import {Clothes} from "../../../categories/categories-models/clothes.model";

@Component({
  selector: 'app-clothes-details',
  templateUrl: './clothes-details.component.html',
  styleUrls: ['./clothes-details.component.css']
})
export class ClothesDetailsComponent {
  private _clothes: Clothes | null;

  @Input()
  set clothes(value: RequestedItem | null) {
    // Perform transformation if needed
    this._clothes = this.transformToClothes(value);
  }

  get clothes(): Clothes | null {
    return this._clothes;
  }

  private transformToClothes(value: RequestedItem | null): Clothes | null {
    // Perform transformation logic here
    // For example, check if the value is an instance of Clothes
    if (value instanceof Clothes) {
      return value; // No need for transformation, return as is
    }

    // Handle other cases or return null if transformation is not possible
    return null;
  }
}
