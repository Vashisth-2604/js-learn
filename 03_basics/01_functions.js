

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}
//sayMyName()

//function addTwoNumbers(number1,number2){
    //console.log(number1 + number2)

//}

function addTwoNumbers(number1,number2){
    
    //let result =number1 + number2
     //return result
     return number1 + number2

}
 const result =addTwoNumbers(3,4)

 //console.log("result: ", result);

 function loginUserMessage(username ="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`

 }
//console.log(loginUserMessage("Abhishek"));
//console.log(loginUserMessage("Abhishek"));

function calculateCartPrice(...num1){
    return num1

}
 //console.log(calculateCartPrice(200,300,500))

 const user ={
    username:"Abhishek",
    price: 199
 }
 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    }
    //handleobject(user)
    handleobject({
        username: "Abhishek",
        price: 399

    })



    const myNewArray = [200,400,500,600]
    function returnSecondValue(getArray){
    return getArray[1]
    }

//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,1000]));




