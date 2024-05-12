import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  isAnimating: boolean = false;
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
  @Output() animationTriggered: EventEmitter<any> = new EventEmitter();

  triggerAnimation() {
    if(this.postForm.valid){
      this.isAnimating = true;
      if (this.isAnimating) {
        // Reset animation when it ends
        setTimeout(() => this.isAnimating = false, 1300);
      }
      this.animationTriggered.emit();
    }

  }

  submitForm (){
    const OrganizationSubmission= new OrganizationSubmissions(
      this.authService.currentOrganization,
      this.postForm.get('category').value,
      this.postForm.get('details').value) ;
    if(this.postForm.valid){
      this.OrganizationSubmissonService.addPost(OrganizationSubmission) ;
      this.toaster.success('Post submitted successfully' ,"Success")
    }else{
      this.toaster.error('Please fill all the fields' ,"Error")
    }
  }
}
