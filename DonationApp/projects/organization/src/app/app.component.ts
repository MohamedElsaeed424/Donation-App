import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {NotificationService} from "./shared/notifications/notification.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(protected authService :AuthService,
              private notificationService: NotificationService) {
  }

  showNotificationDetails: boolean = false;
  notificationSubscription: Subscription;
  notificationLength : number ;

  ngOnInit() {
    this.notificationSubscription = this.notificationService.showNotifications$.
    subscribe(show => {this.showNotificationDetails = show;});
    this.notificationService.notificationsSubject.
    subscribe(notifications => {this.notificationLength = notifications.length;});
  }

  toggleNotificationDetails(): void {
    this.showNotificationDetails = !this.showNotificationDetails;
  }

  ngOnDestroy(): void {
    this.notificationSubscription.unsubscribe();
    this.notificationSubscription.unsubscribe();
  }
}
