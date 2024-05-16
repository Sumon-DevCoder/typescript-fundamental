// What is Typescript ?
// Type + Javascript =  Typescript

// TS is an object oriented programming language and  it is a superset of javascript that adds static typing javascript and other
// features ( enum, interfaces, tuple, generics ) to enhance javascript development. It was developed by Microsoft based on javascript.
// It's made for large scale projects.

// Disadvantage :
// ts can not be run directly in browser  and typescript compiler to convert to js.
// Type complexities
// Limited library support

// Advantage :
// Check error on compile time
// Add types like: number, string, boolean, undefined, null, void, array, alias etc.
// We can add object oriented way to ts
// Code is well managed
// Its increase security, scalability,  readability and code quality
// It adds a static type to js so that we can handle errors at compile time before running the program.
// It can be used both on the client and server side.
// Intellisense IDE( integrated development environment ) support system: while coding: code completion.

// Nvm - node version manager ? - - for switching node version deprecated to latest

// Typescript file > index.ts to convert index.js
// Setup typescript environment
// npm init - y

// Install typescript
// Global : npm i -g typescript
// Local : npm i -save-dev typescript
// Check install or not : tsc –version

// Typescript file > index.ts to convert index.js
// Split terminal : one side - tsc index.ts for compile to js  / direct auto compile - tsc index.ts –watch
// 		2nd side -  node index.js for checking for output

// Data Types
// Any (super type)
// Built in types: number, string, boolean, void, null, undefined, symbol etc.
// User defined types: arrays, enums, classes, interfaces etc.

// Paradigm:
// Procedural Programming -> একটা রেসিপি এর মতো। কিছু টাস্ক দিবেন করার জন্য, সে সেটা উপর থেকে নিচের দিকে একটা একটা করতে থাকবে।
// খুব বেশি ডাটা ফোকাস না। কিভাবে জিনিস গুলো ঘটবে সেটার নির্দিষ্ট সিসটেম বলে দিতে হয়। যেমনঃ c programming.

// Functional Programming -> সব কিছু এখানে ফাংশনের সাহায্যে হয়ে থাকে। ফাংশন এখানে বস। যে language গুলো দিয়ে এই paradigm ফলো করা যায়
// সেই language এ ফাংশন হলো first-class citizen মানে ফাংশনের মধ্যে ফাংশন পাঠাতে পারবেন, আবার ফাংশন থেকে ফাংশন রিটার্ন করতে পারবেন।
// এখানে pure function এর দিকে ফোকাস দেওয়া হয়। যেমনঃ Haskell

// Object oriented programming -> সব কিছু কে ছোট ছোট object আকারে বানানো হয়। তারপর সেগুলো জোড়া লাগায় বড় একটা application বানানো হয়।
// যেমন ধরতে পারেন application টা বাসা, আর প্রতিটা object একটা করে ইট। প্রতিটা object এর মধ্যে সেটার ডাটা গুলো থাকে (attribute) আর কিছু
// behavior বা action (methods) বলে দেওয়া থাকে। object গুলো আবার একে অপরের সাথে communicate করতে পারে। যেমনঃ Java

// Event-Driven Programming -> এই paradigm অনেক বেশি reactive। মানে আগে একটা event ঘটবে তারপর সেটার একটা রেস্পন্স জেনারেট হবে। প্রোগ্রাম
// সব সময় অপেক্ষা করতে থাকে যে কখন একটা ইভেন্ট ঘটবে। এখন এই ইভেন্ট যে কোন ধরেনের হতে পারে। হতে পারে ইউজার ইন্ট্রাকশন বা কোন সেন্সর
// থেকে রিডিং নেওয়া। আলাদা আলাদা ইভেন্ট এর জন্য আলাদা আলাদা listener থাকে।
