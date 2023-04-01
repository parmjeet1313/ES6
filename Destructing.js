const myObj={

    firstName:'parmjeet',
    lastName:'babrah',
    address:{
        city:'amritsar',
        country:'india'
    }

}
    

// scope of variable(data type)   {identifier}=expression


  const {firstName,lastName} =myObj
    console.log('firstName', firstName)
    console.log('lastName', lastName)

    //use of  alias  i.e short name

    const {firstName:fName}=myObj
    console.log('fName', fName)

// let inner object keys value  -----> use same syntax while create inner object inside object i.e address:{city:'asr'}

const {firstName:fn, address:{city,country}}=myObj

console.log('fn', fn)
console.log('city', city) // 
console.log('country', country) // 

// REST OPERATOR WITH DESTRUCTING:::


const myObjAA={

    firstName:'parmjeet',
    lastName:'babrah',
    address:{
        city:'amritsar',
        country:'india'
    }

}


// use rest operator except of firstName all other detail of obj store in myObjInfo object


const {firstName:ff,...myObjInfo}=myObjAA
console.log('ff', ff)
console.log('myObjInfo', myObjInfo)

// output

// firstName parmjeet

// {
//     "lastName": "babrah",
//     "address": {
//         "city": "amritsar",
//         "country": "india"
//     }
// }


const myObj22={

    firstName:'parmjeet',
    lastName:'babrah',
    address:{
        city:'amritsar',
        country:'india'
    }

}

// MUST BE USE ... REST OPERATOR  in desturcting at last position***********
// const {firstName:fName,...myObj22Info,lastName}=myObj22   // ERRORRRRRRR  

const {firstName:f1Name,lastName:lName,...myObj22Info} =myObj22 
console.log('objInfo222222', myObj22Info)
console.log('lastName222222', lName)
console.log('firstNaem222222', f1Name)

// ============================================================
const arr=[10,320,34,56]

const [a,b,z]=arr
console.log('a', a)//10
console.log('b', b)//320
console.log('z', z)// 34


// now skip 320 i.e second element of array by using ,(blan space with comma)
const [x, ,s]=arr // ********* use blank space comma
console.log('x', x)// 10
console.log('s', s)//34


// USE ...REST OPERATOR WITH ARRAY>>>>>>>>>>>>>>>>>>>>>>>>>>
const [p,...otherDetail]=arr
console.log('p', p)
console.log('otherDetail', otherDetail)

// output


// p 10

// otherDetail [
//     320,
//     34,
//     56
// ]
