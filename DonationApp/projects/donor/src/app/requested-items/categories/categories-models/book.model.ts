import { RequestedItem } from "../super/RequestedItem.model";

export class Book extends RequestedItem {
  author: string;
  language: string;
  edition: string;
  summary: string;

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
    author: string,
    language: string,
    edition: string,
    summary: string
  ) {
    super(id, name, description, quantity, status, date, location, image, category, userName, userContact);
    this.author = author;
    this.language = language;
    this.edition = edition;
    this.summary = summary;
  }
}
