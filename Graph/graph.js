class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  };

  addEdge = (v1, v2) => {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  };

  removeEdge = (v1, v2) => {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  };

  removeVertex = (vertex) => {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  };

  DFSR = (startingVertex) => {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    (function dfshelper(vertex) {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);
      for (let element of adjacencyList[vertex]) {
        if (!visited[element]) {
          return dfshelper(element);
        }
      }
    })(startingVertex);
    return result;
  };

  DFSI(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS = (start) => {
    let queue = [];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  };
}

g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

//g.removeEdge("Tokyo", "Dallas");
//g.removeVertex("Tokyo");
console.log(g);
console.log(g.DFSR("Tokyo"));
console.log(g.DFSI("Tokyo"));

/*
     dallas
   /  |   \
tokyo |   Aspen 
\     |      |
 hong kong--los angeles
*/
