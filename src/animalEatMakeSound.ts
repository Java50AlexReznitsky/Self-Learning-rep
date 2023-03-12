import { Animal } from "./Animal";

export function animalsEatMakeSound(animal: Animal) {
    console.log(`likes to eat ${animal.eat()} and say ${animal.makeSound()}`);
}