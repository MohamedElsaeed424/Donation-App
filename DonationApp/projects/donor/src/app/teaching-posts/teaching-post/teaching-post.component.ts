import {Component, Input} from '@angular/core';
import {TeachingPost} from "../teaching-post.model";

@Component({
  selector: 'app-teaching-post',
  templateUrl: './teaching-post.component.html',
  styleUrl: './teaching-post.component.css'
})
export class TeachingPostComponent {
  @Input() currentTeachingPost : TeachingPost;
  @Input() currentTeachingPostId : number;
  constructor() {
    console.log('TeachingPostComponent  constructor');
  }
}
