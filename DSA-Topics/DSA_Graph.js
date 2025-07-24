class Graph{
    constructor(){
        this.data = {}
    }

    addVertex(vertex){
        if(!this.data[vertex]){
            this.data[vertex] = []
        }
    }
    removeVertex(vertex){
        if(this.data[vertex]){
        for(let item of this.data[vertex]){
            this.removeEdge(vertex,item)
        }
        delete this.data[vertex] 
        }
    }

    addEdges(v1,v2){
        if(!this.data[v1]){
            this.addVertex(v1)
        }
        if(!this.data[v2]){
            this.addVertex(v2)
        }

        this.data[v1].push(v2)
        this.data[v2].push(v1)
    }

    removeEdge(v1, v2) {
    if (this.data[v1]) {
        this.data[v1] = this.data[v1].filter((vertex) =>
             vertex !== v2
        );
    }
    if (this.data[v2]) {
        this.data[v2] = this.data[v2].filter((vertex) =>
             vertex !== v1
        );
    }
    }

}

const graph = new Graph()
graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")
graph.addVertex("d")
graph.addEdges("a","d")
graph.addEdges("a","c")
graph.addEdges("a","b")
graph.removeVertex("b")
console.log(graph.data)



// remove Edge method without inbuilt function

// removeEdge(v1, v2) {
//         
//         if (this.data[v1]) {
//             const arr = this.data[v1];
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] === v2) {
//                     for (let j = i; j < arr.length - 1; j++) {
//                         arr[j] = arr[j + 1];
//                     }
//                     arr.length = arr.length - 1; 
//                     break;
//                 }
//             }
//         }
//        
//         if (this.data[v2]) {
//             const arr = this.data[v2];
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] === v1) {
//                     for (let j = i; j < arr.length - 1; j++) {
//                         arr[j] = arr[j + 1];
//                     }
//                     arr.length = arr.length - 1;
//                     break;
//                 }
//             }
//         }
//     }