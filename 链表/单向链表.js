//单向链表
function LinkedList(){
    //内部类 每一节点类 =>data 数据 | =>next 下一项
    function Node(data){
        this.data = data
        this.next = null
        }
    //默认属性
    this.head = null
    //记录链表长度
    this.length = 0

    //*追加元素方法
    LinkedList.prototype.append =data=>{
        //创建新节点
        let newNode = new Node(data)
        //判断是否为第一节点 即head === Null & length ===0
        if(this.length ===0){
            this.head = newNode
        }else{
            let current = this.head
            //循环 next 找到最后一个节点
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.length += 1
    }

    //*toSting
    LinkedList.prototype.toString =()=>{
        let current = this.head
        let listSting = ""
        while(current){
            listSting += current.data + " "
            current = current.next
        }
        return listSting
    }

    //*insert 方法
    LinkedList.prototype.insert =(index,data)=>{
        //index越界判断
        if(index<0 || index > this.length) return false
        //创建
        let newNode = new Node(data)
        //插入
        if(index === 0){
            newNode.next = this.head
            this.head = newNode       
        }else{
            let index2 = 0
            let current = this.head
            let  prev = null
            while (index2++<index){
                prev = current
                current = current.next
            }
            newNode.next = current
            prev.next = newNode
        }
        this.length += 1
        return true
    }
    //get
    LinkedList.prototype.get = (index)=>{
        if(index<0 || index >= this.length) return null
        let current = this.head
        let index2 = 0
        while(index > index2){
            current = current.next
            index2 +=1
        }
        return current.data
    }
    //index Of
    LinkedList.prototype.indexOf = (elm) =>{
        let index = 0
        let current = this.head
        while(index < this.length){
            if(current.data===elm){
                return index
            }
            current = current.next
            index +=1
        }
        return -1
    }
    //update
    LinkedList.prototype.update =(index,newdata)=>{
        if(index<0 || index >= this.length) return false

        let current = this.head
        let index2 = 0
        while(index2++ < index){
            current = current.next
        }
        current.data = newdata
        return true
    }
    //remoteAt
    LinkedList.prototype.removeAt = (index)=>{
        if(index<0 || index >= this.length) return null
        let current = this.head
        if(index===0){
            this.head = this.head.next
        }else{
            let index2 = 0
            
            let previous = null
            while(index2++ < index){
                previous = current
                current = current.next                
            }
            previous.next = current.next
        }
        this.length -=1
        return current.data
    }
    LinkedList.prototype.remove =(elm)=>{
        let index = this.indexOf(elm)
        return this.removeAt(index)
    }
    

}