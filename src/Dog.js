"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Cat_1 = require("./Cat");
class Dog extends Cat_1.Cat {
    // constructor(private name: string) {
    //     super(`${name}`)
    // }
    // animalName(): string {
    //     return this.name;
    // }
    eat() {
        return "bone";
    }
    makeSound() {
        return "woof";
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map