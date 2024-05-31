const { RecursionFunction } = require("./src/utils");
class MapDSA {
  headNode = null;
  static index = 0; //fgiving index to each nodes
  static allnodes = []; //storing all nodes
  constructor() {
    this.headNode = new this.MapNode(0, 0, 0);
  }

  addNode(x, y, magnitude, nodeIndex) {
    // if nodeIndex pathayena vane head ko next ma add else nodeIndex ko next ma
    const newNode = new this.MapNode(x, y, magnitude);
    if (!nodeIndex) {
      this.headNode.nextNode.push(newNode);
      return;
    }
    if (this.isNodePresent(nodeIndex)) {
      // get node value
      const node = MapDSA.allnodes[nodeIndex];
      node.nextNode.push(newNode);
      return nodeIndex;
    }
  }

  // vako node lai push, map draw garda kaam lagchha
  addExistingNode(node, toNode) {
    toNode.nextNode.push(node);
  }

  showAllNodes() {
    if (this.headNode.nextNode.length < 1) {
      console.log(this.headNode.toString());
      return;
    }

    RecursionFunction(
      this.headNode,
      MapDSA.allnodes.map((d) => d.nodeIndex) //array of id passing [0,1,2,3..]
    );
  }

  isNodePresent(index) {
    return index < MapDSA.allnodes.length ? true : false;
  }

  //return node from index
  returnNode(index) {
    return this.isNodePresent(index) ? MapDSA.allnodes[index] : undefined;
  }
  MapNode = class {
    constructor(x_cordinate, y_cordinate, magnitude) {
      this.x_cordinate = x_cordinate;
      this.y_cordinate = y_cordinate;
      this.magnitude = magnitude;
      this.nextNode = [];
      // every time new node is created increase the index, and push in allnodes
      this.nodeIndex = MapDSA.index++;
      MapDSA.allnodes.push(this);
    }

    toString() {
      return `(${this.x_cordinate},${this.y_cordinate}) ${this.magnitude} ${this.nodeIndex}`;
    }
  };
}

const mapdsa = new MapDSA();
mapdsa.addNode(10, 10, 20);
mapdsa.addNode(30, 40, 20);
mapdsa.addNode(30, 10, 20);
mapdsa.addNode(50, 50, 50, 1);
mapdsa.addNode(50, 50, 50, 2);

mapdsa.addExistingNode(MapDSA.allnodes[5], MapDSA.allnodes[1]);

mapdsa.addNode(10, 10, 20, 5);
mapdsa.showAllNodes();
// console.log(mapdsa.returnNode(3));
// console.log(MapDSA.allnodes);
