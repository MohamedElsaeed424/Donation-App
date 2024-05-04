import { Component, Input } from '@angular/core';

import { RequestedItem } from "../../../categories/super/RequestedItem.model";
import {MedicalSupply} from "../../../categories/categories-models/medical-supplies.model";

@Component({
  selector: 'app-medical-supplies-details',
  templateUrl: './medical-supplies-details.component.html',
  styleUrls: ['./medical-supplies-details.component.css']
})
export class MedicalSuppliesDetailsComponent {
  private _medicalSupply: MedicalSupply | null;

  @Input()
  set medicalSupply(value: RequestedItem | null) {
    // Perform transformation if needed
    this._medicalSupply = this.transformToMedicalSupply(value);
  }

  get medicalSupply(): MedicalSupply | null {
    return this._medicalSupply;
  }

  private transformToMedicalSupply(value: RequestedItem | null): MedicalSupply | null {
    // Perform transformation logic here
    // For example, check if the value is an instance of MedicalSupply
    if (value instanceof MedicalSupply) {
      return value; // No need for transformation, return as is
    }

    // Handle other cases or return null if transformation is not possible
    return null;
  }
}
