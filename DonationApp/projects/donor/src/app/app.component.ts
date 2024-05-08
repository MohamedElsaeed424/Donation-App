import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Subscription} from "rxjs";
import {NotificationService} from "./shared/notifications/notification.service";
import { Notificationn } from './shared/notifications/notification.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit , OnDestroy , OnChanges{
  notifications: Notificationn[];
  showNotificationDetails: boolean = false;
  notificationSubscription: Subscription;
  notificationsLength: number = 0;

  constructor(
    protected authService: AuthService ,
    private notificationService :NotificationService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
    }else{
      this.notificationSubscription = this.notificationService.showNotifications$.subscribe(show => {
        this.showNotificationDetails = show;
      });
      this.notifications = this.notificationService.getNotifications();
      this.notificationsLength = this.notifications.length;
    }
  }
  // effect on length of array in dom
  ngOnChanges(changes: SimpleChanges) {
    this.notificationsLength = this.notifications.length;
  }

  toggleNotificationDetails(): void {
    this.showNotificationDetails = !this.showNotificationDetails;
  }
  ngOnDestroy(): void {
    this.notificationSubscription.unsubscribe();
  }
  protected readonly localStorage = localStorage;


}
