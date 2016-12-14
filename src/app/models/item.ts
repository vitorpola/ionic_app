export class Item {  
    id:number
    name: string;
    price: number;

    constructor(itemInfo:any    ) {
        this.id = itemInfo.id
        this.name = itemInfo.name
        this.price = itemInfo.price
    }

    save() {
        // HTTP request would go here
        console.log(this.id, this.name, this.price);
    }
}
