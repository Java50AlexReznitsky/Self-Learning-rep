import { Animal } from "./Animal";

export class Cat implements Animal {
    // constructor(private name: string) {

    // }
    eat(): string {
        return "milk";
    }
    makeSound(): string {
        return "meaow";
    }
    sleep(){
        return "is Sleeping"
    }
    // animalName(): string {
    //     return this.name;
    // }
}
