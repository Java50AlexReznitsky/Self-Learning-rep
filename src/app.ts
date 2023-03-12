//to deploy watch-mode:
//deploy Git Bash
//in Git Bash type: tsc --watch
//-------------------------------------------------------------
import { Animal } from "./Animal";
import { animalsEatMakeSound } from "./animalEatMakeSound";
import { Cat } from "./Cat";
import { Dog } from "./Dog";

const boba:Animal = new Cat()
const tuzik:Cat = new Dog()
// animalsEatMakeSound(boba);
animalsEatMakeSound(boba);



