import {RequestedItem} from "./RequestedItem.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class RequestedItemsService{
    requestedItems: RequestedItem[] = [
        new RequestedItem(1, 'Laptop', 'I need a laptop for my online classes', 1, 'Requested', '2021-09-20', 'Lahore', 'assets/laptop.jpg', 'Electronics', 'Ali','01020069006'),
        new RequestedItem(2, 'Books', 'I need books for my studies', 5, 'Requested', '2021-09-21', 'Karachi', 'assets/books.jpg', 'Books', 'Ahmed' ,'01020069006'),
        new RequestedItem(3, 'Clothes', 'I need clothes for my family', 10, 'Requested', '2021-09-22', 'Islamabad', 'assets/clothes.jpg', 'Clothes', 'Sara' ,'01020069006'),
        new RequestedItem(4, 'Furniture', 'I need furniture for my home', 1, 'Requested', '2021-09-23', 'Lahore', 'assets/furniture.jpg', 'Furniture', 'Ali' ,'01020069006'),
        new RequestedItem(5, 'Shoes', 'I need shoes for my family', 5, 'Requested', '2021-09-24', 'Karachi', 'assets/shoes.jpg', 'Shoes', 'Ahmed' ,'01020069006'),
        new RequestedItem(6, 'Mobile', 'I need a mobile for my online classes', 1, 'Requested', '2021-09-25', 'Islamabad', 'assets/mobile.jpg', 'Electronics', 'Sara','01020069006'),
    ];


    getRequestedItems(){
        return this.requestedItems;
    }

    getRequestedItemByItemId(id: number){
        return this.requestedItems.find(item => item.id === id);
    }
    getRequestedItem(id: number){
      return this.requestedItems[id];
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
