// estimated-time.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-estimated-time',
  templateUrl: './estimated-time.component.html',
  styleUrls: ['./estimated-time.component.css'],
})
export class EstimatedTimeComponent implements OnInit, OnDestroy {
  progressValue: number = 0;
  progressInterval: Subscription;
  deleted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Start the progress timer
    this.startProgress();
  }

  startProgress(): void {
    // Calculate the interval for each step of the progress bar
    const progressIntervalTime = 100; // 100 milliseconds
    const totalTime = 10000; // 10 seconds
    const steps = totalTime / progressIntervalTime;
    const progressStep = 100 / steps;

    // Increment the progress value gradually
    this.progressInterval = interval(progressIntervalTime).subscribe(() => {
      if (this.progressValue < 100) {
        this.progressValue += progressStep;
      } else {
        this.progressValue = 100;
        this.progressInterval.unsubscribe(); // Stop the timer when progress reaches 100%
      }
    });
  }

  ngOnDestroy(): void {
    this.progressInterval.unsubscribe();
  }

  cancel(): void {
    // Remove the component from the DOM
    this.deleted = true;
    localStorage.removeItem('isItemRequested');
    document.querySelector('.eta-container').remove();
  }
}
