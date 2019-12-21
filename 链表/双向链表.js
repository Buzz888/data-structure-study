function DoublyLinkerList(){
    function Node(data){
        this.data = data
        this.prev = null
        this.next = null
    }
    //属性
    this.head = null //=>头部
    this.tail = null //=>尾部
    this.length = 0
    DoublyLinkerList.prototype.append =(data) =>{
        let newnode =new Node(data)
        if(this.length===0){
            this.head = newnode
            this.tail = newnode
        }else{
            newnode.prev = this.tail
            this.tail.next = newnode
            this.tail = newnode
        }
        this.length += 1
    }
    DoublyLinkerList.prototype.toString = ()=>{
        return this.backtoString()
    }
    DoublyLinkerList.prototype.backtoString = ()=>{
        let current = this.head
        let string = ""
        while(current){
            string += current.data + " "
            current = current.next
        }
        return string
    }
    DoublyLinkerList.prototype.fortoString = ()=>{
        let current = this.tail
        let string = ""
        while(current){
            string += current.data + " "
            current = current.prev
        }
        return string
    }
    DoublyLinkerList.prototype.insert = (index,data)=>{
        if(index<0 || index>this.length) return false
        let newnode = new Node(data)
        if(this.length === 0){
            this.head = newnode
            this.tail = newnode
        }else{
            if(index===0){
                this.head.prev = newnode
                newnode.next = this.head
                this.head = newnode
            }else if(index === this.length){
                newnode.prev = this.tail
                this.tail.next = newnode
                this.tail = newnode

            }else{
                let current = this.head
                let index2 = 0
            while(index2++ < index){
            current = current.next
            }    
             newnode.prev = current.prev
             newnode.next = current
             current.prev.next = newnode
             current.prev = newnode
            }}
            this.length +=1
             return true
            }
    DoublyLinkerList.prototype.get = (index)=>{
        if(index<0 || index >= this.length) return false
        if(this.length/2 > index){
        let current = this.head
        let index2 = 0
        while (index > index2++) {
            current = current.next
        }
        return current.data}
        else{
            let current = this.tail
            let index2 = this.length-1 
            while (index < index2--) {
                current = current.prev
            }
            return current.data
        }}
        DoublyLinkerList.prototype.update =(index,data)=>{
            if(index<0 || index>this.length) return false
            if(index<this.length/2){
                let index2 = 0
                let current = this.head
                while (index2++<index) {
                    current=current.next
                }
                current.data = data
            }else{
                let index2 = this.length-1
                let current = this.tail
                while (index2-- > index) {
                    current = current.prev
                }
                current.data = data

            }
            
        }
    
    
    
}