import {Component, OnInit} from '@angular/core';
import {TeachingPostService} from "../teaching-posts.service";
import {TeachingPost} from "../teaching-post.model";

@Component({
  selector: 'app-teaching-posts-list',
  templateUrl: './teaching-posts-list.component.html',
  styleUrl: './teaching-posts-list.component.css'
})
export class TeachingPostsListComponent implements OnInit{
  teachingPosts: TeachingPost[] ;
  searchQuery1: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';
  constructor(private teachingPostService: TeachingPostService) { }
  ngOnInit(): void {
    this.teachingPosts = this.teachingPostService.getTeachingPosts();
  }
}
