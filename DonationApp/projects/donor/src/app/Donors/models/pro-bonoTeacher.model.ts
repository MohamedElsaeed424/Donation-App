import { Donor, DonorType } from "./donor.model";

class Teacher extends Donor {
  subjects: string[];
  proBonoClasses: number;
  proBonoStudents: number;

  constructor(
    firstName: string,
    lastName: string,
    userName: string,
    gender: string,
    email: string,
    phoneNumber: string,
    password: string,
    address: string,
    area: string,
    government: string,
    type: DonorType,
    subjects: string[],
    proBonoClasses: number,
    proBonostudents: number
  ) {
    super(firstName, lastName,userName, gender, email, phoneNumber, password, address, area, government, type);
    this.subjects = subjects;
    this.proBonoClasses = proBonoClasses;
    this.proBonoStudents = proBonostudents;
  }
}

export { Teacher };
