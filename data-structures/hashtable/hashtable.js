class HashTable {
  constructor(size){
    this.data = new Array(size)
  }


  hashed(key){
    let hash = 0
    for(let i = 0; i <key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  add(key, value){

    let idx = this.hashed(key)
    if(!this.data[idx]){
      this.data[idx]= []
    }
    this.data[idx].push([key,value])
    return this.data
  }

  get(key){

    const idx = this.hashed(key)
    const currentIdx = this.data[idx]
    if(currentIdx){
      for(let i= 0; i < currentIdx.length; i++){
        if(currentIdx[i][0]=== key){
          return currentIdx[i][1]
        }
      }
    }
    return null
  }

  contains(key){
    const idx = this.hashed(key)
    const currentIdx = this.data[idx]
    if(currentIdx=== undefined){
      return false
    } else{
      if(currentIdx){
        for(let i = 0; i < key.length; i++){
          if(currentIdx[i][0]=== key){
            return true
          } else{
            return false
          }
        }
      }
    }
  }
}




const newHash = new HashTable(50)

newHash.add('grapes', 1000)
newHash.add('vine', 1000)
newHash.add('happy', 1000)

newHash.contains(1)

newHash.hashed('david')

module.exports = {HashTable};
