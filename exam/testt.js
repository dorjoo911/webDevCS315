let json = {
  glossary: {
    title: "example glossary",
    GlossSeeAlso: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para: "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML", "S"],
          },
          GlossSee: "markup",
        },
      },
    },
  },
};
let json2 = { a: 1, b: { c: 2 }, d: [1, 2] };
function reverseJson(json) {
  if (json == null) return;
  let leaves = [];
  for (let key in json) {
    if (Array.isArray(json[key]) || typeof json[key] != "object") {
      let leaf = {};
      
      leaf[]
      leaf[key] = key;
      leaves.push(leaf);
    } else leaves = leaves.concat(reverseJson(json[key]));
  }
  return leaves;
}
console.log(reverseJson(json));

// function reverseJson(json) {
//   if (json == null) return;
//   let leaves = [];
//   for (let key in json) {
//     if (Array.isArray(json[key]) || typeof json[key] != "object") {
//       let leaf = {};
//       leaf[key] = json[key];
//       leaves.push(leaf);
//     } else leaves = leaves.concat(reverseJson(json[key]));
//   }
//   return leaves;
// }
// console.log(reverseJson(json));

function countLeaves(json) {
  if (Array.isArray(json) || typeof json != "object") return 1;
  let count = 0;
  for (let key in json) {
    count += countLeaves(json[key]);
  }
  return count;
}
console.log(countLeaves(json));
