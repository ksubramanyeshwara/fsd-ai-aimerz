// Any data type to string

/*

String
- String()
-().toString() = strict, it will not convert null and undefined
- `${}`
Empty array is converted to empty string

Number
When we convert other data types to number either it will be number or NaN
- Number()
- parseInt() - strict
- parseFloat() - strict

numbered string like "123", "123234234" are properly converted to number but proper string will result into NaN
boolean will not be convrted to number when you use parseInt() and parseFloat() and it will give NaN
null will not be convrted to number when you use parseInt() and parseFloat() and it will give NaN
empty array will not be convrted to number when you use parseInt() and parseFloat() and it will give NaN
array result into NaN
undefined result into NaN
object result into NaN

Boolean
when we convert number to boolean 0 result into false and other than 0 will result into true
empty string false and non-empty string will be true
empty and filled array true
empty and filled object true

null and undefined result into false
*/

let a = [];
let result1 = Boolean(a);
console.log(result1, typeof result1);
