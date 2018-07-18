
export class Theater {
    public id: number;
    public name: string;    
    public shows:Array<Object>;

    constructor (id:number, name:string, shows:Array<Object>){
        this.id = id;
        this.name = name;
        this.shows = shows;
    }
}