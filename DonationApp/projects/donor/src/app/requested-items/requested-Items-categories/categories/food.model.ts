import { RequestedItem } from "../super/RequestedItem.model";

export class Food extends RequestedItem {
  foodCategory: FoodCategory; // Fruits, vegetables, canned foods, etc.
  quantityRequired: string; // Quantity in KG or amount

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
    foodCategory: FoodCategory,
    quantityRequired: string
  ) {
    super(id, name, description, quantity, status, date, location, image, category, userName, userContact);
    this.foodCategory = foodCategory;
    this.quantityRequired = quantityRequired;
  }
}

export enum FoodCategory {
  FruitsAndVegetables = 'Fruits and Vegetables',
  CannedFoods = 'Canned Foods',
  FreshMeals = 'Fresh Meals',
  BakedGoods = 'Baked Goods',
}
