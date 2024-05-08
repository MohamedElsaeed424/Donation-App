import{Donor,DonorType} from "../models/Donor.model";
import {Doctor} from "../../../../../../../donor/src/app/Donors/models/pro-bonoDoctor.model";

export class RegisteredDonorService {
  private donors: Donor[] = [
    new Donor('John', 'Doe', 'Male', 'john@example.com', '1234567890', 'password123', '123 Street', 'Area 1', 'Government 1', DonorType.doctor),
    new Donor('Jane', 'Doe', 'Female', 'jane@example.com', '9876543210', 'password456', '456 Avenue', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Alice', 'Smith', 'Female', 'alice@example.com', '5551234567', 'password789', '789 Road', 'Area 3', 'Government 3', DonorType.teacher),
    new Donor('Bob', 'Johnson', 'Male', 'bob@example.com', '4449876543', 'passwordabc', '987 Boulevard', 'Area 1', 'Government 1', DonorType.teacher),
    new Donor('Emma', 'Brown', 'Female', 'emma@example.com', '3334567890', 'passworddef', '654 Lane', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('James', 'Wilson', 'Male', 'james@example.com', '2227894561', 'passwordghi', '321 Drive', 'Area 3', 'Government 3', DonorType.doctor),
    new Donor('Sophia', 'Martinez', 'Female', 'sophia@example.com', '1116547890', 'passwordjkl', '1234 Court', 'Area 1', 'Government 1', DonorType.teacher),
    new Donor('William', 'Anderson', 'Male', 'william@example.com', '9991234567', 'passwordmno', '567 Way', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Olivia', 'Garcia', 'Female', 'olivia@example.com', '8889876543', 'passwordpqr', '890 Loop', 'Area 3', 'Government 3', DonorType.teacher),
    new Donor('Michael', 'Taylor', 'Male', 'michael@example.com', '7774567890', 'passwordstu', '765 Place', 'Area 1', 'Government 1', DonorType.doctor),
    new Donor('Emily', 'Thomas', 'Female', 'emily@example.com', '6667891234', 'passwordvwx', '432 Way', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Alexander', 'Hernandez', 'Male', 'alexander@example.com', '5559876543', 'passwordyz1', '876 Court', 'Area 3', 'Government 3', DonorType.doctor),
    new Donor('Ella', 'Lopez', 'Female', 'ella@example.com', '4441234567', 'password234', '543 Avenue', 'Area 1', 'Government 1', DonorType.doctor),
    new Donor('Daniel', 'Perez', 'Male', 'daniel@example.com', '3336547890', 'password567', '901 Drive', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Mia', 'Sanchez', 'Female', 'mia@example.com', '2227891234', 'password890', '234 Road', 'Area 3', 'Government 3', DonorType.teacher),
  ];

  getRandomDonor(): Donor {
    // Generate a random index within the range of the donors array
    const randomIndex = Math.floor(Math.random() * this.donors.length);
    // Retrieve the donor object at the random index
    return this.donors[randomIndex];
  }

  //method to add donor
  addDonor(donor: Donor) {
    this.donors.push(donor);
  }

  //method to delete donor
  deleteDonor(index: number) {
    this.donors.splice(index, 1);
  }

  //method to get all donors
  getDonors() {
    return this.donors;
  }

  getDonorByIndex(index: number) {
    return this.donors[index];
  }

  getRandomTeacherDonors(): Donor[] {
    const teacherDonors = this.donors.filter(donor => donor.type === DonorType.teacher);
    const numDonors = Math.floor(Math.random() * teacherDonors.length) + 1; // Generate a random number between 1 and the length of the filtered array
    const randomDonors: Donor[] = [];
    for (let i = 0; i < numDonors; i++) {
      const randomIndex = Math.floor(Math.random() * teacherDonors.length);
      randomDonors.push(teacherDonors[randomIndex]);
    }
    return randomDonors;
  }


  getRandomDoctorsDonors(): Donor[] {
    const DoctorDonors = this.donors.filter(donor => donor.type === DonorType.teacher);
    const numDonors = Math.floor(Math.random() * DoctorDonors.length) + 1; // Generate a random number between 1 and the length of the filtered array
    const randomDonors: Donor[] = [];
    for (let i = 0; i < numDonors; i++) {
      const randomIndex = Math.floor(Math.random() * DoctorDonors.length);
      randomDonors.push(DoctorDonors[randomIndex]);
    }
    return randomDonors;
  }

  findDonorByName(name: string): Donor {
    return  this.donors.find((donor) => donor.name === name);
  }

  findDonorIndexByName(name: string): number {
    const donorIndex = this.donors.findIndex(donor => `${donor.firstName} ${donor.lastName}` === name);
    return donorIndex;
  }



}
