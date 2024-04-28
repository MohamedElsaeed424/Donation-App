import {RequestedItem} from "./RequestedItem.model";


export class RequestedItemsService{
    requestedItems: RequestedItem[] = [
        new RequestedItem(1, 'Laptop', 'I need a laptop for my online classes', 1, 'Requested', '2021-09-20', 'Lahore', 'assets/images/laptop.jpg', 'Electronics', 'Ali'),
        new RequestedItem(2, 'Books', 'I need books for my studies', 5, 'Requested', '2021-09-21', 'Karachi', 'assets/images/books.jpg', 'Books', 'Ahmed'),
        new RequestedItem(3, 'Clothes', 'I need clothes for my family', 10, 'Requested', '2021-09-22', 'Islamabad', 'assets/images/clothes.jpg', 'Clothes', 'Sara'),
        new RequestedItem(4, 'Furniture', 'I need furniture for my home', 1, 'Requested', '2021-09-23', 'Lahore', 'assets/images/furniture.jpg', 'Furniture', 'Ali'),
        new RequestedItem(5, 'Shoes', 'I need shoes for my family', 5, 'Requested', '2021-09-24', 'Karachi', 'assets/images/shoes.jpg', 'Shoes', 'Ahmed'),
        new RequestedItem(6, 'Mobile', 'I need a mobile for my online classes', 1, 'Requested', '2021-09-25', 'Islamabad', 'assets/images/mobile.jpg', 'Electronics', 'Sara'),
    ];


    getRequestedItems(){
        return this.requestedItems;
    }

    getRequestedItem(id: number){
        return this.requestedItems.find(item => item.id === id);
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
