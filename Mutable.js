// primitives (boolean,string,number) are immutable (not change value i,e [ORIGNAL VARIBALE NOT EFECT if change in copy])
//  bcz use seprate memeory allocation


// ref type array and objects  are mutable (changeable) bcz use sharable memory 

// eg of primitive 

let x=11;
let y=x;
y=y+1;
console.log('x', x) // 11    // ORIGNAL VARIBALE NOT EFECT
console.log('y', y) // 12


let p11=['value11','value12']
let q=p11;
q.pop()  // pop remove last element of array

console.log('p11', p11) // ['value11']
console.log('q1', q)    // ['value11']



let obj1={
    name:'ram'
}
let obj2=obj1

obj2.name='sonu'
obj2.age=13

console.log('obj1', obj1)//{name: 'sonu', age: 13}
console.log('obj2', obj2) // {name: 'sonu', age: 13}


// =================================================================================

// MUTABLE ARRAY ---> IMMUTABLE

// by using [...name] and .concat() method we assign new memory to array and make array immutable 

// e.g

let a=['name1','name2']
let b=a.concat(); // assign new memory to b variable instead of using sharable memory of a
b.pop()
console.log('a', a)  //  ['name1', 'name2']
console.log('b', b) //   ['name1']


// best and 2 eg

let s=['name1','name2']
let p=[...s]  // using spread operator assign new memory to b variable 
p.pop()
console.log('s', s) //   ['name1', 'name2']
console.log('p', p)//  ['name1']

// ===============================================================================================================



// MUTABLE ON ---> IMMUTABLE

// by using {}...name} and object.apply() method we assign new memory to Obj and make Obj immutable 

let ob1={
    name:'ram'
}
let ob2={...ob1}  // using spread operator assign new memory to b variable  (ES6)
ob2.age=13

console.log('ob1', ob1)//{name: 'ram'}

console.log('ob2', ob2) // {name: 'ram', age: 13}

// --------------------------------
let demo={
    name:'ram'
}
let dd= Object.assign({},demo)  // using assign() assign new memory to b variable  (ES5)
dd.age=13

console.log('demo', demo)//{name: 'ram'}

console.log('dd', dd) // {name: 'ram', age: 13}


