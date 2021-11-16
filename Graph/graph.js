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

  removeEdge = (v1, v2) => {
    this.adjacenyList[v1] = this.adjacenyList[v1].filter((v) => v !== v2);
    this.adjacenyList[v2] = this.adjacenyList[v2].filter((v) => v !== v1);
  };

  removeVertex =(vertex)=>{
    while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }
}
