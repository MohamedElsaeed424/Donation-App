import { Injectable } from '@angular/core';
import { TeachingPost } from './teaching-post.model';

@Injectable({
  providedIn: 'root'
})
export class TeachingPostService {

  private teachingPosts: TeachingPost[] = [
    new TeachingPost(
      1,
      'Dar1',
      'Mathematics',
      '2024-05-05',
      'Looking for a mathematics teacher for a high school.',
      'Sample Area',
      'Sample Governorate',
      30,
      'Sample Address 1'
    ),
    new TeachingPost(
      2,
      'Dar2',
      'English',
      '2024-05-06',
      'Seeking an English teacher for primary school students.',
      'Sample Area',
      'Sample Governorate',
      25,
      'Sample Address 2'
    ),
    new TeachingPost(
      3,
      'Dar3',
      'Science Teacher',
      '2024-05-07',
      'In need of a science teacher for middle school.',
      'Sample Area',
      'Sample Governorate',
      20,
      'Sample Address 3'
    ),
  ];

  constructor() { }

  getTeachingPosts(): TeachingPost[] {
    return this.teachingPosts;
  }

  getTeachingPostById(id: number): TeachingPost | undefined {
    return this.teachingPosts.find(post => post.id === id);
  }

  addTeachingPost(post: TeachingPost): void {
    this.teachingPosts.push(post);
  }

  updateTeachingPost(post: TeachingPost): void {
    const index = this.teachingPosts.findIndex(p => p.id === post.id);
    if (index !== -1) {
      this.teachingPosts[index] = post;
    }
  }

  deleteTeachingPost(id: number): void {
    this.teachingPosts = this.teachingPosts.filter(post => post.id !== id);
  }
}
