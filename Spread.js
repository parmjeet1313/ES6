const myUser =['user1','user2']
console.log(myUser) // ['user1', 'user2']

console.log(...myUser) // user1 user2


console.log('team1','team2') //team1 team2


//--------------------------

// spread with array


const fruitArr1=['apple','banana'];

const fruitArr2=['mango','orange']
console.log(...fruitArr1,...fruitArr2)


console.log('concat', fruitArr1.concat(fruitArr2)) // ES5

const allFruits=[...fruitArr1,...fruitArr2]
console.log('allFruits', allFruits)      // ES6


// spread with string (use concat instead of ... spread)

const friendList=['parmjeet','harman','dilpreet']
const NewFriend='Amritpal'

const allFriends=[...friendList,...NewFriend]
console.log('string with spread', allFriends)

console.log('string with contact', friendList.concat(NewFriend))


//--------------------------
// while Make copy from array , than after modification/addition in copy array that effects orignal so
// we protect the orignal array  by using ... spread operator

// eg

const arr=['aa','bb','cc']
const dupArray=arr

dupArray.push('ddd')
console.log('arr', arr) //  ['aa', 'bb', 'cc', 'ddd']                 orignal  array effect 
console.log('dupArray', dupArray) // ['aa', 'bb', 'cc', 'ddd']

// solve using spread ...
const arr2=['aa','bb','cc']
const dupArray2=[...arr2]  // problem sovle while coping

dupArray2.push('ddd')
console.log('arr222', arr2) //  ['aa', 'bb', 'cc']                 orignal array NOT effect 
console.log('dupArray222222', dupArray2) // ['aa', 'bb', 'cc', 'ddd']


//--------------------------


const obj={
    name:'parmjeet',
    lastName:'babrah'
}

const cloneObj=obj

cloneObj.class='mca'

console.log('obj', obj)         //  {name: 'parmjeet', lastName: 'babrah', class: 'mca'}
console.log('cloneObj',cloneObj ) //   {name: 'parmjeet', lastName: 'babrah', class: 'mca'}



const objSpread={
    name:'parmjeet',
    lastName:'babrah'
}

const cloneObjSpread={...objSpread}

cloneObjSpread.class='mca'

console.log('objSpread', objSpread)         // {name: 'parmjeet', lastName: 'babrah'}
console.log('cloneObjSpread',cloneObjSpread ) //   {name: 'parmjeet', lastName: 'babrah', class: 'mca'}



const objSpread2={
    name:'parmjeet',
    lastName:'babrah'
}

const cloneObjSpread2={...objSpread2}

console.log('objSpread2222', objSpread2)         

// {
//     "name": "parmjeet",
//     "lastName": "babrah"
// }
console.log('cloneObjSpread2222',cloneObjSpread2 ) 

// {
//     "name": "parmjeet",
//     "lastName": "babrah"
// }

//------------------------




const useDetail={
    name:'parmjeet',
    lastName:'babrah'
}
const userPersonalDetail={
    age:28
}

const allUserDetail={...useDetail,...userPersonalDetail
}

console.log('allUserDetail', allUserDetail)         

// console.log('aaaaaaaaa',...useDetail,...userPersonalDetail) // error
console.log('aaaaaaaaa',{...useDetail,...userPersonalDetail}) 

//=================================

// spread with in built function

const spredSplitArray=[10,20,44,462,9]
console.log('spredSplitArray', spredSplitArray)//   [10, 20, 44, 462, 9]
console.log('spredSplitArray', ...spredSplitArray) // 10 20 44 462 9

console.log('min with some random num',Math.min(135,9,4,6556,3))// 3

const arrNum=[135,9,4,6556,3]
// console.log('spread with Min', Math.min(arrNum)) // NaN
console.log('apply with Min', Math.min.apply(null,arrNum)) // 3  (Before ES6)
console.log('spread with Min', Math.min(...arrNum))  // 3 (after ES6)


//=================================

// immutability in array of object using spread operator

const myArrObj22=[
    {name:'dilpreet',age:18},
    {name:'raman',age:3} 
]
myArrObj22.push({name:'harjeet',age:15})

console.log('myArrObj22', myArrObj22)



const myArrObj=[
    {name:'dilpreet',age:18},
    {name:'raman',age:3} 
]
const newObj={name:'harjeet',age:15}
// const newArrObj=[...myArrObj,...newObj]      //error obj not  iterable bcz ..obj
const newArrObj=[...myArrObj,{...newObj}]   // now use {..obj}   validddddddd

console.log('myArrObj', myArrObj)
console.log('newArrObj', newArrObj)


const newArray=[{
    name:'hero',
    age:2
},
{
    name:'noor',
    age:23
}]
function myArrFun(newArr){
    return[                           // no effect the orignal array
        ...newArray,{...newArr}
    ]

    // newArray.push(newArr)                   // effect the orignal array i.e also add newArr obj in original array
    
}

const resultArr=myArrFun({name:'rohan',age:26})

console.log('newArray', newArray)
console.log('resultArr', resultArr)