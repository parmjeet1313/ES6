function add(x,y){
    return x+y
}


console.log('function keywor',add(10,20)) //30

const addition=(x,y)=>x+y          // by default with single line return keyword is there

console.log(addition(1,3)) //4

// arrow function with no argument

const sum=()=> 10+30;
console.log(sum) // ()=> 10+30  (INVALIDDDDDDD) 
console.log('() are required even these are empty',sum())    //40



const newSum=x=>x+20;
console.log(newSum(1)) // 21

const newAdd=(a,b)=>{
    return a+b
}

console.log('newAdd', newAdd(10,20))  // 30


// return object from fat arrow function

const obj=()=>({name:'parmjeet',age:28})  // JS  treat {} as function block , so make it obj use ({}) 
// console.log('obj', obj) // invalid // obj ()=>({name:'parmjeet',age:28}) 
console.log('obj', obj()) //obj {name: 'parmjeet', age: 28}


// product Name is undefined

function addToCart(){
this.productName="mobile",
this.getProductName=function(){
    console.log(this)  // point to addToCart obj
    setTimeout(function(){
        console.log(this) //// point to window obj so that's why this.productName is undefined
        console.log('111111',this.productName)// undefined

    },1000)
}


}

const objMy=new addToCart();
objMy.getProductName()

// product Name get

// arrow function don't have thire own this 
// e.g
function addToCart22222(){
    this.productName="mobile",
    this.getProductName=function(){
        console.log('aaaaaaaaa',this)  // point to addToCart22222 obj
        setTimeout(()=>{
            console.log('bbbbbbb',this) // bcz of arrow function this is now also point 
            // to addToCart22222 obj bcz arrow function don't have thire own this 
            console.log('2222',this.productName) // mobile
    
        },1000)
    }
    
    
    }
    
    const obj22=new addToCart22222();
    obj22.getProductName()


    function abcDemo(){
        console.log(arguments)


    }

    abcDemo(10,20,30,40)// Arguments(4) [10, 20, 30, 40]  (ONLY in case of function())


    // const abbccDemo=()=>{
    //     // console.log(arguments )//  error (arguments is not defined) in ARROW function
    // }
    // abbccDemo(10,20,30)

    // Arrow function inside map()

    const names=['aa','bbb','cc']
    const upperCaseNameList=names?.map((name)=>name.toUpperCase()) 
    console.log('upperCaseNameList', upperCaseNameList)


    //  problem face in arrow function bcz arrow function don't have their own this so task ref from parent


    function customer(){
       this.name='parmjeet',
        this.getName=()=>{
            console.log(' old  cust this....',this) // ref the parent i.e cusObj
            return `name is:${this.name}`

        }
    }

    const cusObj=new customer();
    console.log('customer obj', cusObj.getName())// customer obj name is:parmjeet

    const customerObj={
        name:'hello',

        // getName:()=>{
        //     console.log('cust this....',this)    // window
        //     return `name is ${this.name}`  // customerObjNeww name is 
        // }

        getName:function(){
            console.log('cust this....',this) // ref the parent i.e customerObj
            return `name is ${this.name}`  // customerObjNeww name is hello
        }

    }

    console.log('customerObjNeww', customerObj.getName()) 