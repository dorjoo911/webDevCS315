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

function printListValues(json) {
  if (json == null) return;
  let leaves = [];
  for (let key in json) {
    if (Array.isArray(json[key])) {
      console.log("json[key] :>> ", json[key]);
      //   let leaf = {};
      leaf[key] = json[key].name;
      console.log("json[key].name; :>> ", json[key].name);
      //   leaves.push(leaf);
      //   console.log("leaves :>> ", leaves);
      // } else leaves = leaves.concat(printListValues(json[key]));
    }
    // return leaves;
  }
}
printListValues(node1);
