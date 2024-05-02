import {Component, Input} from '@angular/core';
import {School} from "../../../requested-Items-categories/categories/school.model";
import {RequestedItem} from "../../../requested-Items-categories/super/RequestedItem.model";

@Component({
  selector: 'app-school-supplies-details',
  templateUrl: './school-supplies-details.component.html',
  styleUrl: './school-supplies-details.component.css'
})
export class SchoolSuppliesDetailsComponent {
  @Input() school: School;
}
