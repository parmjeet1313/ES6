

// when pass fun2 as argument to fun1 then fun2 is call callBack function


// e.g
// fun1( fun2)


// fun2 is callBack function
// fun1 is HOD  higer order function

// .map()  --> .map() is built in call back


function task1(){
  console.log('task 111111')
}

function task2(val){
  console.log('task 22222222')
  val()    // call back  (now call to task1() by using receiving argument name i.e val    )
}

function task3(callBack){
  console.log('task 3333333')
  callBack()    // call back  (now call to task1() by using receiving argument name i.e val    )
}
function task4(callBack){
  console.log('task 4444444')
  callBack()    // call back  (now call to task1() by using receiving argument name i.e val    )
}

function task5(callBack){
  console.log('task 4444444')
 let res= callBack(22)
 console.log('arrow fun return with callback ', res)    // call back  (now call to task1() by using receiving argument name i.e val    )
}

task2(task1)
// task2(task1())  // error (not immediately call to task1 by using task1())


// PASS ANONMOUS FUNTION AS CALLBACK WHILE CALL task3()::::::::::::::

task3(function(){
  console.log(' pass anonymous function as an argument')
})

//output is:

//  task 3333333'
//  pass anonymous function as an argument


// PASS ANONMOUS FUNTION AS CALLBACK WHILE CALL task4()::::::::::::::

// const abc=(x)=>{
//   let a=10;
//   let b=10;
//    a+b+x;
// }
const abc=(x)=>{
  let a=10;
  let b=10;
 return  a+b+x;
}

 console.log('arrow',  abc(1)) // undefined when not use return keyword 

task4(()=>
  console.log(' pass arrow function as an argument'),
  console.log('add', 10+2)
)


//output is:

//  task 4444444'
//  pass arrow function as an argument


task5((x)=>{
  let aa=10  
  let bb=20  
   return aa+bb+x
}
)

//===================================

// PASS ARGUMENT TO CALLBACK FUNCTION:  using arrow()=> ::::::::::::


function task6(message)
{console.log('message of task 6666666',message)

}

function task7(callBack)
{
  console.log('task 77777')
  callBack()
}

task7(()=>task6('hi everyone') ) //PASS ARGUMENT TO CALLBACK FUNCTION using arrow()=>


// ================================================
// .map ,filter ,.reduce all are built in callback functions 
// and these all are SYNCHRONOUS CALLBACK::::::


function arr22(){
  return [10,20,30]
}
function map2(mapLogic){
let mapLogicCopy=mapLogic();
mapLogicCopy.map((item)=>console.log('item###', item))
  
}

map2(arr22)


// ASYNCHRONOUS CALLBACK::::::eg:::::

function helo(){
 console.log('hello' )
}
function demo(callback){

  console.log('demooo')
  setTimeout(function(){
    callback()
  },5000)
  
}

demo(helo)

console.log('biiiiiii')







// ===============================================================================



function sayBoo() {
    console.log('Boo!')
  }
  
  // do this - reference the function by its name:
  setTimeout(sayBoo, 3000)
  // => Boo! is logged after three seconds.
  
  // don't do this - invoke the function in place:
  setTimeout(sayBoo(), 3000)
  // => Boo! is logged instantly... nothing happens 3 seconds later.



const a=function(x){
    console.log('x123', x)
}
a(10)

function b(y){
    console.log('y123', y)
}
b(20)
// ----------------------------




