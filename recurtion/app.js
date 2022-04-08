// function recPow(x, y) {
//   if (y == 1) return x;
//   return x * recPow(x, y - 1);
// }
// function findLetter(str, letter) {
//   if (str.length == 0) return 0;
//   return 1 + findLetter();
// }

// let array = [1, 2, 3];
// function sum(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }
// // console.log("sum(res) :>> ", sum([1, 2, 3]));

// function recSum(arr) {
//   if (arr.length == 1) return 0;
//   else return arr[0] + recSum(arr.slice(1));
// }
// console.log("resSum :>> ", recSum([1, 2, 3]));

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ], //subdepartments
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };
// let a;

// console.log("a :>> ", a);
// a = { a: d };
// a = [1, 2, 3];

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.reduce((prev, current) => prev.concat(current.name), []); // sum the array
//   } else {
//     // case (2)
//     let sum = [];
//     for (let subdep of Object.values(department)) {
//       sum = sum.concat(sumSalaries(subdep)); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }
// function namesOfCompany(department) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.map(function (item) {
//       return { name: item.name };
//     }); // sum the array
//   } else {
//     // case (2)
//     let name = [];
//     for (let subdep of Object.values(department)) {
//       name = name.concat(namesOfCompany(subdep)); // recursively call for subdepartments, sum the results
//     }
//     return name;
//   }
// }
// console.log("samSalaries(company) :>> ", namesOfCompany(company));

// function namesOfCompany(department) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.map(function (item) {
//       return { name: item.salary };
//     }); // sum the array
//   } else {
//     // case (2)
//     let name = {};
//     for (let subdep of Object.values(department)) {
//       name = name.concat(namesOfCompany(subdep)); // recursively call for subdepartments, sum the results
//     }
//     return name;
//   }
// }
// console.log("samSalaries(company) :>> ", namesOfCompany(company));
