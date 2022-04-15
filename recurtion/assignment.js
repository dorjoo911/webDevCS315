function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

//1
function printNames(root) {
    console.log(root.value);
    for(let child of root.descendents){
        printNames(child);
    }
        
}
// printNames(abe);
//2
function contains(root,target){
    if(root.value==target)
        return true;
    for(let child of root.descendents){
        let found = contains(child,target);
        if(found)
            return true;
    }
    return false;
}

// console.log(contains(abe,"Lisa"));
//3
function findSubtree(root,target){
    if(root.value==target)
        return root;
    for(let child of root.descendents){
        let tree = findSubtree(child,target);
        if(tree)
            return tree;
    }
    return null;
}
console.log(findSubtree(abe,"sdfsdfs"));

function ListNode(value){
    this.value = value;
}
//4
function generateList(root){
    let linkedList = new ListNode(root.value);//{value:"abe"} //2nd {value:"homer"}
    let list=linkedList;// homer.next = maggie
    for(let eachChild of root.descendents){//{Homer}, {lisa},{bart}
        
        list.next = generateList(eachChild);
        list = list.next;
        
        // linkedList.next = generateList(eachChild);
    }
    return linkedList;
}

let linkedList = generateList(abe);
// console.log(linkedList);

//5
function findListNode(list,node){
    if(list==null)
        return null;
    if(list.value==node)
        return list;
    return findListNode(list.next,node);
}
// console.log(findListNode(linkedList,"Lisa"))

//6
function treeModifier(root,modifierFunc){
    root.value = modifierFunc(root.value);
    for(let child of root.descendents){
        treeModifier(child,modifierFunc);
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
function treeCollector(tree){
    let names = [tree.value];
    for(let child of tree.descendents){
        names=names.concat(treeCollector(child));
    }
    return names;
}
// console.log(treeCollector(abe))