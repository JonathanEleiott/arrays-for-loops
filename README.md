# Arrays - multiple values in a single variable

- no need to store 20 variables for 20 students
- can hold other data types
- can hold a combination of data types

## Maniipulation - Array methods

- push -> add to the end of an array
- pop -> removes the last item in an array
- shift -> removes the first item in an array
- unshift -> adds to the beginning of array
- slice -> grab items from an array without modifying it
- splice -> remove, replace, and/or add new elements to an array

## Accessing

- indexes start at 0
- square brackets with index number between the brackets
- using the length property - 1 will return the last index number

## Length Property - returns how many items are in an array

# Loops - allows us to do something repeatedly

- traverse over a large data set easily
- repeat an action over and over again
- do something until a certain condition is met
- various types of loops

## for...loop

- 3 parts -> separated by semicolons -> loops a specific amount of times
  - Initialization -> happens once before the loop starts
  - Condition -> keeps the loop going as long as this is true
  - Afterthought -> executed each time the code block finishes

## while -> loops while a specific condition is true

- not as safe as for loops
- 1 part
  - Condition -> keeps the loop going as long as this is true

# Scope - which variables can be used here

- Children can access variables of their parents
- Parents cannot access variables of their children

- 4 types
  - Global -> available to everything
  - Module
  - Functional -> available within the function
  - Block -> available within a code block (if statements, for loops, etc.)