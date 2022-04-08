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

let a = {
  b: 1,
  c: 2,
  d: 3,
};

function printNode(obj) {
  for (let key in obj) {
    console.log("key :>> ", key);
    if (obj.children !== null) {
      console.log("obj.children :>> ", obj.children);
      for (let chObj in obj.children) {
        console.log("chObj :>> ", chObj[0]);
      }
    }
  }
  //   for (let key of node) {
  //     if(obj.children == null){

  // }else {
  //     for(let obj of children){

  //     }
  // }
  //   }
}
printNode(node1);
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
