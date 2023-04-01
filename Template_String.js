let productName='mobile'
let quantity=2;
console.log(`i have many ${productName} with ${quantity} quantity`)
console.log(`i have many ${productName} with ${quantity} quantity

and purchase it from "amazon" `)

console.log('quantity', `${2+2+2}`)

function strinTemplate(){
    return "21-03-2015"
}
console.log('quantity1111111', strinTemplate())  // 21-03-2015
console.log('quantity', `${strinTemplate()}`)   //  21-03-2015    

const statu1s='delivered'
// console.log('i order jbl go from amazon and its staus is:'+statu1s==='pending'?'red':'green')// not working

// const para='i order jbl go from amazon and its staus is:'
// console.log(para+ statu1s==='pending'?'red':'green')  // not working


let para='i order jbl go from amazon and its staus is:'
console.log(para+= statu1s==='pending'?'red':'green')  // working

let para11='i order jbl go from amazon and its staus is:'
// para11=para11+ statu1s==='pending'?'red':'green'   // ****  para11=para11+ statu1 (NOT WORK)
para11+= statu1s==='pending'?'red':'green'   // ****  para11 += statu1 ( WORK) but not =+
console.log('para11', para11)


// Easy in ES6
console.log(`i order jbl go from amazon and its staus is:${statu1s==='pending'?'red':'green1'}`)