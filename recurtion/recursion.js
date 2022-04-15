// ********************* PART I ***************************

// let list = { value: 1 };
// list.next = { value: 2 };
// let newList = { value: 3, next: list };

// function get() {
//   console.log(newList.next.next.value);
// }

// let a = { value: "A", next: { value: "B", next: { value: "C" } } };

// remove B
// let b = a.next;
// let c = b.next;
// a.next = c;
// console.log("a :>> ", a);

// B end of the line
// b.next = null;
// a.next.next = b;
// c.next = { value: "B" };
// console.log("a :>> ", a);
// a = {
//   value: "A",
//   next: { value: "B", next: { value: "C", next: { value: "Z" } } },
// };
// Z between B and C
// c.next = { value: "Z", next: a.next.next };
// let c;
// c = a.next.next;
// console.log("c :>> ", c);
// a.next.next = { value: "Z" };
// // console.log("a :>> ", a);
// a.next.next.next = { value: "C" };

// console.log("a :>> ", a);

// function printValues() {
//   if (list == null) return;
//   console.log(list.value);
//   list = printValues(list.next);
// }
// console.log("object :>> ", printValues(linkedList));
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// console.log("start :>> ");
// function printListValues(list) {
//   if (list.next == null) {
//     console.log(list.value);
//   } else {
//     printListValues(list.next);
//     console.log(list.value);
//   }
// }
// printListValues(list);

// ********************* Department ***************************
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
// console.log(getEmployeeNameSalary(company));
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

// ********************* PART II ***************************
let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};

let node4 = {
  name: "label",
  value: "Name",
  children: null,
};

let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};

let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};

let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};
function collectNames(list) {
  let names = [];
  while (list != null) {
    names.push(list.value);
    list = list.next;
  }
  return names;
}
// console.log(collectNames(linkedList));

function collectNamesRec(list) {
  if (list == null) return null;

  let values = collectNamesRec(list.next);
  return [list.value].concat(values);
}
// console.log(collectNamesRec(linkedList));

function printValues(list) {
  if (list == null) return;
  console.log(list.value);
  printValues(list.next);
}
// printValues(linkedList);

function iterateList(newList) {
  do {
    console.log(newList.value);
    newList = newList.next;
  } while (newList != null);
}
function nodeArray(list) {
  let arr = [];
  if (list.children == null) {
    return list.name;
  } else {
    for (let child of list.children) {
      let subNode = nodeArray(child);
      arr = arr.concat(subNode);
    }
  }
  return arr;
}
// nodeArray(node1);

function nodeTree(list) {
  if (list.children == null) {
    return;
  } else {
    console.log(list.name + ":" + list.value);
    for (let child of list.children) {
      nodeTree(child);
    }
  }
}
// nodeTree(node1);

// ********************* HOMERS ***************************

function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function ListNode(value) {
  this.value = value;
}
//1
function printNames(root) {
  console.log(root.value);
  for (let child of root.descendents) {
    printNames(child);
  }
}
// printNames(abe);
//2
function contains(root, target) {
  if (root.value == target) return true;
  for (let child of root.descendents) {
    let found = contains(child, target);
    if (found) return true;
  }
  return false;
}

// console.log(contains(abe,"Lisa"));
//3
function findSubtree(root, target) {
  if (root.value == target) return root;
  for (let child of root.descendents) {
    let tree = findSubtree(child, target);
    if (tree) return tree;
  }
  return null;
}
console.log(findSubtree(abe, "sdfsdfs"));

function ListNode(value) {
  this.value = value;
}
//4
function generateList(root) {
  let linkedList = new ListNode(root.value); //{value:"abe"} //2nd {value:"homer"}
  let list = linkedList; // homer.next = maggie
  for (let eachChild of root.descendents) {
    //{Homer}, {lisa},{bart}

    list.next = generateList(eachChild);
    list = list.next;

    // linkedList.next = generateList(eachChild);
  }
  return linkedList;
}

let linkedList = generateList(abe);
// console.log(linkedList);

//5
function findListNode(list, node) {
  if (list == null) return null;
  if (list.value == node) return list;
  return findListNode(list.next, node);
}
// console.log(findListNode(linkedList,"Lisa"))

//6
function treeModifier(root, modifierFunc) {
  root.value = modifierFunc(root.value);
  for (let child of root.descendents) {
    treeModifier(child, modifierFunc);
  }
}
//allCaps
// treeModifier(abe, (treeNode)=> treeNode.toUpperCase());
// console.log(abe);
// //reverse String
// treeModifier(abe, (node)=>node.split("").reverse().join(""));
// console.log(abe);
// //add Stars
// treeModifier(abe,(node)=>"***"+node+"***");
// console.log(abe);

//7
function treeCollector(tree) {
  let names = [tree.value];
  for (let child of tree.descendents) {
    names = names.concat(treeCollector(child));
  }
  return names;
}
// console.log(treeCollector(abe))
