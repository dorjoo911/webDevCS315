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

function nodeArray(list) {
  let arr = [];
  if (list.children == null) {
    return list.name;
  } else {
    for (let child of list.children) {
      let subNode = nodeArray(child);
      arr = arr.concat(subNode);
      console.log("arr :>> ", arr);
    }
  }
  return arr;
}
// nodeArray(node1);

function nodeTree(list) {
  if (list.children == null) {
    // console.log(list.name + ":" + list.value);
    return;
    // console.log(list.name + ":" + list.value);
  } else {
    // console.log(list.name + ":" + list.value);
    for (let child of list.children) {
      // list = child;
      // console.log(list.name + ":" + list.value);
      nodeTree(child);
      console.log(list.name + ":" + list.value);
    }
    // console.log(list.name + ":" + list.value);
  }
  // return console.log(list.name + ":" + list.value);
}
// nodeTree(node1);

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

function generateList(root) {
  if (root.descendents == null || root.descendents.length == 0)
    return new ListNode(root.value);
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
console.log(JSON.stringify(generateList(abe)));

// let linkedList = generateList(abe);
// let linkedList = {value:1,next:{value:2,next:{value:3,next:{value:4}}}}

function targetValue(list) {
  // if(contains(value, "Lisa")) return true;
  // for (let child of list)
  search(list, "Lisa", "next", true);
}
// targetValue(linkedList);
