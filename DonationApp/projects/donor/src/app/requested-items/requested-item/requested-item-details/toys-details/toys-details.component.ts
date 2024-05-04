import { Component, Input } from '@angular/core';

import { RequestedItem } from "../../../categories/super/RequestedItem.model";
import {Toy} from "../../../categories/categories-models/toy.model";

@Component({
  selector: 'app-toys-details',
  templateUrl: './toys-details.component.html',
  styleUrls: ['./toys-details.component.css']
})
export class ToysDetailsComponent {
  private _toy: Toy | null;

  @Input()
  set toy(value: RequestedItem | null) {
    // Perform transformation if needed
    this._toy = this.transformToToy(value);
  }

  get toy(): Toy | null {
    return this._toy;
  }

  private transformToToy(value: RequestedItem | null): Toy | null {
    // Perform transformation logic here
    // For example, check if the value is an instance of Toy
    if (value instanceof Toy) {
      return value; // No need for transformation, return as is
    }

    // Handle other cases or return null if transformation is not possible
    return null;
  }
}
