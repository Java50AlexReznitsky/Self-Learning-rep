import { Cat } from "./Cat";
export class Dog extends Cat {
    // constructor(private name: string) {
    //     super(`${name}`)
    // }
    // animalName(): string {
    //     return this.name;
    // }
    eat(): string {
        return "bone"
    }
    makeSound(): string {
        return "woof"
    }
    
}