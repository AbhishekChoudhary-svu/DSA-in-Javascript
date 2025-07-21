class Stack{
    constructor(){
        this.stack=[]
    }
    push(item){
        this.stack.push(item);
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    isEmpty(){
        return this.stack.length === 0;
    }
}

const stack = new Stack;
stack.push(11)
stack.push(12)
stack.push(13)
stack.push(14)
stack.push(15)
// console.log(stack)

// using linkedlist 


class Node{
    constructor(data){
        this.data=data;
        this.next= null;
    }
}

class StackLinkedList {
     constructor(){
        this.top=null;
        this.size= 0;
    }
    push(data){
        const newNode = new Node(data)
        newNode.next= this.top;
        this.top= newNode
        this.size++;
    }
   
    pop(){
        if(this.isEmpty()){
            return "The List Is Already Empty"
        }
        const item = this.top.data
        this.top=this.top.next;
        this.size--;
        return item;
    }
    peek(){
        return this.top.data;
    }
  
    isEmpty(){
        return this.size ===0;
    }

}

const stackll = new StackLinkedList()
stackll.push(15)
stackll.push(14)
stackll.push(13)
stackll.push(11)
stackll.pop()
stackll.pop()
stackll.pop()
console.log(stackll)