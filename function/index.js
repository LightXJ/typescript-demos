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
function sum(x, y) {
    return x + y;
}
var result = sum(1, 2, 4);
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   return source.search(subString) !== -1;
// }
// 函数没有输出，返回值类型为void
// function warnUser(): void {
//   console.log("This is my warning message");
// }
// interface NumberArray {
//   [index: string]: number
// }
// let fibonacci: NumberArray = [1,1,2,3,5];
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   return source.search(subString) !== -1;
// }
// let mySum:(x:number, y:number)=> void = function (x:number, y:number) {
//   let z =  x + y;
// };
// console.log(mySum(1,2));
// 推断类型
// myAdd has the full function type
// let myAdd = function(x: number, y: number): number { return x + y; };
// The parameters `x` and `y` have the type number
var myAdd = function (x, y) { return x + y; };
// 参数：传递给一个函数的参数个数必须与函数期望的参数个数一致
// function buildName(firstName: string, lastName: string) {
//   return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right
// 在参数名旁使用 ?实现可选参数
// function buildName(firstName: string, lastName?: string) {
//   if (lastName)
//       return firstName + " " + lastName;
//   else
//       return firstName;
// }
// let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right
// 参数默认值
// function buildName(firstName: string, lastName = "Smith") {
//   return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right
// 带默认值的参数可以放到必须参数前面，但是用户必须明确传入undefied
// function buildName(firstName = "Will", lastName: string) {
//   return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
// let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
// 剩余参数
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(typeof restOfName);
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
// 重载
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorName = Color.Green;
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
