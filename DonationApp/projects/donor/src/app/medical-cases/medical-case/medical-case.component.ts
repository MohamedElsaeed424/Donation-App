import { Component, Input } from '@angular/core';
import { MedicalCase } from "../medical-case.model";

@Component({
  selector: 'app-medical-case',
  templateUrl: './medical-case.component.html',
  styleUrls: ['./medical-case.component.css']
})
export class MedicalCaseComponent {
  @Input() currentMedicalCase: MedicalCase;
  @Input() currentMedicalCaseId: number;

  constructor() {
    console.log('MedicalCaseComponent constructor');
  }
}
