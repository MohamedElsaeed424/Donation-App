import { Donor, DonorType } from "./donor.model";

class Doctor extends Donor {
  specialty: string;
  proBonoCases: number;
  clinicLocation: ClinicLocationSpecification;

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
    specialty: string,
    proBonoCases: number,
    clinicLocation: ClinicLocationSpecification
  ) {
    super(firstName, lastName,userName, gender, email, phoneNumber, password, address, area, government, type);
    this.specialty = specialty;
    this.proBonoCases = proBonoCases;
    this.clinicLocation = clinicLocation;
  }
}

class ClinicLocationSpecification {
  address: string;
  area: string;
  government: string;
  googleMarker: string;

  constructor(address: string, area: string, government: string, googleMarker: string) {
    this.address = address;
    this.area = area;
    this.government = government;
    this.googleMarker = googleMarker;
  }
}

export { Doctor, ClinicLocationSpecification };
