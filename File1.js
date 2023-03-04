//ES 5 (var)

console.log(x); // undefinde
var x = 10;

// console.log(x)

//ES 6 (let,const)

// console.log("y", y); // error
// Hoisting (can't use variable before declaring)
let y = 11;
console.log('y', y)
//=======================================================================

// ** varible declared with var are function scope
// ** varible declared with let and const are block scope

var name='parmjeet'

function getName(){        // fucntion scope
    var name ='raman'
    console.log('name', name) // raman
}

getName()
console.log('name', name) //  parmjeet

//--------------------------------------------------------------------------------------------

var name1='parmjeet'

if(true){        // global scope bcz don't use funtion {}
    var name1 ='raman'  // reuse same name1 like resignment
    console.log('name11', name1) // raman
}

console.log('name22', name1) //  raman
//--------------------------------------------------------------------------------------------


var na='parmjeet'

if(true){        
    let na ='raman'  // let have block scope
    console.log('na', na) // raman
}

console.log('na22', na) //  parmjeet

//--------------------------------------------------------------------------------------------


var na1='parmjeet'
// let na1='parmjeet'  // error na1 already defined

if(true){
    console.log('hii3333333333i')
}

//--------------------------------------------------------------------------------------------
let na2='parmjeet'
// let na2='parmjeet'  // error
if(true){
    console.log('hi222222ii')
}

//=======================================================================

// use of var inside foop

var i=5;
for(var i=0;i<=5;i++){  // i not with in funciton so, it not functin scope of i ,so it is global scope like reuse i variable as regisnment
    console.log('i', i)
}
console.log('outside of for', i) // 6   (not 5 )***

//--------------------------------------------------------------------------------------------

// use of let inside foop

var i=5;
for(let i=0;i<=5;i++){  // not bcz of let/const it has block scope.....
    console.log('i', i)
}
console.log('let....  for', i) //5  (yes 5 )***


//=======================================================================


// const:::::::::


// const is use to define constant value or read only value (only define once )


// const variable can't be reinitlize

const abc='jhhello'

// abc='biiiii' // error   variable can't be reinitlize

// const abc='hiii' // errror identifer also have been declared....

console.log('abc', abc)


//=======================================================================

// use of block

let green='hello'



{
    let green ='good morning'
    console.log('  inside block', green)// inside block good morningng
}

console.log('  outside block', green)// outsde block hello


//=======================================================================
