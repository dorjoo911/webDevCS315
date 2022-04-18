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
// console.log(JSON.stringify(generateList(abe)));
// let linkedList = generateList(abe);

// let linkedList = {value:1,next:{value:2,next:{value:3,next:{value:4}}}}

function traverse(list) {
  if (list.value == "Lisa") return console.log("true :>> ", true);
  list = list.next;
  return traverse(list);
}
// traverse(linkedList);

let simpleObject = { a: 1, b: 2, c: { a: [1, 2] } };
function countNodes(list) {
  if (list == null) return 0;
  return 1 + countNodes(list.next);
}
// console.log(countNodes(linkedList));

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
// iterateList(abe);
