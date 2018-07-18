
export class Movie {
    public id: number;
    public name: string;    
    public imagePath:string;

    constructor (id:number, name:string, imgPath:string){
        this.id = id;
        this.name = name;
        this.imagePath = imgPath;
    }
}
