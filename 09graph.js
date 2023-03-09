class Graph {
  constructor() {
    this.node = 0;
    this.adjacentList = {};
  }

  addVertex(nodo) {
    this.adjacentList[nodo] = [];
    this.nodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();
