export class OrganizationRepresentitve {
  public firstName: string;
  public lastName: string;
  public gender: string;
  public email: string;
  public password: string;
  public contactNumber: number;
  constructor(firstName: string, lastName: string, gender: string, email: string, password: string , contactNumber:number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email =email ;
    this.password = password;
    this.contactNumber = contactNumber ;
  }
}
