export class User {  
    name: string;
    cel: string;

    constructor(name: string, cel:string) {
        this.name = name
        this.cel = cel
    }

    save() {
        // HTTP request would go here
        console.log(this.name, this.cel);
    }
}
