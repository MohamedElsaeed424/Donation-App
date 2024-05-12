import { Component, OnInit } from '@angular/core';
import {TeachingPost} from "../../teaching-post.model";
import {TeachingPostService} from "../../teaching-posts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-teaching-post-details',
  templateUrl: './teaching-post-details.component.html',
  styleUrls: ['./teaching-post-details.component.css']
})
export class TeachingPostDetailsComponent implements OnInit {
  currentTeachingPost: TeachingPost;
  currentTeachingPostId: number;
  selectedQuantity: number = 1;
  constructor(
    private teachingPostService: TeachingPostService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    console.log('TeachingPostDetailsComponent constructor');
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentTeachingPostId = +params['id'];
      this.currentTeachingPost = this.teachingPostService.getTeachingPostById(this.currentTeachingPostId);
      console.log(this.currentTeachingPost);
    });
  }
  submitDonation(){
    this.toastr.success('Teaching Post fulfilled successfully' ,'Success');
    this.router.navigate(['/teaching-posts']);
  }
}
