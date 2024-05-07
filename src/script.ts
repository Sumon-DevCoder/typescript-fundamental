// # Data Types  Primitive data types are also known as in-built data typutilityes.

// 1.built in type -> number, string, boolean, void, undefined, null, object, symbol
// ---------------------------------------------------------------------------------
let userName: string;
let userId: number;
let isActivated: boolean;
let herBF: null = null;
let HisBF: undefined = undefined;

userName = "sumon";
userId = 201;
isActivated = true;

let myBoss: (name: string, age: number) => void; // not give a return value

myBoss = (name, age) => {
  console.log(`${name} ${age} i want to prepare for job `);
};

function studentInfo(userId: string | number) {
  console.log(userId);
}

// 2.user define type -> arrays, enums, classes, interfaces, union, tuple, intersection, void etc.
// -----------------------------------------------------------------------------------------------

// # union types > you can give more than type.
let studentBio: number | string | boolean; // here is "|" this symble means union that you can more than give data types.
studentBio = "20";

// array types
let foods: string[];
// let foods: string<string>;

foods = ["apple", "banana", "rice"];

// array multiple types
let nameAndAge: (string | number)[];
nameAndAge = [20, 1, "sakib", 2];

// tuple data types --> in array and maintain to order:  this type have to limit length, sequence wise give same type data, first value have to number and 2nd value string
let Teacher: [number, string];
Teacher: [12, "anis"];

// enum data types - - > In TypeScript, an enum (short for enumeration) is a data type that allows you to define a set of named
// constants. Enums are useful when you have a fixed set of values that a variable can take, such as days of the week, months of
// the year, or states of an object.

// An enum, short for "enumeration," is a data type in TypeScript used to define a set of named constants. Enums make it easier to work
// with a group of related values, providing meaningful names for each value

// enum types : numeric, string, hetergenous
// numeric enum
// syntax: enm role { value }

// Define an enum for days of the week
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Using the enum
let today: Weekday = Weekday.Monday;
console.log(today); // Output: 0 (Monday)

// Enums can also be accessed by their numeric value
let dayNumber: number = Weekday.Wednesday;
console.log(dayNumber); // Output: 2

// Enums can be assigned specific numeric values
enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Month.January); // Output: 1
console.log(Month.December); // Output: 12

// # interface type : an interface is a way to define a contract for the shape of an object. It allows you to specify the properties and
//                    methods that an object must have,  Interfaces are used to enforce a certain structure or shape on objects
//                    which helps improve code readability, maintainability, and reusability.
//                    ** so, kono akta object ar properties gular  type define kore dei interface.

//                     note:
//                     type alias and interface 2tai same kaj kore but kisu different ase seta hoilo, interface a primitive data define
//                     kora jaina, kintu type alias ar khetre primitive data type define kora jai.
//                     so, sokol primitve and object ar khete alias type use kora parbo & sudu matro object type define ar jonno interface

//                    Interface: Interface হলো Type Alias এর মতোই টাইপ ডিফাইন করার একটি পদ্ধতি যেটার মাধ্যমে শুধুমাত্র non primitive Type
//                    এর স্ট্রাকচার ডিফাইন করা হয়।
//                    Interface vs Type Alias: Interface দ্বারা শুধুমাত্র non primitive টাইপ ডিফাইন করা যায় আর Type Alias দ্বারা primitive
//                    এবং non primitive উভয় ধরণের টাইপ ডিফাইন করা যায়। Interface কে এক্সটেন্ড করতে হয় extends
//                    keyword দ্বারা। অপরদিকে Type Alias কে এক্সটেন্ড করতে হয় ‘&’ অপারেটর দ্বারা।

