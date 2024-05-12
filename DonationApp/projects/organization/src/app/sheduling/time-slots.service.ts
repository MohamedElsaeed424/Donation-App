import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSLotsService {

  timeSlots : Slot[] = [
    new Slot("24/4/2024" , "1:13 pm","2:15 pm")
    ,new Slot("25/4/2024" , "6:20 pm","7:50 pm")
  ]

  constructor() { }

  removeSlot (i:number) {
    this.timeSlots.splice(i,1)
  }

  addSlot (slot:Slot) {
    this.timeSlots.push(slot)
  }

  getTimeSlots(){
    return this.timeSlots
  }

  isSlotUnique(slot: Slot): boolean {
    // Iterate through existing time slots
    for (const existingSlot of this.timeSlots) {
      // Compare date and time
      if (
        existingSlot.date === slot.date &&
        existingSlot.startTime === slot.startTime &&
        existingSlot.endTime === slot.endTime
      ) {
        // Slot is not unique
        return false;
      }
    }
    // Slot is unique
    return true;
  }


}


export class Slot {
  date : string
  startTime : string
  endTime : string
  constructor(date:string, startTime:string, endTime:string) {
    this.date=date ;
    this.startTime = startTime
    this.endTime = endTime ;
  }

}
