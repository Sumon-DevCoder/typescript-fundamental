"use strict";
// # Data Types  Primitive data types are also known as in-built data typutilityes.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// confusing: abstract class, function signature, encapsulation and access modifire, unknown type, never vs void, utility type
// 1.built in type -> number, string, boolean, void, undefined, null, object, symbol
// ---------------------------------------------------------------------------------
let userName;
let userId;
let isActivated;
let herBF = null;
let HisBF = undefined;
userName = "sumon";
userId = 201;
isActivated = true;
let myBoss; // not give a return value
myBoss = (name, age) => {
    console.log(`${name} ${age} i want to prepare for job `);
};
function studentInfo(userId) {
    console.log(userId);
}
// 2.user define type -> arrays, enums, classes, interfaces, union, tuple, intersection, void etc.
// -----------------------------------------------------------------------------------------------
// # union types > you can give more than type.
let studentBio; // here is "|" this symble means union that you can more than give data types.
studentBio = "20";
// array types
let foods;
// let foods: string<string>;
foods = ["apple", "banana", "rice"];
// array multiple types
let nameAndAge;
nameAndAge = [20, 1, "sakib", 2];
// tuple data types --> in array and maintain to order:  this type have to limit length, sequence wise give same type data, first value have to number and 2nd value string
let Teacher;
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
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
// Using the enum
let today = Weekday.Monday;
console.log(today); // Output: 0 (Monday)
// Enums can also be accessed by their numeric value
let dayNumber = Weekday.Wednesday;
console.log(dayNumber); // Output: 2
// Enums can be assigned specific numeric values
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
    Month[Month["April"] = 4] = "April";
    Month[Month["May"] = 5] = "May";
    Month[Month["June"] = 6] = "June";
    Month[Month["July"] = 7] = "July";
    Month[Month["August"] = 8] = "August";
    Month[Month["September"] = 9] = "September";
    Month[Month["October"] = 10] = "October";
    Month[Month["November"] = 11] = "November";
    Month[Month["December"] = 12] = "December";
})(Month || (Month = {}));
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
    // Create an object that adheres to the Person interface
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
    };
    // Function that accepts an object adhering to the Person interface
    function greet(person) {
        return `Hello, ${person.firstName} ${person.lastName}!`;
    }
}
// # class
class SenoiorTeacher {
    // create constructor for initilize value
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // create function
    display() {
        console.log(`${this.userName} ${this.age}`);
    }
}
let myUser1 = new SenoiorTeacher("sumon", 23);
myUser1.display();
// # class --> Inheritance: helps to acquire properties of one class to another
class Student extends SenoiorTeacher {
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`${this.userName} ${this.age} ${this.studentId}`);
    }
}
let student1 = new Student("anisur islam", 32, 3);
student1.display();
// # abstract class -->
// --> it's help to hide the implemetation of something
// --> class declare to abstrac class
// --> object can not be created from abstract class
class Users {
    // create constructor for initilize value
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
myUser1.display();
// # any data types -->  The any type in TypeScript is a special type that represents any JavaScript value.
//  effectively telling the compiler to ignore type checking for a particular variable or expression.
let userInfoData;
userInfoData = "anis";
userInfoData = 24;
userInfoData = true;
// # object data types
let user1;
user1 = { userName: "anisur islam", id: 2 };
// # function signature --> to setup how of function structure
let add;
// Implementation of the function
add = function (x, y) {
    return x + y;
};
// # 4 key principle of OPP: Inheritance, Abstraction, Encapsulation, Polymorphism
// # Encapsulation & access modifires --> This concept helps in hiding the internal state of an object from the outside world and only
// exposing the necessary functionality through well-defined interfaces.
// public, private, protected, readonly
class UserBd {
    // create constructor for initilize value
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // create function
    display() {
        console.log(`${this.userName} ${this.age}`);
    }
}
let myUserbd1 = new UserBd("bdddd", 2333);
myUser1.display();
// const rollNumber: number[] = [2, 5, 6];
const rollNumber = [2, 5, 6];
// const studentName: string[] = ["anil", "dipto", "hasi"];
const studentName = ["anil", "dipto", "hasi"];
const boolArray = [true, false, true];
const laptopUser = [
    {
        name: "a",
        phone: 1,
    },
    {
        name: "b",
        phone: 2,
    },
];
const manush = ["Mr. x", "Mr. y"];
const userWithID = [
    4,
    {
        name: "anisur ",
        email: "anisur@gmail.com",
    },
];
let poorDeveloper = {
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
let richDeveloper = {
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
const createArray = (param) => {
    return [param];
};
// now we can create dynamically
const createArrayWithGeneric = (param) => {
    return [param];
};
const resultGenericObject = createArrayWithGeneric("bangladesh");
const resGen = createArrayWithGeneric({ name: "a", age: 20 });
// # Type inference : that is guess which type of this data automatically detected typescript by default
// ans: type inference is a type that a variable guess that which type will be data and next time when update this varibale same type give him
let myData; // this type guess any type
let loverName = "sumon.dev"; // this type guess string
let loverAge = 2; // this type guess number
let favNum = 5; // specific number you can create type
// # Literal type : when i give not type rather we give value as a type that time you have use this value otherwise i got an error
let boysData = 20;
let company = "phero";
let status;
status = "success"; // OK
status = "error"; // OK
// Error: Type '"pending"' is not assignable to type '"success" | "error"'.
let score;
score = 3; // OK
// status = "pending"; Error: Type '"pending"' is not assignable to type '"success" | "error"'.
// # void type : void means nothing - when we not return anyting that time we use it
function showMessage(message) {
    console.log(message);
    // No return statement or return undefined
}
// # never type : jokhon kono function kono value return na kore that time take never type function bole.
function throwError(message) {
    throw new Error(message);
}
// # Type guard / type narrowring :  Type guards are a TypeScript feature that allows you to narrow down the type of a
// variable within a conditional block. They are particularly useful when dealing with union types, where a variable can
// have multiple possible types.
function logValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    }
    else {
        console.log("Number value:", value.toFixed(2));
    }
}
const updateStudentInfos1 = (user) => { }; // here is partial use for all properties update permission
const firstName = (user) => { }; // here is pick use for create one different type
updateStudentInfos1({ first_name: "sumon devCoder" });
const todo = {
    title: "Delete inactive users",
};
// # object and optional type : type bydefault will  be required so we can use "?" this symbol for making optionl type
const teacherName = {
    fistName: "jhankhar mahbub 222",
    companyName: "phero compnay",
    positionType: "mern developer",
};
console.log(teacherName);
// # spread operator ---> more than array or more than object akshtathe niya asar jonno aktar jaigai spreed operator use kora hoi.
const heroName1 = ["a", "b", "c"];
const heroName2 = ["d", "e", "f"];
heroName1.push(...heroName2);
const heros = [...heroName1, ...heroName2];
const mentor1 = { html: "a", css: "b" };
const mentor2 = { js: "c", react: "d" };
const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
// # rest operator
const welcomeFriends = (...friends) => {
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
const { persionName, age, country, lagnguage: { english: eng }, // alias naming
 } = person;
// array destructuring  --- > we can give any name on desctucting and amara bad o dite pari and ...rest ar modde amora bakigula ke niteu pari
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
const [firstPerson, , , ...rest] = names;
const newDeveloper = "fakibaj";
const donorPersion1 = {
    name: "abul ",
    email: "abule@gmail.com",
    gender: "male",
    bloodGroup: "A+",
};
const fullStackDeveloper = {
    skillsSet: ["html", "css", "node.js"],
    designationPerson1: "teacher",
    designationPerson2: "programmer",
};
// # nullish coalescing operator --- > sudu matro kaj korbe null and undefined
// null  / undefined --- > desicion making
const isAuthenticated = null;
const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log(result1, result2);
// nullable type : akta variable ar type jodi null hoi tobe setai nullable type
const searchFood = (value) => {
    if (value) {
        console.log("searching food ");
    }
    else {
        console.log("not searching here...");
    }
};
searchFood(null);
// # unknown type :
let shilaData;
shilaData = 20;
shilaData = "married";
// Unknown type : any data unknown data are simillar but there is a small diffrent variable not added incase inknown
// akhon buja jabe na but run time a ar value buja jai unknown মানে হল আপনি এখন জানেন না কিন্তু পরবর্তীতে জানবেন এবং এটি হ্যান্ডেল
// করবেন৷ যেমন ধরেন রানটাইমে জানবেন এটা স্ট্রিং হবে তখন আপনি if দিয়ে একটা চেক দিয়ে রাখলেন।
// কিন্তু any মানেই হল আপনি বলে দিয়েছেন এটা দুনিয়ার যেকোন কিছু হবে। যেকোন কিছু তুমি এক্সেপ্ট কর
const getSquareNumber = (value) => {
    if (typeof value === "number") {
        const resultOfSquare = value * 2;
        console.log(`result is : ${resultOfSquare}`);
    }
    else {
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
let myValue = "hello world"; // we can not get method suggetion like string, number and others.
let myString = myValue;
let myNumber = myValue;
{
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGram(1000);
    const result2 = kgToGram("1000");
}
try {
    console.log("successful");
}
catch (error) {
    console.log(error.message);
}
const arrayOfNumber = [1, 5, 7];
const arrayOfNumberToString = arrayOfNumber.map((number) => number.toString());
// # syntactic sugar:
//   সিনট্যাকটিক সুগার বলতে কোড লেখার সহজ কোনো পদ্ধতিকে বোঝায়। যা মূলত ওই কোডের কোন মান পরিবর্তন করে না, বরং কোড আমাদের বুঝতে ও
//   লিখতে আরও সহজ হয়।
//   একটি উদাহরণ :
//   সাধারণ ফাংশন
function addNums(a, b) {
    return a + b;
}
// অ্যারো ফাংশন (সিনট্যাক্টিক সুগার)
const addNum = (a, b) => a + b;
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
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "something";
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to load data");
            }
        });
    };
    // calling created promise function
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log("data", data);
        return data;
    });
    showData();
}
const getToods = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = yield response.json();
    return data;
});
const obj1 = {
    name: "abdur rahman",
    fatherName: "abdul alim",
    profession: "teacher",
};
const emptyObj = {}; // first key hisabe bosbe string always, and send param jekono type boste pari amra jani na pore jante parbo
{
    // # constrain type : enforce kora bujai
    const addCourseToStudent = (student) => {
        const course = "next level development";
        return Object.assign(Object.assign({}, student), { course });
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
    const person1 = "bike";
    // function related usecase
    const getPropertyValue = (obj, key) => {
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
// # class and modifire : we can create class easily using modifire method.
class Animal {
    // constructor for initialize of object and using modifire for simplicity
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
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
        // create constructor for initilize of properties
        constructor(name, age, address) {
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
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("sumon", 21, "sherpur");
    student1.featured();
    //
}
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(3, 6);
    console.log(result1);
    const getUser = (user) => {
        // in guard sudu matro object ar khetre kaj korbe
        if ("role" in user) {
            console.log(`my name is ${user.userName} and my role: ${user.role}`);
        }
        else {
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
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("i am making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("i am barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log("i am mew");
        }
    }
    const getAnimal = (animal) => {
        if (animal instanceof Dog) {
            animal.makeBark();
        }
        else if (animal instanceof Cat) {
            animal.makeMew();
        }
    };
    const dog = new Dog("i am dog", "dog");
    const cat = new Cat("i am cat", "cat");
    //
}
// # access modifire : public(default), readonly (we can read only value), private (we can access only class block),
//   protected (private ar moto kaj korbe kint child class create hoile tar khete sudu kaj korbe mane modify korte parbo)
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    addDeposit(amount) {
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
// # Statics In OOP
class Counter {
    increment() {
        return (Counter.count = Counter.count + 1);
    }
    decrement() {
        return (Counter.count = Counter.count - 1);
    }
}
Counter.count = 0;
const instance1 = new Counter(); // different memory
const instance2 = new Counter(); // different memory
console.log(instance1.increment(), instance2.increment());
