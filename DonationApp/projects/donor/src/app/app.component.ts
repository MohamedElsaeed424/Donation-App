import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import { NotificationService } from './shared/notifications/notification.service';
import { Notificationn } from './shared/notifications/notification.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(protected authService: AuthService,private notificationService: NotificationService) {}
  showNotificationDetails: boolean = false;
  notifications: Notificationn[] = [];
  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
    }
    this.notifications = this.notificationService.getNotifications();
  }

  toggleNotificationDetails(): void {
    this.showNotificationDetails = !this.showNotificationDetails;
  }
  protected readonly localStorage = localStorage;
}
