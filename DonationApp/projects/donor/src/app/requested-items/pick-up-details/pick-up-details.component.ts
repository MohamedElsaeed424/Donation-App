import {Component, OnInit} from '@angular/core';
import {RequestedItemsService} from "../requested-items.service";
import {ActivatedRoute, Params} from "@angular/router";
import {RequestedItem} from "../categories/super/RequestedItem.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pick-up-details',
  templateUrl: './pick-up-details.component.html',
  styleUrl: './pick-up-details.component.css'
})
export class PickUpDetailsComponent implements OnInit{
  requestedItemID : number;
  requestedItem : RequestedItem;
  pickUpForm : FormGroup;
  constructor(
    private requestedItemsService : RequestedItemsService,
    private route : ActivatedRoute  ,
    private fb : FormBuilder
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.requestedItemID = +params['id'];
      this.requestedItem = this.requestedItemsService.getRequestedItemByItemId(this.requestedItemID);
      console.log(this.requestedItem);
    });
    this.createPickUpForm();
  }

  createPickUpForm() {
    this.pickUpForm = this.fb.group({
      pickUpDate:['',Validators.required],
      pickUpTime: ['',Validators.required],
      pickUpAddress: ['',Validators.required] ,
      transportation: ['',Validators.required],
      requestedItem: this.requestedItem
    });
  }

  submitPickUpDetails() {
    console.log(this.pickUpForm.value);
    localStorage.setItem("isItemRequested","true");
  }

}
