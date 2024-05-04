import { Injectable } from '@angular/core';
import { MedicalCase } from './medical-case.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalCaseService {
  private medicalCases: MedicalCase[] = [
    new MedicalCase(
      1,
      'John Doe',
      35,
      'Male',
      70,
      'Hospital XYZ',
      '123 Main St',
      'Health Clinic',
      'Cardiology',
      'Sample Area',
      "20/20/2020",
      'Sample Governorate',
      'Heart condition'
    ),
    new MedicalCase(
      2,
      'Jane Smith',
      45,
      'Female',
      60,
      'Hospital ABC',
      '456 Elm St',
      'Medical Center',
      'Oncology',
      'Sample Area',
      "20/20/2020",
      'Sample Governorate',
      'Cancer treatment'
    ),
    new MedicalCase(
      3,
      'Michael Johnson',
      25,
      'Male',
      80,
      'Hospital DEF',
      '789 Oak St',
      'Clinic',
      'Orthopedics',
      'Sample Area',
      "20/20/2020",
      'Sample Governorate',
      'Fracture injury'
    ),
  ];

  constructor() { }

  getMedicalCases(): MedicalCase[] {
    return this.medicalCases.slice();
  }

  getMedicalCaseById(id: number): MedicalCase | undefined {
    return this.medicalCases.find(cas  => cas.id === id);
  }

  addMedicalCase(medicalCase: MedicalCase): void {
    this.medicalCases.push(medicalCase);
  }

  updateMedicalCase(medicalCase: MedicalCase): void {
    const index = this.medicalCases.findIndex(c => c.id === medicalCase.id);
    if (index !== -1) {
      this.medicalCases[index] = medicalCase;
    }
  }

  deleteMedicalCase(id: number): void {
    this.medicalCases = this.medicalCases.filter(cas => cas.id !== id);
  }
}
