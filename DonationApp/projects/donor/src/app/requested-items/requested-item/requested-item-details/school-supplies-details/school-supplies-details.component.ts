import { Component, Input } from '@angular/core';
import { School } from "../../../requested-Items-categories/categories/school.model";
import { RequestedItem } from "../../../requested-Items-categories/super/RequestedItem.model";

@Component({
  selector: 'app-school-supplies-details',
  templateUrl: './school-supplies-details.component.html',
  styleUrls: ['./school-supplies-details.component.css']
})
export class SchoolSuppliesDetailsComponent {
  private _school: School | null;

  @Input()
  set school(value: RequestedItem | null) {
    // Perform transformation if needed
    this._school = this.transformToSchool(value);
  }

  get school(): School | null {
    return this._school;
  }

  private transformToSchool(value: RequestedItem | null): School | null {
    // Perform transformation logic here
    // For example, check if the value is an instance of School
    if (value instanceof School) {
      return value; // No need for transformation, return as is
    }

    // Handle other cases or return null if transformation is not possible
    return null;
  }
}
