function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}

const flowers = new TreeNode("flowers");
const subtropicalFlowers = new TreeNode("subtropicalFlowers");
const temperateFlowers = new TreeNode("temperateFlowers");
const bouganvillea = new TreeNode("bougainvillea");
const roses = new TreeNode("roses");
const daffodils = new TreeNode("daffodils");
// associate root with is descendents
flowers.descendents.push(subtropicalFlowers);
flowers.descendents.push(temperateFlowers);
subtropicalFlowers.descendents.push(bouganvillea);
temperateFlowers.descendents.push(roses);
temperateFlowers.descendents.push(daffodils);

/*
1.[5] Write a function to return an object Array 
that gives the node names and children count like below.

  [
    { name: 'flowers', children: 2 },
    { name: 'subtropicalFlowers', children: 1 },
    { name: 'bougainvillea', children: 0 },
    { name: 'temperateFlowers', children: 2 },
    { name: 'roses', children: 0 },
    { name: 'daffodils', children: 0 }
  ]*/
// console.log("flowers :>> ", flowers);

// function flatternTree(flowers) {
//   if (flowers == null) return;
//   let leaves = [];
//   let count = 0;
//   for (let key in flowers) {
//     if (Array.isArray(flowers[key]) || typeof flowers[key] != "object") {
//       ++count;
//       let leaf = { name: flowers[key], children: count }; //{ name: 'flowers', children: 0 }

//       leaves.push(leaf);
//     } else {
//       leaves = leaves.concat(flatternTree(flowers));
//     }
//   }
//   return leaves;
// }
// console.log(flatternTree(flowers));

// function flatternTree(flowers) {
//   if (Array.isArray(flowers))
//     return flowers.reduce(function (prev, current) {
//       // console.log(prev, current);
//       prev[current.name] = current.salary; //subDeptObj = { John:1000, Alice:600 }; // obj.d shine key ogoh
//       return prev;
//     }, {});
//   let nameSalary = {}; //{Bat:6}
//   for (let subdep of Object.values(flowers)) {
//     let subDeptObj = flatternTree(subdep);
//     // console.log("subDeptObj :>> ", subDeptObj);
//     for (let key in subDeptObj) {
//       // console.log("key :>> ", key); // John
//       // console.log("object :>> ", subDeptObj[key]); // 1000
//       nameSalary[key] = subDeptObj[key]; // nameSalary[key]-->John = subDeptObj[key]-->1000;
//       // nameSalary["Bat"] = 100; //updated
//       // nameSalary["Bold"] = 200; //created
//     }
//   }
//   return nameSalary;
// }
// console.log(flatternTree(flowers));

function flatternTree(flowers) {
  if (flowers == null) return;
  let leaves = [];
  for (let key in json) {
    if (Array.isArray(flowers[key]) || typeof flowers[key] != "object") {
      let leaf = { name: flowers[key] };
      leaf[key] = flowers[key];
      leaves.push(leaf);
    } else leaves = leaves.concat(reverseJson(flowers[key]));
  }
  return leaves;
}
console.log(flatternTree(flowers));

/* ********** 2.[3] Count the number of leaf nodes *************** */
function countLeaves(flowers) {
  if (Array.isArray(flowers) || typeof flowers != "object") return 1;
  let count = 1;
  for (let key in flowers) {
    count += countLeaves(flowers[key]);
  }
  return count;
}
// console.log("counted: " + countLeaves(flowers));
