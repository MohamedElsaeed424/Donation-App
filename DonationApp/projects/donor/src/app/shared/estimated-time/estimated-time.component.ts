import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Notificationn } from '../notifications/notification.model';
import { NotificationService } from '../notifications/notification.service';
import { AuthService } from '../../auth/auth.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-estimated-time',
  templateUrl: './estimated-time.component.html',
  styleUrls: ['./estimated-time.component.css'],
})
export class EstimatedTimeComponent implements OnInit, OnDestroy {
  progressValue: number = 0;
  progressInterval: Subscription;
  deleted: boolean = false;
  currentUser = this.authService.currentUser;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService ,
    private toastr : ToastrService ,
  ) {}

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
        this.createNotification(); // Call function to create new notification
        this.notificationService.toggleNotifications(true);
        this.toastr.info('Delivery Arrived','Info');
      }
    });
  }
  createNotification(): void {
    const newNotification = new Notificationn(
      this.notificationService.getNotifications().length+1, // Assuming the ID starts from 1 and increments
      'Delivery Arrived',
      'Please meet the delivery person.',
      new Date().toLocaleTimeString(),
      new Date().toLocaleDateString() === new Date().toLocaleDateString() ? 'Today' : new Date().toLocaleDateString(),
    );
    this.notificationService.addNotification(newNotification);
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
