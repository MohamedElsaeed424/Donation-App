import { RequestedItem } from "../super/RequestedItem.model";
import { Book } from "./book.model";



export class School extends RequestedItem {
  schoolBooks: SchoolBook[];
  stationaryItems: StationaryItem[];

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
    schoolBooks: SchoolBook[],
    stationaryItems: StationaryItem[]
  ) {
    super(id, name, description, quantity, status, date, location, image, category, userName, userContact);
    this.schoolBooks = schoolBooks;
    this.stationaryItems = stationaryItems;
  }
}

export interface StationaryItem {
  type: string;
  amountRequested: number;
}

export interface SchoolBook {
  title: string;
  grade: string;
  subject: string;
  year: number;
}
