export class MedicalCase {
  constructor(
    public id: number,
    public patientName: string,
    public age: number,
    public gender: string,
    public weight: number,
    public location: string,
    public address: string,
    public organizationName: string,
    public medicalSpecialty: string,
    public area: string,
    public date:string,
    public governorate: string,
    public description: string
  ) {}
}
