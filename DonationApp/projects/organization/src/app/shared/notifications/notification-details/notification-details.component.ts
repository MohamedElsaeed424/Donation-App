import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NotificationService} from "../notification.service";
import {Notificationn} from "../notification.model";

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent {
  @Input() notification: Notificationn;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  removeNotification(): void {
    this.remove.emit(this.notification.id);
  }
}
