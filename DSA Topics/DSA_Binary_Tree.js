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
    minValue(root){
        if(!root.left){
            return root.value;
        }else{
            return this.minValue(root.left)
        }
    }
    maxValue(root){
        if(!root.right){
            return root.value;
        }else{
            return this.maxValue(root.right)
        }
    }
     deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
           

            // Case 1: No child (leaf)
            if (root.left === null && root.right === null) {
                return null;
            }
            // Case 2: One child
            else if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }
            // Case 3: Two children
            else {
                
                let minVal = this.minValue(root.right);
                root.value = minVal;
                
                root.right = this.deleteNode(root.right, minVal);
            }
        }
        return root;
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



console.log(tree.deleteNode(tree.root, 12))
// console.log(tree)

