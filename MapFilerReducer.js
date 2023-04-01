// .map()- length of input array same(no of object i.e 2 obj start like 0,2 index) as lenth of 
// output array (no of object i.e 2 obj start like 0,2 index)

// so map return array bcz input and out length is same as mention above
// but key value of objects included in  array , not same in array i.e may in [0 index] object contain 5 key value in 
// [1 ojbect] contain number/string any thing 

// eg

// [
//   {
//       "id": 101,
//       "name": "parmjeet",
//       "designation": "SE",
//       "rating1": 2,
//       "rating2": 10
//   },
//   {
//       "id": 103,
//       "name": "roop",
//       "designation": "SE",
//       "rating1": 9,
//       "rating2": 3
//   }
// ]


// .map((item)=>item.rating1+item.rating2)

// output is 

// [
//   12, ............. 2+10
//   12, ........................ 9+3
// ]


const a=function(x){
    console.log('x123', x)
}
a(10)

function b(y){
    console.log('y123', y)
}
b(20)
// ----------------------------
let arr=['aaa','bbb','cc']

// const transform =function(value){
  //     return'res',value.toUpperCase()
  //   }

function transform(value){
  return value.toUpperCase()
}

const newArr=arr.map(transform)
console.log('newArr%%%',newArr)
//////////////////////////////////////////////////
function arr22(){
  return [10,20,30]
}

// why not use transform()
// reason is .map(),.reduce().filter all are in bulit callback functions

// eg callback

function map2(mapLogic){
let mapLogicCopy=mapLogic();
mapLogicCopy.map((item)=>console.log('item###', item))
  
}

map2(arr22)
// -------------------------------------------
function saySquared(n) {
  console.log(`${n} squared is ${n*n}.`)
}

const arr2 = [1,2,3,4]
arr2.forEach(saySquared)

// 1 squared is 1.
// 2 squared is 4.
// 3 squared is 9.
// 4 squared is 16.

// =======================

let arr1=['aaa','bbb','cc']

const newArr22=arr1.map(function(value){
  return value.toUpperCase()
})
console.log('newArr123',newArr22)



// =======================
let arr3=['aaa','bbb','cc']

// const newArr33=arr3.map((item)=>{
//   return item.toUpperCase()
// })
const newArr33=arr3.map((item)=>
  item.toUpperCase()
)
console.log('newArr3$$',newArr33)


let arr4=[
  {
    id:101,
    name:'parmjeet',
  },
  {
    id:102,
    name:'raman',
  }
  ,{
    id:103,
    name:'roop',
  }


]
const nameList=arr4.map((item)=>item.name)
console.log('nameList', nameList)

// FOREACH:::::::::::::::::::::::::::::::::

// for each not return array so not use variable to hold the return value


const forEachName=[];
arr4.forEach((item)=>
{
forEachName.push(item.name)
})
console.log('nameArr', forEachName)

//--------------------------------------------
const forEachFun=[];
arr4.forEach(function (item){
  forEachFun.push(item.name)
})
console.log('forEach using function instead of arrow fun', forEachFun)

// filter in Array

// the length of input array and lenght of output array not same





let arr5=[
  {
    id:101,
    name:'parmjeet',
    designation:'SE'
  },
  {
    id:102,
    name:'raman',
    designation:'Graphics'
  }
  ,{
    id:103,
    name:'roop',
    designation:'SE'
  },
  {
   
    name:'harman',
    designation:'Graphics'
  }


]
const arrRes=[]
arr5.filter((item)=>
   item.designation==='SE'&& arrRes.push(item) 
)
console.log('arrRes', arrRes)

const arrRes1=[]
arr5.filter((item)=>{
   item.designation==='SE'&& arrRes1.push(item) // may or may not use return type both are valid bcz filter return list/array
}
)
console.log('arrRes1111', arrRes1)



// best bcz not use .push mehtod   and easy*************
const mybestFilter=arr5.filter((item)=>
    item.designation==='SE' 

)
console.log('mybestFilter', mybestFilter)

const mybestFilter2=arr5.filter((item)=>
    item.id === undefined

)
console.log('mybestFilter2', mybestFilter2)


// [
//   {
//       "name": "harman",
//       "designation": "Graphics"
//   }
// ]


// REDUCE Function:::::::

// reduce  iterate on array and return single(one) value as output
// e.g
//  we have list of numbers and reduce use the return sum of all number (i.e return single value as output)


const arrScore=[100,20,30]

//  const result= arrScore?.reduce((accumulator,item)=>accumulator+item,0)    // => accumulator+ item , 0 is intilization of accumulator
 const result= arrScore?.reduce((sum,item)=>sum+item,0) //  0 is intilaization of sum

 console.log('REDUCE result', result)   //150




 
let arrAllMapFilterReduce=[
  {
    id:101,
    name:'parmjeet',
    designation:'SE',
    rating1:2,
    rating2:10
  },
  {
    id:102,
    name:'raman',
    designation:'Graphics'
    ,
    rating1:1,
    rating2:4
  }
  ,{
    id:103,
    name:'roop',
    designation:'SE',
    rating1:9,
    rating2:3

  },
  {
    id:103,
    name:'harman',
    designation:'Graphics'
    ,
    rating1:7,
    rating2:9
  }



]

const filterRes=arrAllMapFilterReduce?.filter((item)=>item.designation==='SE')
console.log('filterRes', filterRes)
const mapRes=filterRes?.map((item)=>item.rating1+item.rating2)
console.log('mapRes', mapRes)

const reduceRes=mapRes?.reduce((acc,item)=>acc+item,0)
console.log('reduceRes', reduceRes) //24

//------------------------------
const sumOfFilter=arrAllMapFilterReduce?.filter((item)=>item.designation==='SE')
.map((item)=>item.rating1+item.rating2)
.reduce((acc,item)=>acc+item,0)
console.log('sumOfFilter', sumOfFilter) //24

//------------------------------