import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Subscription} from "rxjs";
import {NotificationService} from "./shared/notifications/notification.service";
import { Notificationn } from './shared/notifications/notification.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit , OnDestroy{

  constructor(
    protected authService: AuthService ,
    private notificationService :NotificationService
  ) {}
  showNotificationDetails: boolean = false;
  notificationSubscription: Subscription;
  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
    }else{
      this.notificationSubscription = this.notificationService.showNotifications$.subscribe(show => {
        this.showNotificationDetails = show;
      });
    }
  }

  toggleNotificationDetails(): void {
    this.showNotificationDetails = !this.showNotificationDetails;
  }
  protected readonly localStorage = localStorage;
}
