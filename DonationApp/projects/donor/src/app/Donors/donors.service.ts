import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, using} from 'rxjs';
import { Donor, DonorType } from './models/donor.model';
import {ClinicLocationSpecification, Doctor} from "./models/pro-bonoDoctor.model";
import {Teacher} from "./models/pro-bonoTeacher.model";

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  clinicLocation = new ClinicLocationSpecification("123 Main St", "Downtown", "City", "google_marker_url");
  doctor = new Doctor(
    "John",
    "Doe",
    "donor3",
    "Male",
    "john@example.com",
    "1234567890",
    "13",
    "123 Main St",
    "Downtown",
    "City",
    DonorType.Doctor,
    "Cardiology",
    5,
    this.clinicLocation
  );

  teacher = new Teacher(
    "Alice",
    "Smith",
    "donor2",
    "Female",
    "alice@example.com",
    "9876543210",
    "2",
    "456 Oak St",
    "Suburb",
    "County",
    DonorType.Teacher,
    ["Mathematics", "Science"],
    3,
    30
  );

  donor = new Donor(
    "Bob",
    "Johnson",
    "donor1",
    "Male",
    "bob@example.com",
    "5678901234",
    "1",
    "789 Elm St",
    "Urban",
    "Metropolis",
    DonorType.Donor
  );
  private donors : Donor[] = [this.donor, this.teacher, this.doctor];

  private donorsSubject: BehaviorSubject<Donor[]> = new BehaviorSubject<Donor[]>([]);

  constructor() { }


  addDonor(donor: Donor): void {
    this.donors.push(donor);
    this.donorsSubject.next(this.donors);
  }

  getAllDonors(): Donor[] {
    return this.donors;
  }

  // getAllDonors(): Observable<Donor[]> {
  //   return this.donorsSubject.asObservable();
  // }

  getDonorById(userName: string): Donor | undefined {
    return this.donors.find(donor => donor.userName === userName);
  }

  updateDonor(updatedDonor: Donor , oldusername:string): void {
    const index = this.donors.findIndex(donor => donor.userName === oldusername);
    if (index !== -1) {
      console.log(updatedDonor);
      this.donors[index] = updatedDonor;
      this.donorsSubject.next(this.donors);
    }
  }

  deleteDonor(userName: string): void {
    this.donors = this.donors.filter(donor => donor.userName !== userName);
    this.donorsSubject.next(this.donors);
  }
}
