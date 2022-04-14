let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// ["sales","development","sites","internals"]
//Returns 6700
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // console.log("department :>> ", department);
    return department.reduce((prev, current) => prev + current.salary, 0);
  }
  let sum = 0;
  for (let subdep of Object.values(department)) {
    // console.log("subdep :>> ", subdep);
    sum += sumSalaries(subdep);
  }
  return sum;
}
// console.log(sumSalaries(company));

//  [
//     { name: 'John' },
//     { name: 'Alice' },
//     { name: 'Peter' },
//     { name: 'Alex' },
//     { name: 'Jack' }
//   ]
function getEmployeeNamesObjectsArray(department) {
  if (Array.isArray(department))
    return department.map((item) => {
      return { name: item.name };
    });
  let names = [];
  for (let subdep of Object.values(department)) {
    let subDepNames = getEmployeeNamesObjectsArray(subdep);
    names = names.concat(subDepNames); // recursively call for subdepartments, sum the results
  }
  return names;
}
// console.log(getEmployeeNamesObjectsArray(company));
/*
getEmployeeNamesObjectsArray(company)
Object.values(department) = 
[

  [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
  },
]

loop 1:
subdep =   
[
    { name: "John", salary: 1000 }, map loop 1: { name: item.name=John },
    { name: "Alice", salary: 600 }, map loop 2: { name: item.name=Alice }
]
names=[{ name: John }, { name: Alice },] //line 46

loop 2:
subdep = 
{
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
},
      *** new obj values ***
      Object.values(department) = 
      [
        [
          { name: "Peter", salary: 2000 },  
          { name: "Alex", salary: 1800 },
        ],
        [{ name: "Jack", salary: 1300 }]
      ]

    **** inner loop 1:
        subdep =
        [
          { name: "Peter", salary: 2000 }, //map iiner loop 1: { name: item.name=Peter}
          { name: "Alex", salary: 1800 }, //map iiner loop 1: { name: item.name=Alex}
        ]
        names=[{ name: John }, { name: Alice },{name: Peter}, {name:Alex}] //line 46
    
    **** inner loop 2:
        subdep = [{ name: "Jack", salary: 1300 }] //map iiner loop 2: { name: item.name=Jack}
        names=[{ name: John }, { name: Alice },{name: Peter}, {name:Alex}, {name: Jack}] //line 46

        return names=[{ name: John }, { name: Alice },{name: Peter}, {name:Alex}, {name: Jack}] //line 48
*/

function getEmployeeNameSalary(department) {
  if (Array.isArray(department))
    return department.reduce(function (prev, current) {
      // console.log(prev, current);
      prev[current.name] = current.salary; //subDeptObj = { John:1000, Alice:600 }; // obj.d shine key ogoh
      return prev;
    }, {});
  let nameSalary = {}; //{Bat:6}
  for (let subdep of Object.values(department)) {
    let subDeptObj = getEmployeeNameSalary(subdep);
    // console.log("subDeptObj :>> ", subDeptObj);
    for (let key in subDeptObj) {
      // console.log("key :>> ", key); // John
      // console.log("object :>> ", subDeptObj[key]); // 1000
      nameSalary[key] = subDeptObj[key]; // nameSalary[key]-->John = subDeptObj[key]-->1000;
      // nameSalary["Bat"] = 100; //updated
      // nameSalary["Bold"] = 200; //created
    }
  }
  return nameSalary;
}
console.log(getEmployeeNameSalary(company));
/*
  [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
  ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
*/
//[ 'John', 'Alice', 'Peter', 'Alex', 'Jack' ]
function getEmployeeNameInArray(department) {
  if (Array.isArray(department)) return department.map((item) => item.name);
  let names = [];
  for (let subdep of Object.values(department)) {
    names = names.concat(getEmployeeNameInArray(subdep));
  }
  return names;
}

// console.log(getEmployeeNameInArray(company));

// let a = [
//   { name: "Peter", salary: 2000 },
//   { name: "Alex", salary: 1800 },
// ];

// function sum(arr) {
//   return arr.reduce((prev, current) => prev + current.salary, 0);
// }
// console.log(sum(a));
