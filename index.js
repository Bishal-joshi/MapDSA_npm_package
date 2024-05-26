class MapDSA {
  headNode = null;
  static index = 0; //fgiving index to each nodes
  static allnodes = []; //storing all nodes
  constructor() {
    this.headNode = new this.MapNode(0, 0, 0);
  }

  addNode(x, y, magnitude, whose) {
    // if whose pathayena vane head ko next ma add else whose ko next ma
    const newNode = new this.MapNode(x, y, magnitude);
    if (!whose) {
      this.headNode.nextNode.push(newNode);
      return;
    }
    whose.nextNode.push(newNode);
  }

  showAllNodes() {
    if (this.headNode.nextNode.length < 1) {
      console.log(this.headNode.toString());
      return;
    }
    console.log(this.headNode.toString()); //1st node
    this.headNode.nextNode.forEach((element) => {
      console.log(element.toString());
    });
  }

  // isNodePresent(index) {
  //   index < MapDSA.allnodes.length ? true : false;
  // }
  //return node from index
  returnNode(index) {
    if (index < MapDSA.allnodes.length) {
      return MapDSA.allnodes[index];
    }
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
mapdsa.addNode(30, 10, 20);
mapdsa.addNode(30, 10, 20);

mapdsa.showAllNodes();
// console.log(mapdsa.returnNode(1));
// console.log(MapDSA.allnodes);

// Creating an instance of MapDSA to access the inner class MapNode
// const mapDSA = new MapDSA();
// const MapNode = mapDSA.MapNode;

// // Usage
// const apple = new MapNode(0, 0, 19);
// console.log(apple.toString());
