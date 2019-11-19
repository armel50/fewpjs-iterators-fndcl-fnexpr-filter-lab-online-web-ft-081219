// Code your solution here
function findMatching(array, name){
    return array.filter( e => {
       return e.toUpperCase() === name.toUpperCase()
    })

}

function fuzzyMatch(array, name){
    return array.filter( e => {
        return e.charAt(0).toUpperCase() === name.charAt(0).toUpperCase()
     })
}

function matchName(array, name){
   return array.filter(e => {
        return e.name === name
    })
}