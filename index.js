// This toned down text is a 'comment'. JavaScript knows it's a comment
// if it starts with '//', OR if you want to comment multiple lines...

/*
You
can
do
this.
*/

/*
Leaving comments are important when writing code
as it makes it easier for devs to read and debug it.
To comment and uncomment on VSCode, push Ctrl+/
You can comment the line the cursor is on or highlight multiple lines of text then uncomment.
I've commented out most of the code below so you can uncomment and run it (with 'node index') as you go down.
I've specified which lines to uncomment for clarity.
*/

/*
Let's start with something simple.
Run this file using your shell. Make sure you're in this directory, then type 'node index'.
Sidenote: JS assumes the extension for the file 'index' is .js, that's why you don't
have to type 'node index.js'.
*/

console.log('No mames pendejo!!!')

/*
'console' is one of many built in utilities JS provides you.
You'll see that JS printed out some data in the console (or shell, or terminal, etc).
'console.log' is extremely useful for testing and debugging.

You'll notice all we did with the text 'No mames pendejo!!!' is print it out.
JS allocated memory for it, printed it out, then disposed of it.
There is physically no way JS can reference that piece of data again because it
hasn't been stored anywhere. You can print the sentence again by typing it in another
console.log somewhere else in your code, but JS will have to allocate new memory for it.
In addition, it would be a pain in the ass re-typing it anytime you wanted to talk shit right?

This is where variables come into play.
Every language has its own naming style for variables. For JS, it's camel case.
Also, the first letter of any variable name can only be a '_' character or a letter.
hereIsAnExample = some data
*/

// shitTalking = 'No mames pendejo!!!'
// console.log(shitTalking)

/*
Now, we can reference that piece of data. We won't have to re-type it every time or allocate
memory again... saving us resources and time.
In other low-level programming languages (like C++ for example), is the responsibility
of the programmer to manage a program's memory. Luckily, JS comes with its OWN
automatic memory management known as 'Garbage Collection' or GC.
Even though memory is managed for you, it's still important to be aware of how memory is allocated
as it will lead you to write code that is more performant.

Another thing about variables in JS is that you don't need to specify the type before you assign them a value.
Lower-level languages require you to explicitly state the data type as soon as you declare a variable
because it needs to know what kind of data it is or will be. Read more here: https://stackoverflow.com/questions/18203636/    why-do-i-have-to-specify-data-type-each-time-in-c
Like this: int someVariable = 420
But, JS does this for you as well!
*/

// --------------------------------Data types--------------------------------

// Number

// thisIsANumber = 420 // uncomment

// A number can be...
// console.log('Added:', thisIsANumber + 69)  // uncomment
// console.log('Subtracted:', thisIsANumber - 69) // uncomment
// console.log('Multiplied:', thisIsANumber * 69) // uncomment
// console.log('Divided:', thisIsANumber / 69) // uncomment

/*
Yes, console.log can take in an x amount of inputs. This will print all inputs with
a space in between them.  In programming, these 'inputs' are actually called 'arguments'.
These so called 'arguments' are provided to 'functions' (like console.log), which we'll
talk about later.
*/

// You can also do x to the power of y
// console.log('Power:', thisIsANumber ** 69) // uncomment
// Or get the remainder after being divided by x
// console.log('Remainer:', thisIsANumber % 69) // uncomment

// And if you want to chain these operations, you can. But, keep in mind
// they will be evaluated in the order of PEMDAS.
// console.log('Chained operations:', (2 * 2) / 2 + 2) // output: 4 // uncomment

// If you want a certain operation to take priority, just use parenthesis!
// console.log('Chained operations:', (2 * 2) / (2 + 2)) // output: 1 // uncomment

// String
// thisIsAString = 'No mames otra vez guey!!!' // uncomment

/* 
A string is just a sequence of characters.
Strings can be wrapped in double or single quotes.
But, if the string contains double or single quotes INSIDE, then you will either need
to change the outside quotes or ESCAPE the quote character(s) that are inside.
*/

/*
Like this:

'He said, "No mames!"'
"He said, \"No mames!\""
'When I say \'now\', I mean now!'
*/

// The '\' character before the quotes tells JS to ignore that character and treat it
// as a literal quote character instead of the start or end of a string.

// Here, we concatenate the strings with the + operator.
// console.log('Add strings with +:', shitTalking + ' ' + thisIsAString) // uncomment

// The + is the only operator that can be used with strings.
// Alternatively, we can concatenate them like this.

// console.log('Add strings with .concat:', shitTalking.concat(' ', thisIsAString)) // uncomment

// Array
// thisIsAnArray = [1, 2, 3, 4] // uncomment

// Arrays are great for storing data in lists.

// Adding to arrays is simple.
// To add to the beginning use array.unshift
// thisIsAnArray.unshift(0) // uncomment
// To add to the end use array.push
// thisIsAnArray.push(5) // uncomment

// console.log(thisIsAnArray) // uncomment

// To remove from the beginning use array.shift
// thisIsAnArray.shift() // uncomment
// To remove from the end use array.pop
// thisIsAnArray.pop() // uncomment

// To concat two arrays
// console.log('Concatenated array:', thisIsAnArray.concat([5, 6, 7, 8])) // uncomment

// Modifiying an array more than this will take some more logic.
// We'll worry about that later.

/*
Characteristics to note about arrays
 - any data type can be stored in the array
 - they alawys preserve their insersion order, unlike objects (this data type is coming up)
*/

// Object
// thisIsAnObject = { // uncomment
//   2: 'integer 2', // uncomment
//   foo: 'string foo', // uncomment
//   '01': 'string 01', // uncomment
//   1: 'integer 1', // uncomment
// } // uncomment

// An object is a map of 'key, value' pairs.
// The keys are actually called 'properties' or also commonly referred to as attributes.

// The object properties can be easily accessed
// console.log(thisIsAnObject.foo) // uncomment
// If it's a string
// console.log(thisIsAnObject['01']) // uncomment
// If it's a variable
// someVariable = 'foo' // uncomment
// console.log(thisIsAnObject[someVariable]) // uncomment
// Add new properties
// thisIsAnObject['02'] = 'string 2' // uncomment

/*
Characteristics to note about objects
  - keys (properties) can be a string or a number (or a Symbol, but don't worry about that one yet)
  - property values can be any data type
  - the order is a combination of the insertion order for strings keys (properties),
    and ascending order for number-like keys - read more here https://stackoverflow.com/questions/5525795/does-javascript-guarantee-object-property-order
*/

/*
When we print this, the order should be 1, 2, foo, '01', '02'
Notice the numbers are ordered at the top, but the rest preserved their insertion order.
This is important to understand before you learn how to iterate over arrays and objects with 'loops'.
*/

// console.log(thisIsAnObject) // uncomment

/*
Lastly, I want to point out that JS variables are almost always declared with special keywords
before them (like: var, let, const).
Variables should be declared like this:

var someVariable = 'georgeIsALeva'
let someVariable = 'georgeIsALeva'
const someVariable = 'georgeIsALeva'

Instead, the variables we've declared are properties of the 'global' object (or global execution context).
This is an easy concept related to the code's 'scope' and should be understood before we start using
variable key words. I'll upload another file on my github explaining scope, execution context, and the global object!
*/

// LESSON ONE COMPLETE!!!