{
  interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }

  // Create an object that adheres to the Person interface
  let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };

  // Function that accepts an object adhering to the Person interface
  function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}!`;
  }
}

// # class

class SenoiorTeacher {
  // set type
  userName: string;
  age: number;

  // create constructor for initilize value
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  // create function
  display(): void {
    console.log(`${this.userName} ${this.age}`);
  }
}

let myUser1 = new SenoiorTeacher("sumon", 23);
myUser1.display();

// # class --> Inheritance: helps to acquire properties of one class to another
class Student extends SenoiorTeacher {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(`${this.userName} ${this.age} ${this.studentId}`);
  }
}

let student1 = new Student("anisur islam", 32, 3);
student1.display();

// # abstract class -->
// --> it's help to hide the implemetation of something
// --> class declare to abstrac class
// --> object can not be created from abstract class
abstract class Users {
  // set type
  userName: string;
  age: number;

  // create constructor for initilize value
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  // create function
  abstract display(): void;
}

myUser1.display();

// # any data types --> type hisabe jodi amra any type diya thakhi, tobe amara jenokono data type ar value assigne korte parbo.
//   The any type in TypeScript is a special type that represents any JavaScript value.
//   effectively telling the compiler to ignore type checking for a particular variable or expression.

let userInfoData: any;
userInfoData = "anis";
userInfoData = 24;
userInfoData = true;

// # object data types
let user1: { userName: string; id: number };
user1 = { userName: "anisur islam", id: 2 };

// # function signature --> to setup how of function structure
let add: (x: number, y: number) => number;

// Implementation of the function
add = function (x, y) {
  return x + y;
};

// # 4 key principle of OPP: ( PE AI ) Inheritance, Abstraction, Encapsulation, Polymorphism
// # Encapsulation & access modifires --> This concept helps in hiding the internal state of an object from the outside world and only
// exposing the necessary functionality through well-defined interfaces.
// public, private, protected, readonly

class UserBd {
  // set type
  readonly userName: string;
  private age: number;

  // create constructor for initilize value
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  // create function
  display(): void {
    console.log(`${this.userName} ${this.age}`);
  }
}

let myUserbd1 = new UserBd("bdddd", 2333);

// generics basics :
// Generic types in TypeScript allow you to create reusable components or functions that can work with a variety of data types while
// maintaining type safety. They provide flexibility by allowing you to define types and behavior that depend on the types of the data
// being used.

// Generics: কোনো function, type alias, interface, class ইত্যাদিতে টাইপ ডিফাইন করার সময় কোনো টাইপকে explicitly ডিফাইন না করে টাইপকে
// ভ্যারিয়েবল আকারে রিসিভ করে function, type alias, interface, class ইত্যাদি ডিফাইন করাকে Generics বলে। extends কীওয়ার্ড দ্বারা Generics এ
// ব্যবহৃত টাইপ ভ্যারিয়েবলে কিছু বাধ্যবাধকতা বা শর্তারোপ করা যায়।
// type ke amra dymic vabe send korte pari

type genericArray<T> = Array<T>;

// const rollNumber: number[] = [2, 5, 6];
const rollNumber: genericArray<number> = [2, 5, 6];

// const studentName: string[] = ["anil", "dipto", "hasi"];
const studentName: genericArray<string> = ["anil", "dipto", "hasi"];

const boolArray: genericArray<boolean> = [true, false, true];

interface User {
  name: string;
  phone: number;
}

const laptopUser: genericArray<User> = [
  {
    name: "a",
    phone: 1,
  },
  {
    name: "b",
    phone: 2,
  },
];

type GenericTuple<X, Y> = [X, Y];

const manush: GenericTuple<string, string> = ["Mr. x", "Mr. y"];

const userWithID: GenericTuple<number, { name: string; email: string }> = [
  4,
  {
    name: "anisur ",
    email: "anisur@gmail.com",
  },
];

// # generic with interface : we can dynamically create properties type and value and we can give default params
interface Developer<T, X = null> {
  name: string;
  computer: {
    model: string;
    price: number;
    isNewCondtion: false;
  };
  smartWatch: T;
  bike?: X;
}

type AppleWatch = {
  brand: string;
  model: string;
  display: string;
};

let poorDeveloper: Developer<AppleWatch> = {
  name: "mazba vai",
  computer: {
    model: "asus",
    price: 40203,
    isNewCondtion: false,
  },
  smartWatch: {
    brand: "apple",
    model: "Y2035",
    display: "LED",
  },
};

interface MaxGreenWatch {
  brand: string;
  model: string;
  price: number;
  waterProof: boolean;
}

interface HeroHonda {
  model: string;
  price: number;
}

let richDeveloper: Developer<MaxGreenWatch, HeroHonda> = {
  name: "mazba vai",
  computer: {
    model: "asus",
    price: 40203,
    isNewCondtion: false,
  },
  smartWatch: {
    brand: "maxGreen",
    model: "H083",
    price: 2000, // we can add more than extra two properties for smart watch.
    waterProof: true,
  },
  bike: {
    model: "heroHonda",
    price: 60000,
  },
};

// # function with generic
// note: emon akta function banabo jar madome akta function diya array, object, ba anything crate and return korte parbo;

const createArray = (param: string): string[] => {
  return [param];
};

// now we can create dynamically
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

type UserInfos = {
  name: string;
  age: number;
};

const resultGenericObject = createArrayWithGeneric<string>("bangladesh");
const resGen = createArrayWithGeneric<UserInfos>({ name: "a", age: 20 });

// # Type inference : that is guess which type of this data automatically detected typescript by default
// ans: type inference is a type that a variable guess that which type will be data and next time when update this varibale same type give him
let myData; // this type guess any type
let loverName = "sumon.dev"; // this type guess string
let loverAge = 2; // this type guess number
let favNum: 5 = 5; // specific number you can create type

// # Literal type : when i give not type rather we give value as a type that time you have use this value otherwise i got an error
let boysData: "love pro" | 20 = 20;
let company: "phero" = "phero";

let status: "success" | "error";
status = "success"; // OK
status = "error"; // OK
// Error: Type '"pending"' is not assignable to type '"success" | "error"'.

let score: 0 | 1 | 2 | 3 | 4 | 5;
score = 3; // OK
// status = "pending"; Error: Type '"pending"' is not assignable to type '"success" | "error"'.

// # void type : void means nothing - when we not return anyting that time we use it
function showMessage(message: string): void {
  console.log(message);
  // No return statement or return undefined
}

// # never type : jokhon kono function kono value return na kore that time take never type function bole.
function throwError(message: string): never {
  throw new Error(message);
}

// # tsc config : its handle to multiple ts file
// > tsc -init > enter

// # alias type : is a custom type we created own way, for reuse to reduce repated code. have to use keyword type.

//                @what is alias type ?
//                A type alias in TypeScript is a way to give a name to a specific type or combination of types. It allows you to
//                create a new name for any type, including built-in types, user-defined types, or combinations of existing types.
//                This can help make your code more expressive, readable, and maintainable.

type Status = "active" | "inactive";

type myUsers = {
  id: number;
  name: string;
  status: Status;
};

type Admin = {
  id: number;
  name: string;
  isAdmin: boolean;
};
type Employee = myUsers | Admin;

// # Type guard / type narrowring :  Type guards are a TypeScript feature that allows you to narrow down the type of a
// variable within a conditional block. They are particularly useful when dealing with union types, where a variable can
// have multiple possible types.

function logValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else {
    console.log("Number value:", value.toFixed(2));
  }
}

// # Conditional Types
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

// # utility type : exclude, Partial, Pick, readOnly, Omit.
export interface studentInfos {
  first_name: string;
  last_name: string;
  readonly id: number;
  role: "admin" | "user";
}

const updateStudentInfos1 = (user: Partial<studentInfos>) => {}; // here is partial use for all properties update permission
const firstName = (user: Pick<studentInfos, "first_name" | "last_name">) => {}; // here is pick use for create one different type
type person = Omit<studentInfos, "role">; // here is role bade bakigula thakbe this  person type ar modde

updateStudentInfos1({ first_name: "sumon devCoder" });

// readonly
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

// # object and optional type : type by default will  be required so we can use "?" this symbol for making optionl type
const teacherName: {
  companyName: "phero compnay"; // literal type
  readonly positionType: "mern developer";
  fistName: string;
  middleName?: string; // optional type
  lastName?: string;
} = {
  fistName: "jhankhar mahbub 222",
  companyName: "phero compnay",
  positionType: "mern developer",
};

console.log(teacherName);

// # spread operator ---> more than array or more than object akshtathe niya asar jonno aktar jaigai spreed operator use kora hoi.
const heroName1: string[] = ["a", "b", "c"];
const heroName2: string[] = ["d", "e", "f"];
heroName1.push(...heroName2);
const heros = [...heroName1, ...heroName2];

const mentor1 = { html: "a", css: "b" };
const mentor2 = { js: "c", react: "d" };
const mentorList = { ...mentor1, ...mentor2 };

// # rest operator
const welcomeFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`hi, ${friend}`));
};

welcomeFriends("a", "b", "c");

// # destructuring object and array
// object destructuring  --- > we can desturcting chaining with we can convert alis name
const person = {
  persionName: "John",
  age: 30,
  country: "USA",
  lagnguage: {
    bangla: "primary",
    english: "comfortable",
    hindi: "medium",
  },
};

const {
  persionName,
  age,
  country,
  lagnguage: { english: eng }, // alias naming
} = person;

// array destructuring  --- > we can give any name on desctucting and amara bad o dite pari and ...rest ar modde amora bakigula ke niteu pari
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
const [firstPerson, , , ...rest] = names;

// # alias and union type --> type alias have starting letter uppercase
type FrontedDeveloper = "fakibaj" | "junior dev";

const newDeveloper: FrontedDeveloper = "fakibaj";

type BloodDonor = {
  name: string;
  email: string;
  gender: "male" | "female";
  bloodGroup: "A+" | "O-" | "AB+";
};

const donorPersion1: BloodDonor = {
  name: "abul ",
  email: "abule@gmail.com",
  gender: "male",
  bloodGroup: "A+",
};

// # intersection type : An intersection type in TypeScript allows you to combine multiple types into a single type. It represents
//                       a type that has all the properties and methods of each individual type being intersected. Intersection types
//                       are denoted by the & symbol.
type FrontendDeveloperss = {
  skillsSet: string[];
  designationPerson1: "teacher";
};

type BackendDeveloperss = {
  skillsSet: string[];
  designationPerson2: "programmer";
};

type FullStackDeveloper = FrontendDeveloperss & BackendDeveloperss;

const fullStackDeveloper: FullStackDeveloper = {
  skillsSet: ["html", "css", "node.js"],
  designationPerson1: "teacher",
  designationPerson2: "programmer",
};

// # nullish coalescing operator --- > sudu matro kaj korbe null and undefined
// null  / undefined --- > desicion making

const isAuthenticated = null;
const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";

console.log(result1, result2);

// nullable type : akta variable ar type jodi null hoi tobe setai nullable type

const searchFood = (value: string | null) => {
  if (value) {
    console.log("searching food ");
  } else {
    console.log("not searching here...");
  }
};

searchFood(null);

// # unknown type :
let shilaData: unknown;
shilaData = 20;
shilaData = "married";

// Unknown type : any data unknown data are simillar but there is a small diffrent variable not added incase inknown
// akhon buja jabe na but run time a ar value buja jai unknown মানে হল আপনি এখন জানেন না কিন্তু পরবর্তীতে জানবেন এবং এটি হ্যান্ডেল
// করবেন৷ যেমন ধরেন রানটাইমে জানবেন এটা স্ট্রিং হবে তখন আপনি if দিয়ে একটা চেক দিয়ে রাখলেন।
// কিন্তু any মানেই হল আপনি বলে দিয়েছেন এটা দুনিয়ার যেকোন কিছু হবে। যেকোন কিছু তুমি এক্সেপ্ট কর
const getSquareNumber = (value: unknown) => {
  if (typeof value === "number") {
    const resultOfSquare = value * 2;
    console.log(`result is : ${resultOfSquare}`);
  } else {
    console.log("wrong inputs");
  }
};

getSquareNumber("kjflk");

// # type assertion : is mechanism which tells the compiler about the type of variable. and you are tells this type will be and typescript setai believe kore.
//                    i has two form "angle-bracket" and "as-syntax"

//                    @what is assertion ?
//                    Type assertion in TypeScript is a way for a developer to tell the TypeScript compiler that they know more about
//                    the type of a value than TypeScript does. It's a mechanism to override the default inference or declared type of
//                    a variable or expression.

//                    @asssertion usecase ?
//                    Imagine you're receiving data from an external source, like an API, and TypeScript isn't able to determine the
//                    exact type of that data. You, as the developer, might have more knowledge about the data's structure or type than
//                    TypeScript does. In such cases, you can use type assertion to tell TypeScript what you believe the type to be.

//                    note : any type work emplicitly that means jeigular data infers / guess kore type bole setai.
//                    but assertion work explicitly that means we can define this data which will be type.

//                    [ Type Assertion: যখন কোনো ভ্যারিয়েবলের টাইপ সম্পর্কে TypeScript এর কাছে পর্যাপ্ত তথ্য থাকে না এবং ডেভেলপার TypeScript
//                    কে forcefully ভ্যারিয়েবলের কোনো একটা নির্দিষ্ট টাইপ ধরে নিতে বলে তখন তাকে Type Assertion বলে। ]

let myValue: any = "hello world"; // we can not get method suggetion like string, number and others.
let myString: string = myValue as string;
let myNumber: number = myValue as number;

{
  const kgToGram = (
    value: string | number | undefined
  ): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram(1000) as number;
  const result2 = kgToGram("1000") as string;
}

type CustomError = {
  message: "string";
};

try {
  console.log("successful");
} catch (error) {
  console.log((error as CustomError).message);
}

// # type mapped >> map ar modome amra chile akta type theke onno arekta type a tranform korte pari, to convert type exam: number to string
type AreaNumber = {
  height: number;
  width: number;
  total: number;
};

// lookup type
type height = AreaNumber["height"];

type AreaString = {
  // [key in "height" | "width" | "total"]: string;
  [key in keyof AreaNumber]: string;
};

const arrayOfNumber: number[] = [1, 5, 7];
const arrayOfNumberToString = arrayOfNumber.map((number) => number.toString());

// # syntactic sugar:
//   সিনট্যাকটিক সুগার বলতে কোড লেখার সহজ কোনো পদ্ধতিকে বোঝায়। যা মূলত ওই কোডের কোন মান পরিবর্তন করে না, বরং কোড আমাদের বুঝতে ও
//   লিখতে আরও সহজ হয়।

//   একটি উদাহরণ :
//   সাধারণ ফাংশন
function addNums(a: number, b: number): number {
  return a + b;
}
// অ্যারো ফাংশন (সিনট্যাক্টিক সুগার)
const addNum = (a: number, b: number): number => a + b;
// এখানে, অ্যারো ফাংশনটি সাধারণ ফাংশনের সিনট্যাক্টিক সুগার। এটি ফাংশনটি সংক্ষেপে লেখার জন্য একটি সহজ, এখানে কোড ও কম লিখা লাগে।

// # Symbol Type
//   টাইপ্সক্রিপ্টে Symbol Type , string, number, boolean এই টাইপ গুলোর মতই primitive type. এবং Sybmol type এর কোন ভ্যালু তৈরি করতে
//   আমরা Symbol contructor ব্যাবহার করে। যেমন নিচের কোডে দেখতে পাবেন Creating a symbol normally

let symbol1 = Symbol();
console.log(symbol1);
// Creating a symbol with an optional key
let symbol2 = Symbol("abc");
console.log(symbol2);

// Symbol()
// Symbol(abc)
//  symbol বলতে সহজ বাংলা ভাষায় কোন ইউনিক সাইন বুঝায়। যেমন আপনি কোথাও সিগনেচার করলে আপনার সিগনেচার টা কিন্তু একদম ইউনিক। তেমনি Symbol দিয়ে তৈরি করা যেকোন ভ্যালু একটি অন্যের থেকে সবসময়ই আলাদা হবে। যেমন উপরের কোডের symbol1, symbol2 যদি equality check করি তাহলে সবসময় false পাবো
// Output: console.log(symbol1 === symbol2);
// Output: false;
// Symbol এর একটি use case হতে পারে Object এর ইউনিক প্রোপার্টি সেট করার ক্ষেত্রে । যেমন নিচের কোডটিতে দেখতে পাবো
{
  let symbol1 = Symbol();
  let obj1 = {
    symbol1: "secret_code",
  };
  console.log(obj1.symbol1);
  // Output: secret_code;
}

// # asynchronous typescript

{
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling created promise function
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    console.log("data", data);
    return data;
  };

  showData();
}

// fetch data
type TodoData = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getToods = async (): Promise<TodoData> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();
  return data;
};

// # conditional type : akta type ar value arekta type ar value upor nirbor korle take conditional type bole;
type sheikh = {
  bike: string;
  car: string;
  ship: string;
};

// car ase kina, bike ase kina, ship ase kina,

// # utility type : Pick, Omit

type PersonInfo = {
  name: "anisur rahman";
  age: 32;
  phone?: 33;
  isMarried: true;
};

// pick : alada vabae amora chile kono alis type theke ak ba tar beshi properties pick kore nite pari.
type NameAndPhone = Pick<PersonInfo, "name" | "phone">;

// Omit : pick method ar ulta, that means jeigula omit ar vitor niya asbo seigula bade bakigula properties type amake dibe
type ContactInfo = Omit<PersonInfo, "phone">;

// Require : ar madome amra chile kono alias type ar sobgula properties ke required kore felte pari.
type RequiredPerson = Required<PersonInfo>;

// Partial : holo Required ar ulta that means atar modeme alias type ar sobgula properties ke optional kore felte pare
type PartialPerson = Partial<PersonInfo>;

// ReadOnly : aitar madome we can only read type of value and we cannot assign or reassign a value otherwiese we got an error.
type ReadOnlyName = Readonly<PersonInfo>;

// Record : we can dynamically create unlimited properties using by record.
type myObj = Record<string, string>; // first key hisabe string hobe karon object ar keygula alltime string hoi. second value hidabe string.

const obj1: myObj = {
  name: "abdur rahman",
  fatherName: "abdul alim",
  profession: "teacher",
};

const emptyObj: Record<string, unknown> = {}; // first key hisabe bosbe string always, and send param jekono type boste pari amra jani na pore jante parbo

// # conditional type : kono akta type onno arekta type ar upor depend thake kono akta condition ar upor vitti kore take condition type.
// # Conditional Type: Conditional Type হলো কোনো কন্ডিশনের ভিত্তিতে টাইপ ডিফাইন করা। extends কীওয়ার্ড এবং ternary অপারেটর ব্যবহার করে
//                     কনডিশনাল টাইপ ডিফাইন করা হয়।

type a = number;
type b = undefined;

type x = a extends null ? true : false; // aikhene x holo condition type karon x type depend kortese a type ar upore.
type y = a extends null ? true : b extends undefined ? undefined : any;

type Sheikh = {
  bike: string;
  car: string;
  ship: string;
};

// bike asekina, car asekina, ship asekina
type checkVechicle<T> = T extends keyof Sheikh ? true : false;

type HasShip = checkVechicle<"car">;

{
  // # constrain type : enforce kora bujai
  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "next level development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 202,
    name: "abul hai",
    email: "abdulhai@gmail.com",
    devTypes: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 203,
    name: "fakir ali",
    email: "fokirali@gmail.com",
    hasWatch: "Apple Watch",
  });

  const student3 = addCourseToStudent({
    id: 202,
    name: "abul hai",
    email: "abdulhai@gmail.com",
  });
}

{
  // # generic constraint with typeof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type owner = "bike" | "car" | "ship"; // manually create
  type owner2 = keyof Vehicle;

  const person1: owner2 = "bike";

  // function related usecase
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "abc",
    age: 22,
    address: "banglass",
  };

  const result1 = getPropertyValue(user, "name");
}

// # OOP --> Object Oriented Programming: A programming paradigm that organize and models software.
//           Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects,
//           rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

// * what is paradigm: The style use to write and organize code.
// * paradigm: Procedural Programming,
//             functional Programming,
//             object oriented programming,
//             Event Driven Programming.
// * building block of OOP --> Inheritance, Polymorphism, Abstration, Encapsulation

// # OOP ----> about class
// # What is class ? : is a template or blueprint for creating object. its define the structure and behavior of objects.
//                     class is fundamental concept of OOP.
//                     Overall, classes are a powerful tool for building complex software systems by promoting encapsulation,
//                     abstraction, inheritance, polymorphism, modularity, reusability, and organization. They enable developers
//                     to write clean, maintainable, and scalable code that can evolve over time to meet changing requirements.

// # what is constructor: A constructor in object-oriented programming (OOP) is a special method or function that is automatically
//                        called when an instance of a class is created or initialized. It is used to initialize the newly created
//                        object by setting up its initial state, assigning values to its properties, and performing any necessary
//                        setup tasks.

// # class and modifire : we can create class easily using modifire method without creating obejct and this keyword.
class Animal {
  // constructor for initialize of object and using modifire for simplicity
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  // method of class
  makeSound() {
    console.log(`ths ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("chirle", "dog", "gew gew ");
