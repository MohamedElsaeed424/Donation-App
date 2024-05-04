import { RequestedItem } from "../super/RequestedItem.model";

export class Clothes extends RequestedItem {
  type: string;
  age: string;
  gender: string;
  season: string;
  material: string;

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
    type: string,
    age: string,
    gender: string,
    season: string,
    material: string
  ) {
    super(id, name, description, quantity, status, date, location, image, category, userName, userContact);
    this.type = type;
    this.age = age;
    this.gender = gender;
    this.season = season;
    this.material = material;
  }
}
