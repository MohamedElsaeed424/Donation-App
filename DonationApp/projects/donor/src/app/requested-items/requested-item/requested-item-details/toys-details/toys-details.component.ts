import {Component, Input} from '@angular/core';
import {Toy} from "../../../requested-Items-categories/categories/toy.model";
import {RequestedItem} from "../../../requested-Items-categories/super/RequestedItem.model";



@Component({
  selector: 'app-toys-details',
  templateUrl: './toys-details.component.html',
  styleUrl: './toys-details.component.css'
})
export class ToysDetailsComponent {
  @Input() toy: Toy;
}
