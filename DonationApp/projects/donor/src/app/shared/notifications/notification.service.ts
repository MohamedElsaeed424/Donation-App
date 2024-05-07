// notifications.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notificationn } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notificationn[] = [
    new Notificationn(1, 'Donation Received', 'You have received a donation for $100 from John Doe', '10:00 AM', '2024-05-02'),
    new Notificationn(2, 'Donation Request Approved', 'Your request for a donation of laptops has been approved', '9:30 AM', '2024-05-02'),
    new Notificationn(3, 'Delivery Confirmation', 'Your order #1234 has been confirmed and is on its way', 'Yesterday', '2024-05-01'),
    new Notificationn(4, 'Delivery Arrived', 'Your package has arrived at the destination address', '2 days ago', '2024-04-30'),
    new Notificationn(5, 'Donation Received', 'You have received a donation of clothes from Jane Smith', '3 days ago', '2024-04-29')
  ];

  private showNotificationsSource = new BehaviorSubject<boolean>(false);
  private notificationsSubject = new BehaviorSubject<Notificationn[]>(this.notifications);
  showNotifications$ = this.showNotificationsSource.asObservable();
  constructor() { }

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
}
