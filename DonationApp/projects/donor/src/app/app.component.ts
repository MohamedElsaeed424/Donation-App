import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { Observable, Subscription } from "rxjs";
import { NotificationService } from "./shared/notifications/notification.service";
import { Notificationn } from './shared/notifications/notification.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  notifications: Notificationn[];
  showNotificationDetails: boolean = false;
  notificationSubscription: Subscription;
  notificationLength : number ;

  constructor(
    protected authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
    } else {
      this.notificationSubscription = this.notificationService.showNotifications$.
      subscribe(show => {this.showNotificationDetails = show;});
      this.notificationService.notificationsSubject.
      subscribe(notifications => {this.notificationLength = notifications.length;});
    }
  }
  toggleNotificationDetails(): void {
    this.showNotificationDetails = !this.showNotificationDetails;
  }
  ngOnDestroy(): void {
    this.notificationSubscription.unsubscribe();
  }

  protected readonly localStorage = localStorage;
}
