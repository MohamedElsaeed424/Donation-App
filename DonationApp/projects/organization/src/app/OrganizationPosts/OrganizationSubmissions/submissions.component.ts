import {Component, OnInit} from '@angular/core';
import {OrganizationSubmissions} from "../OrganiztionSubmission.model";
import {OrganizationSubmissionService} from "../OrganizationSubmission.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-OrganizationSubmissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {
  OrganizationSubmissions: OrganizationSubmissions[];

  constructor(private OrganizationSubmissionsService: OrganizationSubmissionService,
              private route: Router,
              private authService: AuthService,
              private toaster: ToastrService) {
  }

  ngOnInit() {
    this.OrganizationSubmissions = this.OrganizationSubmissionsService.getPosts();
  }

  dele

  rejectSubmission(i: number) {
    this.toaster.success('submission deleted successfully.');
    this.OrganizationSubmissionsService.deletePost(i)
  }


  ViewSubmission(i: number) {
    this.route.navigate(['/posts/allPosts/details', i], {queryParams: {username: this.authService.username}})
  }

  editPost(i: number) {
    this.route.navigate(['/posts/allPosts/edit', i], {queryParams: {username: this.authService.username}})
  }

  MedicalOrTeachingActivity(i: number) {
    const itemCategory = this.OrganizationSubmissions[i].itemCategory;
    return itemCategory === 'medical supplies' || itemCategory === 'school supplies' || itemCategory === 'blood donation';
  }

  NavigateToDonors(i: number) {
    this.route.navigate(['/posts/allPosts/Fulfilled-Donors', i], {queryParams: {username: this.authService.username}})
  }

}
