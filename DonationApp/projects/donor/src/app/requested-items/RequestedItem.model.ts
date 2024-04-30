
export class RequestedItem{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public quantity: number,
        public status: string,
        public date: string,
        public location: string,
        public image: string,
        public category: string,
        public userName: string, // who requested the item
        public userContact: string,
    ){}
}
