function RecursionFunction(node) {
  let nextArray = [];
  console.log(node.nodeIndex);

  node.nextNode.forEach((element) => {
    if (element.nextNode.length > 0) {
      nextArray = [...new Set([...nextArray, ...element.nextNode])];
    }
  });
  console.log(nextArray);
  //   RecursionFunction(nextArray);
}
module.exports = { RecursionFunction };
