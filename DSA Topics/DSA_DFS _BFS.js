//DFS
// pre order Traversal :  root left right
// in order Traversal :   left root right
// post order Traversal : left right root

class TreeNode{
    constructor(value){
        this.value=value;
        this.left= null;
        this.right= null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    makeTree(value){
        let newNode = new TreeNode(value)
        if(this.root === null){
            this.root= newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null ){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
             if(root.right === null ){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }

    }
    searchNode(root,target){
        if(root !== null){
             if(root.value === target){
                return true;
            }
            else if(root.value < target){
              return  this.searchNode(root.right,target)
            }else{
              return  this.searchNode(root.left,target)
            }
        } 
        return false;
          
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    bfsTraversal(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            if(curr.left){
                  queue.push(curr.left)
            }
            if(curr.right){
                  queue.push(curr.right)
            }
            console.log(curr.value)
        }
    }
    isEmpty(){
        return this.root === null;
    }
}

let tree = new BST()

tree.makeTree(10)
tree.makeTree(12)
tree.makeTree(8)
tree.makeTree(15)
tree.makeTree(6)
tree.makeTree(18)
tree.makeTree(4)
tree.bfsTraversal()

// tree.preOrder(tree.root)
// tree.inOrder(tree.root)
// tree.postOrder(tree.root)

// console.log(tree)

