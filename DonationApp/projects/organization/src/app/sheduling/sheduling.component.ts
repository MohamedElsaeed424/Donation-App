import {Component, OnInit} from '@angular/core';
import {Slot, TimeSLotsService} from "./time-slots.service";

@Component({
  selector: 'app-sheduling',
  templateUrl: './sheduling.component.html',
  styleUrl: './sheduling.component.css'
})
export class ShedulingComponent implements OnInit{

  timeSlots : Slot[]
  startDate: Date;
  startTime: string;
  endTime: string;

  constructor(private timeSlotsService : TimeSLotsService) {
  }

  ngOnInit() {
    this.timeSlots  = this.timeSlotsService.getTimeSlots()
  }

  removeSlot(i:number){
    this.timeSlotsService.removeSlot(i)
  }
  AddSlot() {


    const dateInput = document.getElementById('datepicker') as HTMLInputElement;
    const startTimeInput = document.getElementById('start-time') as HTMLInputElement;
    const endTimeInput = document.getElementById('end-time') as HTMLInputElement;
    if (!dateInput.value || !startTimeInput.value || !endTimeInput.value) {
      alert('Please fill in all fields');
      return; // Exit the function if any input is empty
    }
    if (startTimeInput.value >= endTimeInput.value) {
      alert('Start time must be before end time');
      return; // Exit the function if start time is not before end time
    }
    const slot = new Slot(dateInput.value,startTimeInput.value,endTimeInput.value)
    this.timeSlots.push(slot)
  }

  mergeDateTime(): void {
    // Combine date and time to form a single DateTime object
    const startDateTime = new Date(this.startDate);
    const startTimeParts = this.startTime.split(':');
    startDateTime.setHours(parseInt(startTimeParts[0], 10));
    startDateTime.setMinutes(parseInt(startTimeParts[1], 10));

    const endDateTime = new Date(this.startDate);
    const endTimeParts = this.endTime.split(':');
    endDateTime.setHours(parseInt(endTimeParts[0], 10));
    endDateTime.setMinutes(parseInt(endTimeParts[1], 10));

    // Now you have startDateTime and endDateTime merged together
  }
}
