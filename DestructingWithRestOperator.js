const myObjAA={

    firstName:'parmjeet',
    lastName:'babrah',
    address:{
        city:'amritsar',
        country:'india'
    }

}


// use rest operator except of firstName all other detail of obj store in myObjInfo object
const {firstName,...myObjInfo}=myObjAA
console.log('firstName', firstName)
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

const {firstName:fName,lastName,...myObj22Info} =myObj22 
console.log('objInfo222222', myObj22Info)
console.log('lastName222222', lastName)
console.log('firstNaem222222', fName)
// ===========================


// USE ...REST OPERATOR WITH ARRAY>>>>>>>>>>>>>>>>>>>>>>>>>>

const arr=[10,320,34,56]

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
// ------------------------------------
// now skip 320 i.e second element of array by using ,(blan space with comma)
const [x, ,s]=arr // ********* use blank space comma
console.log('x', x)// 10
console.log('s', s)//34
