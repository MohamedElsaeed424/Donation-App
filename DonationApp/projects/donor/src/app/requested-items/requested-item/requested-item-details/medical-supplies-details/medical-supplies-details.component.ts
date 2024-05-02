import {Component, Input} from '@angular/core';
import {MedicalSupply} from "../../../requested-Items-categories/categories/medical-supplies.model";
import {RequestedItem} from "../../../requested-Items-categories/super/RequestedItem.model";

@Component({
  selector: 'app-medical-supplies-details',
  templateUrl: './medical-supplies-details.component.html',
  styleUrl: './medical-supplies-details.component.css'
})
export class MedicalSuppliesDetailsComponent {
  @Input() medicalSupply: MedicalSupply;
}
