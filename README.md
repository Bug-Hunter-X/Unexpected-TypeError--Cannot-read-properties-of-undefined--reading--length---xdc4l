# JavaScript TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: a `TypeError` thrown when trying to access the `length` property of an undefined or null value.

The `bug.js` file contains code that is prone to this error, while `bugSolution.js` offers a robust solution.

**Problem:** JavaScript's dynamic typing can lead to unexpected errors. When a variable is null or undefined and the code attempts to access the `length` property of that variable (e.g. an array or string's length), this results in the `TypeError`. 

**Solution:** Always check for null or undefined values before attempting to access their properties using optional chaining or other null-check mechanisms. The solution provided in `bugSolution.js` shows how to safely handle this error.
