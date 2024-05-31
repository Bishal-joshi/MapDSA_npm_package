function RecursionFunction(node, allnodes) {
  if (!allnodes.includes(node.nodeIndex)) return;
  // if contains then pop
  allnodes.splice(allnodes.indexOf(node.nodeIndex), 1);

  let nextArray = [];

  let a = node.nodeIndex + " ";
  node.nextNode.forEach((element) => {
    // console.log(element.toString());
    a = a + element.nodeIndex;

    if (element.nextNode.length > 0) {
      nextArray = [...new Set([...nextArray, element])];
    }
  });
  console.log(a);

  nextArray.forEach((element) => {
    RecursionFunction(element, allnodes);
  });
}
module.exports = { RecursionFunction };

// algorithm
// node aayo -> all child lai print + push in array-> all array lai loop-> one by one repeat
// function RecursionFunction(node) {
//   let nextArray = [];

//   let a = node.nodeIndex + " ";
//   node.nextNode.forEach((element) => {
//     // console.log(element.toString());
//     a = a + element.nodeIndex;

//     if (element.nextNode.length > 0) {
//       nextArray = [...new Set([...nextArray, element])];
//     }
//   });
//   console.log(a);

//   nextArray.forEach((element) => {
//     RecursionFunction(element);
//   });
// }
// yesko problem was 5-6 2 choti print vo so already print vako rokne
// const mapdsa = new MapDSA();
// mapdsa.addNode(10, 10, 20);
// mapdsa.addNode(30, 40, 20);
// mapdsa.addNode(30, 10, 20);
// mapdsa.addNode(50, 50, 50, 1);
// mapdsa.addNode(50, 50, 50, 2);

// mapdsa.addExistingNode(MapDSA.allnodes[5], MapDSA.allnodes[1]);

// mapdsa.addNode(10, 10, 20, 5);
// mapdsa.showAllNodes();
