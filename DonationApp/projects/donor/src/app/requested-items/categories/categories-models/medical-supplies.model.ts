import { RequestedItem } from "../super/RequestedItem.model";

export class MedicalSupply extends RequestedItem {
  type: MedicalType; // Medical devices, medical equipment, medication, etc.
  medicalUse: string; // For what purpose the medical supply is needed
  constructor(
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
    type: MedicalType,
    medicalUse: string
  ) {
    super(id, name, description, quantity, status, date, location, image, category, userName, userContact);
    this.type = type;
    this.medicalUse = medicalUse;
  }
}

export enum MedicalType {
  MedicalDevices = 'Medical Devices',
  MedicalEquipment = 'Medical Equipment',
  Medication = 'Medication',
}
