//maps are hash maps in other languages

var firstMap=new Map;

firstMap.set(1."Hina");
firstMap.get(1);
firstMap.delete('Hina');
firstMap.size;
firstMap.values()
firstMap.keys()


//SETS

var s=new Set;
s.add(3);
s.size;
s.has(10);


//// maps

class MessageBoard {
    constructor(){
        this.messages = new Map
        this.id = 1;
    }
    addMessage(value){
        this.messages.set(this.id, value);
        this.id++
        return this;
    }
    findMessageById(id){
      return this.messages.get(id)
    }
    findMessageByValue(val){
      for (let msg of this.messages.values()) {
        if(msg === val) return msg;
      }
    }
    removeMessage(id){
        this.messages.delete(id);
        return this;
    }
    numberOfMessages(){
        return this.messages.size;
    }
    messagesToArray(){
        return Array.from(this.messages.values())
    }
}

// sets
function uniqueValues(arr){
  return new Set(arr).size
}

function hasDuplicates(arr){
  return new Set(arr).size !== arr.length
}

function countPairs(arr, num){
    var cache = new Set(arr);
    var count = 0;
    for(let val of arr){
        cache.delete(val)
        if(cache.has(num - val)){
            count++
        }
    }
    return count;
}