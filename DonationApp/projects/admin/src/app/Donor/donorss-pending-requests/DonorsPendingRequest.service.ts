import {Injectable} from "@angular/core";
import {Donor, DonorType} from "../Donor.model";
import {RegisteredDonorService} from "../registered-donors/RegisteredDonor.service";

@Injectable()
export class DonorsPendingRequestService {
  private donors: Donor[] = [
    new Donor('David', 'Smith', 'Male', 'david@example.com', '5551234567', 'password123', '123 Street', 'Area 1', 'Government 1', DonorType.doctor),
    new Donor('Sarah', 'Johnson', 'Female', 'sarah@example.com', '4449876543', 'password456', '456 Avenue', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Ryan', 'Brown', 'Male', 'ryan@example.com', '3334567890', 'password789', '789 Road', 'Area 3', 'Government 3', DonorType.teacher),
    new Donor('Jessica', 'Davis', 'Female', 'jessica@example.com', '2227894561', 'passwordabc', '987 Boulevard', 'Area 1', 'Government 1', DonorType.teacher),
    new Donor('Matthew', 'Wilson', 'Male', 'matthew@example.com', '1116547890', 'passworddef', '654 Lane', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Emily', 'Thompson', 'Female', 'emily@example.com', '9991234567', 'passwordghi', '321 Drive', 'Area 3', 'Government 3', DonorType.doctor),
    new Donor('Daniel', 'Anderson', 'Male', 'daniel@example.com', '8889876543', 'passwordjkl', '1234 Court', 'Area 1', 'Government 1', DonorType.teacher),
    new Donor('Sophia', 'Garcia', 'Female', 'sophia@example.com', '7774567890', 'passwordmno', '567 Way', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Alexander', 'Taylor', 'Male', 'alexander@example.com', '6667891234', 'passwordpqr', '890 Loop', 'Area 3', 'Government 3', DonorType.teacher),
    new Donor('Olivia', 'Thomas', 'Female', 'olivia@example.com', '5559876543', 'passwordstu', '765 Place', 'Area 1', 'Government 1', DonorType.teacher),
    new Donor('Ethan', 'Hernandez', 'Male', 'ethan@example.com', '4441234567', 'passwordvwx', '432 Way', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Isabella', 'Lopez', 'Female', 'isabella@example.com', '3336547890', 'passwordyz1', '876 Court', 'Area 3', 'Government 3', DonorType.doctor),
    new Donor('Benjamin', 'Perez', 'Male', 'benjamin@example.com', '2227891234', 'password234', '543 Avenue', 'Area 1', 'Government 1', DonorType.doctor),
    new Donor('Ava', 'Sanchez', 'Female', 'ava@example.com', '1116547890', 'password567', '901 Drive', 'Area 2', 'Government 2', DonorType.teacher),
    new Donor('William', 'Rivera', 'Male', 'william@example.com', '9991234567', 'password890', '234 Road', 'Area 3', 'Government 3', DonorType.teacher),
    new Donor('Samantha', 'Morales', 'Female', 'samantha@example.com', '8889876543', 'password123', '123 Street', 'Area 1', 'Government 1', DonorType.doctor),
    new Donor('Joseph', 'Perez', 'Male', 'joseph@example.com', '7774567890', 'password456', '456 Avenue', 'Area 2', 'Government 2', DonorType.doctor),
    new Donor('Abigail', 'Gonzalez', 'Female', 'abigail@example.com', '6667891234', 'password789', '789 Road', 'Area 3', 'Government 3', DonorType.teacher),
    new Donor('Joshua', 'Torres', 'Male', 'joshua@example.com', '5559876543', 'passwordabc', '987 Boulevard', 'Area 1', 'Government 1', DonorType.teacher)]

  constructor(private RegisteredDonors:RegisteredDonorService) {
  }

  //method to add donor
  addDonor(donor:Donor){
    this.donors.push(donor) ;
  }


  //method to delete donor
  deleteDonor(index:number){
    this.donors.splice(index, 1);
  }

  //method to get all donors
  getDonors(){
    return this.donors ;
  }
}
