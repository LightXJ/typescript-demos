// 函数声明
// function sum(x: number, y: number): number{
//   return x+y;
// }

// 函数表达式
// let mySum = function (x: number, y: number): number {
//   return x + y;
// }

// 完整的函数类型
// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//   return x + y;
// }

// 参数可以指定其他名称
// let mySum: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
//   return x + y;
// }

// 书写完整的函数类型时
//不写返回值=>number会报错
// let mySum: (x: number, y: number) = function (x: number, y: number): number {
//   return x + y;
// }

// 函数声明, 通常省略返回值类型
// function sum(x: number, y: number){
//   return x+y;
// }

// 用接口表示函数类型
// interface SumFunc {
//   (baseValue: number, increment: number): number;
// }

// let mySum: SumFunc;
// mySum = function(x: number, y: number): number{
//   return x + y;
// }


// 可以不指定类型，类型系统会推断参数类型
// interface SumFunc {
//   (baseValue: number, increment: number): number;
// }

// let mySum: SumFunc;
// mySum = function(x,y){
//   return x + y;
// }

// 参数必须
// function sum(x: number, y: number){
//   return x+y;
// }
// let result = sum(1, 2, 4);

// 可选参数
// function buildName(firstName: string, lastName?: string) {
//   if (lastName){
//     return firstName + " " + lastName;
//   }
//   return firstName;
// }

// let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right


// 默认参数
// function buildName(firstName: string, lastName = "Smith") {
//   return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right

// 默认参数不必放在必须参数后面
function buildName(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"


// 剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");



