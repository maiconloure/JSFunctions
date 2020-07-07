Array.prototype.newForEach = function(callback) {
    for (let index = 0; index < this.length; index++) {
        const currentValue = this[index]
        callback(currentValue, index, this)
    }
    return undefined
}

// const arr = [ 1, 2, 3]
// arr.newForEach((value, index) => console.log(`Valor: ${value}, Index: ${index}`))
// console.log([].newForEach((value, index) => console.log(`Value: ${value}, Index: ${index}`)))   Value: 1, Index: 0
//                                                                                                 Value: 2, Index: 1
//      [ 1, 2, 3]  (value, index) => console.log(`Valor: ${value}, Index: ${index}`)                                                                      Value: 3, Index: 2


Array.prototype.newMap = function(callback) {
    let NewArray = []
    for (let index = 0; index < this.length; index++) { 
        const currentValue = this[index]
        let res = callback(currentValue, index, this)
        NewArray.push(res)
    }   
    return NewArray 
}

// const arrM = [ 1, 2, 3, 4, 5, 6]
// console.log(arrM.newMap(value => value * value)) // [ 1, 4, 9, 16, 25, 36 ]


Array.prototype.newSome = function(callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if (callback(currentValue, index, this)){
            return true
        }
    }
    return false
}

// const ages = [11, 12, 34, 11, 12]
// const testAge = value => value >= 18
// console.log(ages.newSome(testAge)) // true


Array.prototype.newFind = function (callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if (callback(currentValue, index, this)){
            return currentValue
        }
    }
    return undefined
}

// const nums = [11, 12, 33, 11, 12]
// const findElem = value => value === 33
// console.log(nums.newFind(findElem)) // 33


Array.prototype.newFindIndex = function(callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if (callback(currentValue, index, this)){
            return index
        }
    }
    return -1
}

// const nums1 = [11, 13, 33, 11, 12]
// const findIndex = value => value % 2 === 0
// console.log(nums1.newFindIndex(findIndex)) // 4


Array.prototype.newEvery = function(callback) {
    let count = 0
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if (callback(currentValue, index, this)){
            count++
        }
    }
    if (count === this.length){
        return true
    }
    return false
}

// const ages2 = [19, 19, 34, 18]
// const testAge2 = value => value >= 18
// console.log(ages2.newEvery(testAge2)) // true


Array.prototype.newFilter = function(callback) {
    let newArr = []
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if (callback(currentValue, index, this)){
            newArr.push(currentValue)
        }
    }
    return newArr
}

// const numbers = [12, 15, 24, 28]
// const testFilter = value => value >= 18
// console.log(numbers.newFilter(testFilter)) // [ 24, 28 ]


Array.prototype.newConcat = function(...args) {
    const arr = [...this]
    arr.push(...args)
    let newArr = []

    while(arr.length){
        const currentValue = arr.shift()
        if (Array.isArray(currentValue)){
            arr.push(...currentValue)
        } else {
            newArr.push(currentValue)
        }
    }
    return newArr
}

// let letters = ["a", "b", "c"]
// let nums = [1, 2, 3]
// console.log(letters.newConcat(nums)) // [ 'A', 'b', 'C', 1, 2, 3 ]


Array.prototype.newIncludes = function(elem, fromIndex=0) {
    for (let index = fromIndex; index < this.length; index++){
        if (this[index] === elem){
            return true
        }
    }
    return false
}

// console.log([1, 2, 3].newIncludes(2))     // true
// console.log([1, 2, 3].newIncludes(4))     // false
// console.log([1, 2, 3].newIncludes(3, 3))  // false
// console.log([1, 2, NaN].newIncludes(NaN)) // true


Array.prototype.newIndexOf = function(elem, fromIndex=0) {
    for (let index = fromIndex; index < this.length; index++){
        if (this[index] === elem){
            return index
        }
    }
    return -1
}

// var arrayX = [2, 5, 9]
// console.log(arrayX.newIndexOf(2))     // 0
// console.log(arrayX.newIndexOf(7))     // -1
// console.log(arrayX.newIndexOf(9, 2))  // 2


Array.prototype.newJoin = function(separator = ',') {
    let res = ''
    for (let index = 0; index < this.length; index++ ){
        res += `${this[index]}` 
        if (index !== (this.length -1)){
             res+= separator
         }
    }
    return res
}

// const elements = ['Fire', 'Air', 'Water']
// console.log(elements.newJoin()) // Fire,Air,Water
// console.log(elements.newJoin('===')) // Fire===Air===Water


Array.prototype.newSlice = function(start, end=this.length) {
    let newArr = []
    for (let index = start; index < end; index++){
        newArr.push(this[index])
    }
    return newArr
}

// const frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga']
// console.log(frutas.newSlice(1, 3)) // [ 'Laranja', 'Limao' ]


Array.prototype.newFlat = function(depth=1) {
    const newArr = [...this]
    const res = []
    while(newArr.length){
        const currentValue = newArr.shift()
        if (Array.isArray(currentValue) && depth > 0){
            newArr.push(...currentValue)
            depth--
        } else {
            res.push(currentValue)
        }
    }
    return res
}

// const arr1 = [1, 2, [3, 4]]
// console.log(arr1.newFlat()) // [ 1, 2, 3, 4 ]
// const arr2 = [1, 2, [3, 4, [5, 6]]]
// console.log(arr2.newFlat(2)) // [ 1, 2, 3, 4, 5, 6 ]


Array.prototype.newFlatMap = function(callback) {
    const res = []
    for (let index = 0; index < this.length; index++){
        const elementArr = callback(this[index], index, this)
        for (let elem of elementArr){
            res.push(elem)
        }
    }
    return res
}

// var arr12 = [1, 2, 3, 4, 5]
// console.log(arr12.newFlatMap(x => [x * 2])) // [ 2, 4, 6, 8, 10 ]
// console.log(arr12.newFlatMap(x => [[x * 10]])) // [[10], [20], [30], [40], [50]]

 
Array.newArrayOf = function(...elements) {
    newArr = []
    for (let elem of elements){
        newArr.push(elem)
    }
    return newArr
}

// console.log(Array.newArrayOf(1))         // [1]
// console.log(Array.newArrayOf(1, 2, 3))   // [1, 2, 3]
// console.log(Array.newArrayOf(undefined)) // [undefined]