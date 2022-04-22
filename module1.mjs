// example for concept of js
// Named Export
// Default Export

import uiss, {b, c, d} from './module2.mjs'
// in the curly bracess it is name export, and direct we can give any name to it
console.log(uiss);  // kuch bhi naam sai pukaro ye chalega because this is default
// this is default export

console.log(b);
console.log(c);
console.log(d);
// console.log(d1);
// we should give the correct name otherwise we will getting the error because we are using the named export
