export class Family {
    name: string;
    age: number;
    email: string;
    bestfriend: boolean;

constructor(n:string = '', a:number = 0, e:string = '', 
            b:boolean = false) {
    this.name = n;
    this.age = a;
    this.email = e;
    this.bestfriend = b;
    }

about(): string {
    return "Family: name = "+this.name+", age = "+this.age+
            ", email = "+this.email+", bestfriend? = "+this.bestfriend; 

    }

}