// Import stylesheets
import './style.css';

//Iplicit Types
let firstName = 'Manikanta';

//Explicit Types
let name: string = 'Anusha';

console.log(firstName);
console.log(name);

//Built - in Types
//Boolean
//string
//Number
//Array
//Tuple
//Enum
//Unknown
//Any
//Void
//Null and Undefined

//Tuple
type StringandNumber = [string, Number];

let x: StringandNumber = ['Manikanta', 100];

//Enums
enum Continents {
  North_America,
  South_America,
  Africa,
  Australia,
  Asia,
  Europe,
  Antarctica,
}

//usage
let region = Continents.Africa;
console.log(region);

//interface
interface Maniik {
  name: String;
  id: Number;
  value: Boolean;
}

const manik: Maniik = {
  name: 'Manikanta',
  id: 1,
  value: true,
};

console.log(manik);

//Composing Types
//Composing multiple types is called Union

type WindowStates = 'Open' | 'Closed' | 'Minimized';
type lockedStates = 'locked' | 'unlocked';
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const getLength = (params: string | string[]) => {
  return params.length;
};

console.log(getLength('ManikantaSriram'));
