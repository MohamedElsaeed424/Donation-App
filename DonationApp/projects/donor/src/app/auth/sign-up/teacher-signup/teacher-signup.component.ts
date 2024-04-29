import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrl: './teacher-signup.component.css'
})
export class TeacherSignupComponent  implements OnInit{
  @Output() formSubmit = new EventEmitter<any>();
  teacherTeachingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createTeacherTeachingForm();
  }

  createTeacherTeachingForm(): void {
    this.teacherTeachingForm = this.fb.group({
      subjects: ['', Validators.required],
      proBonoClasses: ['', [Validators.min(0)]],
      proBonoStudents: ['', [Validators.min(0)]],
    });
  }

  submitTeacherTeachingInfo(): void {
    if (this.teacherTeachingForm.valid) {
      this.formSubmit.emit(this.teacherTeachingForm.value);
    } else {
      // Handle form validation errors
      this.validateAllFormFields(this.teacherTeachingForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    // Validation logic
  }
}

