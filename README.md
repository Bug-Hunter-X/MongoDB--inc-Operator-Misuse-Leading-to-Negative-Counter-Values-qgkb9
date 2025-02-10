# MongoDB $inc Operator Misuse
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is designed to increment a numerical field, but it can lead to unexpected negative values if not handled correctly, especially when dealing with situations where the initial value is 0 and you try to decrement further.

## Bug Description
The `bug.js` file contains code that incorrectly utilizes the `$inc` operator with a negative value, potentially causing unexpected behavior.

## Solution
The `bugSolution.js` file demonstrates the correct approach, offering a robust solution to avoid negative counter values.  It adds a conditional check to prevent decrementing below 0. 
