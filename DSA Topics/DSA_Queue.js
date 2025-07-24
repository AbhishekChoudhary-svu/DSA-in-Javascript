class Queue{
    constructor(){
        this.queue=[]
    }
    push(item){
        this.queue.push(item);
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        this.queue.shift();
    }
    front(){
        if(this.isEmpty()){
            return null;
        }
        return this.queue.at(0);
    }
    back(){
        if(this.isEmpty()){
            return null;
        }
        return this.queue.at(-1);
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
}

// const queue = new Queue();
// queue.push(11)
// queue.push(12)
// queue.push(13)
// queue.push(14)



// console.log(queue.back())

class Node{
    constructor(data){
        this.data= data;
        this.next= null;
    }
}

class QueueLinkedList{
    constructor(){
        this.head= null;
        this.tail= null;
        this.size= 0;
    }
    enqueue(item){
        const newNode = new Node(item)
        if(this.head === null){
            this.head= newNode
        }else{
            this.tail.next= newNode;
            
        }
        this.tail= newNode;
        this.size++;
    }
    dequeue(){
        return this.isEmpty() ? null : this.head= this.head.next
    }
    front(){
       return this.isEmpty() ? null : this.head.data;
    }
    back(){
        return this.isEmpty() ? null : this.tail.data;
    }
    isEmpty(){
        return this.size === 0;
    }
}

const queuell = new QueueLinkedList()

queuell.enqueue(11)
queuell.enqueue(12)
queuell.enqueue(13)
queuell.enqueue(14)
queuell.dequeue()
queuell.dequeue()
console.log(queuell)