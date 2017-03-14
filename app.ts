/**
 * Created by dasco on 3/9/2017.
 */
// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Drake"));
console.log(echo(20));      //.length would not work, but typescript would not know better
console.log(echo({name: "Drake",age: 20}));

// Better Genereic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Drake").length);
console.log(betterEcho<number>(20));      //typescript is now aware of the type and .length creates an error
console.log(betterEcho({name: "Drake",age: 20}));

// Built in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);  //Array is a generic type by default

// Array
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);