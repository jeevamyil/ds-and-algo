class Graph {
  constructor() {
    this.adjacenyList = {};
  }
  addVertex = (vertex) => {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
    }
  };

  addEdge = (v1, v2) => {
    this.adjacenyList[v1].push(v2);
    this.adjacenyList[v2].push(v1);
  };
}
