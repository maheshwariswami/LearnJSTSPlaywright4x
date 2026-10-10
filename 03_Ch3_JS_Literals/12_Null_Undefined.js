//=============================
// Topic: Null & Undefined
//=============================

let val 
console.log(val) //undefined

let nullValue = null
console.log(nullValue) //null

// undefined is a type and value that indicates the absence of a value. 
// It is the default value of uninitialized variables, function parameters that are not provided, and missing properties of objects.

let userName;
console.log(userName); // Output: undefined
console.log(typeof userName); // Output: "undefined"

function greet(name) {
    console.log(name); // Output: undefined
}
console.log(greet()); // Output: undefined

function greet()
{

}
console.log(greet()); // Output: undefined
// null is a value that represents the intentional absence of any object value.
//  It is often used to indicate that a variable should have no value or
//  that an object property is intentionally empty.

let user = null;
console.log(user);
console.log(typeof user); // Output: "object" (this is a known quirk in JavaScript)


// undefined |       null
// Not assigned |  Intentionally assigned
// Type: undefined |  Type: object
// Default value of uninitialized variables |  Used to indicate the absence of a value
// Can be assigned to variables |  Can be assigned to variables
// Can be used in comparisons |  Can be used in comparisons
// Both undefined and null are falsy values in JavaScript, meaning they evaluate to false in boolean contexts.
// null == undefined // true (loose equality)
// null === undefined // false (strict equality)

