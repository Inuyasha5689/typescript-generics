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