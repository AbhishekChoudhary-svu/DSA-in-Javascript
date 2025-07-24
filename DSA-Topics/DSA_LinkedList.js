
class Node{
    constructor(data){
        this.data=data;
        this.next= null;
    }
}

class LinkedList {
     constructor(){
        this.head=null;
        this.size= 0;
    }
    insertedAtHead(data){
        const newNode = new Node(data)
        newNode.next= this.head;
        this.head= newNode
        this.size++;
    }
    insertedAtAnyIdx(index,data){
        if(index< 0 || index > this.size){
            return "Invalid Index";
        }
        if(index === 0){
            insertedAtHead(data)
            return;
        }
        let newNode = new Node(data)
        let temp = this.head;
        for(let i=0;i<index-1;i++){
            temp=temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;

    }
    print(){
        let  result = ""
        let temp = this.head;
        while(temp){
            result += `${temp.data}-->`;
            temp=temp.next
        }
        return result;
    }
    removedAtHead(){
        if(this.isEmpty()){
            return "The List Is Already Empty"
        }
        this.head=this.head.next;
        this.size--;
    }
    removeElement(data) {
        if (this.isEmpty()) {
            return "Empty list";
        }

      
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let prev = null;
        let current = this.head;
        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (current) {
            prev.next = current.next;
            this.size--;
        }
    }
     search(data) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data === data) {
                return index; 
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    isEmpty(){
        return this.size ===0;
    }

}

// let list = new LinkedList()
// list.insertedAtHead(12)
// list.insertedAtHead(5)
// list.insertedAtHead(2)
// list.removedAtHead()
// console.log(list.print())
// console.log(list)


/// Questions :