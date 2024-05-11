import { Component } from '@angular/core';

@Component({
  selector: 'app-sheduling',
  templateUrl: './sheduling.component.html',
  styleUrl: './sheduling.component.css'
})
export class ShedulingComponent {

  startDate: Date;
  startTime: string;
  endTime: string;

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
