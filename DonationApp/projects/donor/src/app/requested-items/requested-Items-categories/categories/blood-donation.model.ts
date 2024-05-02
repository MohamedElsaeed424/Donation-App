import {RequestedItem} from "../super/RequestedItem.model";


export class BloodDonation extends RequestedItem {
  patientName: string;
  bloodType: string; // Including RH type
  hospitalName: string;
  hospitalArea: string;
  governorate: string;
  hospitalAddress: string;

  constructor(
    patientName: string,
    bloodType: string,
    hospitalName: string,
    hospitalArea: string,
    governorate: string,
    hospitalAddress: string,
    id: number,
    name: string,
    description: string,
    quantity: number,
    status: string,
    date: string,
    location: string,
    image: string,
    category: string,
    userName: string,
    userContact: string,
  ) {
    super(id, name, description, quantity, status, date, location, image, category, userName, userContact);
    this.patientName = patientName;
    this.bloodType = bloodType;
    this.hospitalName = hospitalName;
    this.hospitalArea = hospitalArea;
    this.governorate = governorate;
    this.hospitalAddress = hospitalAddress;
  }
}
