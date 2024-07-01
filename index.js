// Code your solution here

function findMatching(arr,str){
    return arr.filter(driver => driver.toLowerCase() === str.toLowerCase()) 
}

findMatching()

function fuzzyMatch(arr,str){
    return arr.filter(name => name.slice(0,str.length) === str)
}

fuzzyMatch()

function matchName(arr,str){
    return arr.filter(param => param.name === str)
}

matchName()