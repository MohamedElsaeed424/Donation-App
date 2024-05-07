import {Component, OnInit} from '@angular/core';
import {OrganizationSubmissions} from "../OrganiztionSubmission.model";
import {OrganizationSubmissionService} from "../OrganizationSubmission.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-OrganizationSubmissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {
  OrganizationSubmissions: OrganizationSubmissions[];

  constructor(private OrganizationSubmissionsService: OrganizationSubmissionService,
              private route: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.OrganizationSubmissions = this.OrganizationSubmissionsService.getPosts();
  }

  dele

  rejectSubmission(i: number) {
    this.OrganizationSubmissionsService.deletePost(i)
  }


  ViewSubmission(i: number) {
    this.route.navigate(['/posts/allPosts/details', i], {queryParams: {username: this.authService.username}})
  }

  editPost(i:number){
    this.route.navigate(['/posts/allPosts/edit',i],{queryParams: {username: this.authService.username}})
  }

}
