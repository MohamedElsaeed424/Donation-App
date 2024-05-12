// notifications.service.ts

import { Injectable } from '@angular/core';
import {BehaviorSubject, interval} from 'rxjs';
import { Notificationn } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notificationn[] = [
    // new Notificationn(1, 'Donor1 ', 'successfully fulfilled your post 1', '10:00 AM', '2024-05-02'),
    // new Notificationn(2, 'Donor ', 'successfully fulfilled your post 2', '9:30 AM', '2024-05-02'),
    // new Notificationn(3, 'Donor ', 'successfully fulfilled your post 3', 'Yesterday', '2024-05-01'),
    // new Notificationn(4, 'Donor', 'successfully fulfilled your post 4', '2 days ago', '2024-04-30'),
    // new Notificationn(5, 'Donor', 'successfully fulfilled your post 5', '3 days ago', '2024-04-29'),
    // new Notificationn(6, 'Donor', 'successfully fulfilled your post 6', '11:45 AM', '2024-05-03'),
    // new Notificationn(7, 'Donor', 'successfully fulfilled your post 7', '10:00 AM', '2024-05-03'),
    // new Notificationn(8, 'Donor', 'successfully fulfilled your post 8', 'Yesterday', '2024-05-02'),
    // new Notificationn(9, 'Donor', 'successfully fulfilled your post 9', '2 days ago', '2024-05-01'),
    // new Notificationn(10, 'Donor', 'successfully fulfilled your post 10', '3 days ago', '2024-04-30')
  ];

  private showNotificationsSource = new BehaviorSubject<boolean>(false);
  public notificationsSubject = new BehaviorSubject<Notificationn[]>(this.notifications);
  showNotifications$ = this.showNotificationsSource.asObservable();
  constructor() {
    this.addRandomNotificationEveryMinute()
  }

  getNotifications(): Notificationn[] {
    return this.notifications ;
  }

  addNotification(notification: Notificationn): void {
    this.notifications.push(notification);
    this.notificationsSubject.next(this.notifications);
  }
  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
    this.notificationsSubject.next(this.notifications);
  }
  toggleNotifications(show: boolean): void {
    this.showNotificationsSource.next(show);
  }

  clearNotifications(): void {
    this.notifications = [];
    this.notificationsSubject.next([]);
  }

  addRandomNotificationEveryMinute(): void {
    // Use interval to trigger adding a notification every minute
    interval(20000) // 60000 milliseconds = 1 minute
      .subscribe(() => {
        // Create a random notification
        const randomNotification = this.generateRandomNotification();

        // Add the random notification to the list
        this.addNotification(randomNotification);
      });
  }

  generateRandomNotification(): Notificationn {
    // Generate random values for the notification
    const id = this.notifications.length + 1;
    const titles = [ 'post ' + id+ ' fulfilled'];
    const details = [ 'Your request for a donation of post has been fulfilled'];
    const randomIndex = Math.floor(Math.random() * titles.length);
    const date = new Date();

    // Create a new Notificationn instance with the random values
    return new Notificationn(id, titles[randomIndex], details[randomIndex], date.toTimeString(), date.toISOString().split('T')[0]);
  }
}
