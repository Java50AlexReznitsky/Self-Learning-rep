export function getRandomNumbers(min: number, max: number): number {
   return min + Math.trunc(Math.random() * (max - min))
}
//                               getColors
export function getRandomElement(array: any[]): any {
    //     colors[]               0,  8
    return array[getRandomNumbers(0, array.length)]
}
