import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notificationn } from './notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notificationn[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }

  removeNotification(id: number): void {
    this.notificationService.deleteNotification(id); // Call the service method to delete notification
    this.notifications = this.notifications.filter(notification => notification.id !== id);
    console.log(this.notificationService.getNotifications());
  }

  clearNotifications(): void {
    this.notificationService.clearNotifications(); // Call the service method to clear all notifications
    this.notifications = []; // Clear the local array
  }
}
