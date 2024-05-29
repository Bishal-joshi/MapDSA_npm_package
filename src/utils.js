function RecursionFunction(node) {
  // if (node.nextNode.length == 0) return;
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
    RecursionFunction(element);
  });
}
module.exports = { RecursionFunction };