const cat = new Animal("mintu", "cat", "mew mew");
cat.makeSound();

{
  // # Inheritance In OOP: is method jar madome amra parent class ar properties ke children class ar properies hisabe extend kore niya aste pari,
  //                       that means akta class theke onnno arekta class ar boisisto niya aste pari inheritance ar madome.

  // properties of class
  class Teacher {
    name: string;
    age: number;
    address: string;

    // create constructor for initilize of properties
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    // create method for calling class
    featured() {
      console.log(`name ${this.name} is age ${this.age}`);
    }
  }

  class Student extends Teacher {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("sumon", 21, "sherpur");
  student1.featured();

  //
}

{
  // # type guards  Type guards are a TypeScript feature that allows you to narrow down the type of a
  //                variable within a conditional block. They are particularly useful when dealing with union types, where a variable
  //                can have multiple possible types.

  //  type of with type guards

  type AlpahNeumaric = string | number;

  const add = (param1: AlpahNeumaric, param2: AlpahNeumaric): AlpahNeumaric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(3, 6);
  console.log(result1);

  type NormalUser = {
    userName: string;
  };

  type AdminUser = {
    userName: string;
    role?: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    // in guard sudu matro object ar khetre kaj korbe
    if ("role" in user) {
      console.log(`my name is ${user.userName} and my role: ${user.role}`);
    } else {
      console.log(`my name is ${user.userName} and my role guest`);
    }
  };

  const NormalUser = {
    userName: "rahman",
  };

  const AdminUser = {
    userName: "sumon",
    role: "admin",
  };

  getUser(AdminUser);

  //
}

{
  // # Type Guard Using Instance Of ( OOP )
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("i am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("i am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("i am mew");
    }
  }

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMew();
    }
  };

  const dog = new Dog("i am dog", "dog");
  const cat = new Cat("i am cat", "cat");

  // # Type Guard Using Instance Of ----> amora accesss korte pari aita madome child ar instance gula mane parent ar instance theke
  //   child gular instance gula access korte pari

  class Teacher {
    // create type
    name: string;
    subject: string;

    // create constructor for initialize type of value
    constructor(name: string, subject: string) {
      this.name = name;
      this.subject = subject;
    }

    // make a method or function for calling type of value
    TeacherSubject() {
      console.log("I am head master");
    }
  }

  class EnglishTeacher extends Teacher {
    // constructor
    constructor(name: string, subject: string) {
      super(name, subject);
    }

    // method or function
    EnglishTeacherSubject() {
      console.log("I am teaching english");
    }
  }

  class BanglaTeacher extends Teacher {
    // constructor
    constructor(name: string, subject: string) {
      super(name, subject);
    }

    // method or function
    BanglaTeacherSubject() {
      console.log("I am teaching Bangla");
    }
  }

  const getTeacherSubject = (teacher: Teacher) => {
    if (teacher instanceof BanglaTeacher) {
      teacher.BanglaTeacherSubject();
    } else if (teacher instanceof EnglishTeacher) {
      teacher.EnglishTeacherSubject();
    } else {
      teacher.TeacherSubject();
    }
  };

  const engTeacher = new EnglishTeacher("anisur islam", "eng");
  const bangTeacher = new BanglaTeacher("sumon islam", "ban");
  engTeacher.EnglishTeacherSubject();
  bangTeacher.BanglaTeacherSubject();

  //
}

