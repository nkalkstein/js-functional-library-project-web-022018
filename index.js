fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {

        for (const el in collection) {
          iteratee(collection[el])
        }
        return collection
    },

    map: function(collection, iteratee) {
      let array = []
        for (const el in collection) {
          array.push(iteratee(collection[el]))
      }
      return array
    },

    reduce: function(collection, iteratee, acc) {

        for (const el in collection) {
          var acc = iteratee(acc, collection[el], collection)
        }
        return acc
    },

    find: function(collection, predicate) {
        let answer = null
        for (const el of collection) {
          if (predicate(el)) {
            answer = "bingo"
            return true;
          }
    }     if (answer === null) {
            return false
        }
    },



    filter: function(collection, predicate) {
      let array = []

        for (const el of collection){
          if (predicate(el)) {
            array.push(el)
          }
        }
        return array
    },

    size: function(collection) {
        let i = 0;
        for (const el in collection) {
          i++
        }
        return i
    },

    first: function (collection, n = 1) {
      if (n === 1){
        return collection.slice(0, n)[0]
   }  else {
        return collection.slice(0, n)
     }
    },


    last: function (collection, n){
      if (typeof n === "undefined"){
        return collection.slice(-1)[0]
   }  else {
        return collection.slice(-n)
     }
    },

    compact: function (collection) {
      const predicate = function myFunc(element) {return !!element}
      return fi.filter(collection, predicate)
    },

    sortBy: function (array, iteratee) {
      // let answer = fi.map(collection, iteratee)
      //   return answer.slice().sort(iteratee)
      let newArray = fi.map(array.slice(), iteratee)

      return newArray.sort(function(a, b){return a - b})


    },


functions: function() {






}
  }
})()

fi.libraryMethod()
