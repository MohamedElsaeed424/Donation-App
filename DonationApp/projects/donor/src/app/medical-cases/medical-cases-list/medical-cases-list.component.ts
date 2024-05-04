import {Component, OnInit} from '@angular/core';
import {MedicalCaseService} from "../medical-cases.service";
import {MedicalCase} from "../medical-case.model";

@Component({
  selector: 'app-medical-cases-list',
  templateUrl: './medical-cases-list.component.html',
  styleUrl: './medical-cases-list.component.css'
})
export class MedicalCasesListComponent implements OnInit{
  medicalCases: MedicalCase[] ;
  searchQuery1: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';
  searchQuery4: string = '';
  constructor(private medicalCasesService: MedicalCaseService) { }
  ngOnInit(): void {
    this.medicalCases = this.medicalCasesService.getMedicalCases();
  }
}
