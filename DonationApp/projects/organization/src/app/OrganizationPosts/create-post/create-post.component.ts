import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {OrganizationSubmissionService} from "../OrganizationSubmission.service";
import {OrganizationSubmissions} from "../OrganiztionSubmission.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnInit{
  postForm:FormGroup
  constructor(private authService:AuthService,
              private fb:FormBuilder,
              private OrganizationSubmissonService:OrganizationSubmissionService,
              private toaster:ToastrService) {}

  ngOnInit(){
    this.postForm = this.fb.group({
      category:['', Validators.required],
      details:['', Validators.required]
    })
  }


  submitForm (){
    const OrganizationSubmission= new OrganizationSubmissions(
      this.authService.currentOrganization,
      this.postForm.get('category').value,
      this.postForm.get('details').value) ;
    this.toaster.success('post added successfully')
    this.OrganizationSubmissonService.addPost(OrganizationSubmission)
  }
}
