import { Component } from '@angular/core';

@Component({
  selector: 'app-postdonations',
  templateUrl: './postdonations.component.html',
  styleUrls: ['./postdonations.component.css']
})
export class PostdonationsComponent {

  constructor() { }

  // Define the submitForm method
  submitForm() {
    // Add your logic here for handling the form submission
    console.log('Form submitted');
  }

}

