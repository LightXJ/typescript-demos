function add(x: number, y: number) {
  return x+y;
}

console.log(add)

let a:never;
let c:string = a;


// let mySum:(x:number, y:number)=> void = function (x:number, y:number) {
//   let z =  x + y;
// };

// console.log(mySum(1,2));



// 推断类型
// myAdd has the full function type
// let myAdd = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };




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
function buildName(firstName: string, ...restOfName: string[]) {
  console.log(typeof restOfName);
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;



// 重载
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
  }
}


enum Color {Red, Green, Blue}
let colorName: Color = Color.Green;

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2