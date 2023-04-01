function demo(a,b){
    console.log(a+b)
}

demo(10,2)  //12
demo(5,1,3,8,16)//6
demo(10,200,500)//210


// convert function pass value into  array using rest ... operator
function demo1(...b){
    console.log(b)
}

demo1(10,2)  //(2) [10, 2]
demo1(5,1,3,8,16)//(5) [5, 1, 3, 8, 16]
demo1(10,200,500)//(3) [10, 200, 500]

function demo2(a,...b){  // WRONGGGGGGGGG
    console.log(a+b)   // WRONGGGGGGGGG
}

demo2(10,2)  
demo2(5,1,3,8,16)
demo2(10,200,500)
// 51,3,8,16
// 10200,500

function demo3(...values){ // CORRECT


    console.log('values', Array.isArray(values))  //true


    let sum=0
    values.map((value)=>sum+=value)
    console.log('sum', sum)
}

demo3(10,2)  
demo3(5,1,3,8,16)
demo3(10,200,500)


// sum 12
// sum 33
// sum 710

// before ES6 use argument property


// 10200,500

function demo4(){ // CORRECT

   console.log('arguments', arguments)
   console.log('Array.is', Array.isArray(arguments))// false
}

demo4(10,2)  
demo4(5,1,3,8,16)
demo4(10,200,500)

// arguments return array like list but not complete Array

function subtract(...myVal){
    let sub=0
    myVal.map((my)=>sub=my-sub)
    console.log('sub',sub )

}

function multiple(...myVal){
    let mul=1
    myVal.map((my)=>mul*=my)
    console.log('mul',mul )

}

function GenericFun(type,...value){
    type(...value)   // best example......
}

GenericFun(subtract,20,10)
GenericFun(multiple,5,3)