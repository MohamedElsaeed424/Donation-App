import {Component, OnInit} from '@angular/core';
import {OrganizationSubmissions} from "../../OrganiztionSubmission.model";
import {ActivatedRoute} from "@angular/router";
import {OrganizationSubmissionService} from "../../OrganizationSubmission.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  id: number
  OrganizationSubmission: OrganizationSubmissions
  postDetails: FormGroup

  constructor(private route: ActivatedRoute,
              private OrganizationSubmissionService: OrganizationSubmissionService,
              private fb: FormBuilder,
              private authService: AuthService,) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.OrganizationSubmission = this.OrganizationSubmissionService.getPostById(this.id);
    })
    this.postDetails = this.fb.group({
      category: ['', Validators.required],
      details: ['', Validators.required]
    })
    this.populateFromOldValues()
  }

  populateFromOldValues(){
    this.postDetails.patchValue({
      category: this.OrganizationSubmission.itemCategory,
      details: this.OrganizationSubmission.details
    })
  }

  submitForm (){
    const OrganizationSubmission= new OrganizationSubmissions(
      this.authService.currentOrganization,
      this.postDetails.get('category').value,
      this.postDetails.get('details').value) ;
    this.OrganizationSubmissionService.editPost(this.id,OrganizationSubmission)
  }

}
