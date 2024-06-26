import {RequestedItem} from "./categories/super/RequestedItem.model";

import {Injectable} from "@angular/core";
import {School, SchoolBook, StationaryItem} from "./categories/categories-models/school.model";
import {MedicalSupply, MedicalType} from "./categories/categories-models/medical-supplies.model";
import {Food, FoodCategory} from "./categories/categories-models/food.model";
import {ItemCategory} from "./categories/categories-models/all-categories.enum";
import {Book} from "./categories/categories-models/book.model";
import {Clothes} from "./categories/categories-models/clothes.model";
import {Toy} from "./categories/categories-models/toy.model";

@Injectable({providedIn: 'root'})
export class RequestedItemsService{
   laptop: RequestedItem = new RequestedItem(1, 'Laptop', 'I need a laptop for my online classes', 1, 'Requested', '2021-09-20', 'Lahore', 'assets/laptop.jpg', 'Electronics', 'Ali', '01020069006');
   book: Book = new Book(2, 'Books', 'I need books for my studies', 5, 'Requested', '2021-09-21', 'Karachi', 'assets/books.jpg', ItemCategory.Books, 'Ahmed', '01020069006', 'Sample Author', 'English', 'Sample Edition', 'Sample Summary');
   clothes: Clothes = new Clothes(3, 'Clothes', 'I need clothes for my family', 10, 'Requested', '2021-09-22', 'Islamabad', 'assets/clothes.jpg', ItemCategory.Clothes, 'Sara', '01020069006', 'Sample Type', 'Sample Age', 'Sample Gender', 'Sample Season', 'Sample Material');
   furniture: RequestedItem = new RequestedItem(4, 'Furniture', 'I need furniture for my home', 1, 'Requested', '2021-09-23', 'Lahore', 'assets/furniture.jpg', 'Furniture', 'Ali', '01020069006');
   shoes: RequestedItem = new RequestedItem(5, 'Shoes', 'I need shoes for my family', 5, 'Requested', '2021-09-24', 'Karachi', 'assets/shoes.jpg', "Shoes", 'Ahmed', '01020069006');
   mobile: RequestedItem = new RequestedItem(6, 'Mobile', 'I need a mobile for my online classes', 1, 'Requested', '2021-09-25', 'Islamabad', 'assets/mobile.jpg', 'Electronics', 'Sara', '01020069006');
    schoolBooks: SchoolBook[] = [
      { title: 'Mathematics Textbook', grade: 'Grade 5', subject: 'Mathematics', year: 2022 },
      { title: 'Science Workbook', grade: 'Grade 5', subject: 'Science', year: 2022 }
    ];
    stationaryItems: StationaryItem[] = [
      { type: 'Pencil', amountRequested: 10 },
      { type: 'Notebook', amountRequested: 5 }
    ];

   additionalSamples = [
    new Food(7, 'Food', 'I need food for my family', 10, 'Requested', '2021-09-26', 'Lahore', 'assets/food.jpg', 'Food', 'Mohamed', 'Sample User', FoodCategory.CannedFoods, "20"),
     new MedicalSupply(8,
       'Medical Supply',
       'I need medical supplies',
       2,
       'Requested',
       '2021-09-27',
       'Karachi',
       'assets/medical-supplies.jpg',
       ItemCategory.MedicalSupplies, // category
       'Sample Medical Use',
       'Sample User',
       MedicalType.Medication,
        'Medical use',
     ),
     new MedicalSupply(12,
       'Medical Supply',
       'I need medical supplies',
       2,
       'Requested',
       '2021-09-27',
       'Karachi',
       'assets/medical-supplies.jpg',
       ItemCategory.MedicalSupplies, // category
       'Sample Medical Use',
       'Sample User',
       MedicalType.MedicalEquipment,
       'moot',
     ),
    new School(
      9,
      'School Supplies',
      'I need school supplies',
      5,
      'Requested',
      '2021-09-28',
      'Islamabad',
      'assets/school-supplies.jpg',
      ItemCategory.SchoolSupplies,
      'Sample User',
      '01020069006',
      this.schoolBooks,
      this.stationaryItems
    ),
    new Toy(10, 'Toy', 'I need a toy for my child', 1, 'Requested', '2021-09-29', 'Lahore', 'assets/toy.jpg', ItemCategory.Toys, 'Mohamed', '01020069006', 'good', '3', 'male'),
     new Toy(11, 'Toy', 'I need a toy for my child', 1, 'Requested', '2021-09-29', 'Lahore', 'assets/toy.jpg', ItemCategory.Toys, 'habiba ', '01020069006', 'bad', '20', 'female')

   ];

// Combine all samples into the requestedItems array
   requestedItems: RequestedItem[] = [this.laptop, this.book, this.clothes, this.furniture, this.shoes, this.mobile, ...this.additionalSamples];

    getRequestedItems(){
        return this.requestedItems;
    }

    getRequestedItemByItemId(id: number){
        return this.requestedItems.find(item => item.id === id);
    }
    getRequestedItem(id: number){
      return this.requestedItems[id];
    }

    filterRequestedItemsByCategory(category: string){
        return this.requestedItems
          .filter(item =>
            item.category.toLowerCase().includes(category.toLowerCase())
          );
    }

    addRequestedItem(item: RequestedItem){
        this.requestedItems.push(item);
    }

    updateRequestedItem(item: RequestedItem){
        const index = this.requestedItems.findIndex(i => i.id === item.id);
        this.requestedItems[index] = item;
    }

    deleteRequestedItem(id: number){
        this.requestedItems = this.requestedItems.filter(item => item.id !== id);
    }
}
