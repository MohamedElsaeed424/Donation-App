export class Donor {
  firstName: string;
  lastName: string;
  name : string ;
  gender: string;
  email: string;
  phoneNumber: string;
  password: string;
  address:string ;
  area:string;
  government:string;
  type:DonorType ;
  constructor(firstName: string, lastName: string, gender: string, email: string, phoneNumber: string, password: string, address:string,area:string,government:string , type:DonorType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = firstName + " " + lastName
    this.gender = gender;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.address = address;
    this.area = area;
    this.government = government ;
    this.type = type;
  }
}

export enum DonorType{
  doctor ,
  teacher
}