// # access modifire : public(default), readonly (we can read only value), private (we can access only class block),
//   protected (private ar moto kaj korbe kint child class create hoile tar khete sudu kaj korbe mane modify korte parbo)
class BankAccount {
  readonly id: number;
  name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }

  getBalance() {
    return this._balance;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this._balance;
  }
}

const goribAccount = new BankAccount(22, "dfjsdf", 2222);
goribAccount.addDeposit(5);

const myBalance = goribAccount.getBalance();
console.log(myBalance);

{
  // # Getter and Setter :
  //
}

{
  // # Polymorphism : poly mean boho class ar particuler method onno class ar geye jodi redesign hoi tobe different differet out pai
  class Animal {
    makeSound() {
      console.log("Animal makes a sound");
    }
  }

  class Dog extends Animal {
    makeSound() {
      console.log("Dog barks");
    }
  }

  class Cat extends Animal {
    makeSound() {
      console.log("Cat meows");
    }
  }

  // Create instances of Animal, Dog, and Cat
  const animal = new Animal();
  const dog = new Dog();
  const cat = new Cat();

  // Call the makeSound method on each object
  animal.makeSound(); // Output: Animal makes a sound
  dog.makeSound(); // Output: Dog barks
  cat.makeSound(); // Output: Cat meows

  //
}

// # Statics In OOP : atir madome different different memory na create kore akta memory crete kore static vabe;
class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count = Counter.count + 1);
  }

  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const instance1 = new Counter(); // different memory
const instance2 = new Counter(); // different memory
console.log(instance1.increment(), instance2.increment());

{
  // # Abstraction :  1.interface, 2.class

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implemention
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`i am starting car engine`);
    }

    stopEngine(): void {
      console.log(`i am stoping car engine`);
    }

    move(): void {
      console.log(`i am moving a car`);
    }

    test(): void {
      console.log(`i am just testing`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
}

// checing for git
