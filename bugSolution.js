function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined explicitly
  }
  return x.length; 
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
//Alternative using optional chaining
function foo2(x){
  return x?.length || 0;
}
console.log(foo2([1,2,3])) // Output: 3
console.log(foo2(null)); //Output:0
console.log(foo2(undefined)); //Output: 0