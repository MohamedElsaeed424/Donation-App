import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();
  @Input()thing: string;
  onInputChange(query: Event): void {
    this.searchQuery.emit(query.target['value']);
  }
}
