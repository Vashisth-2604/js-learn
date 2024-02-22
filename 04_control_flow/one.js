//if 
//const isUserloggedIn = true
//const tempetrature = 41

 //if(temperature === 40){
 //   console.log("less than 50");
  //       }else{
//console.log("temperature is greater than 50");
//}
//console.log("execute");
//< , > , <= , >= , == , != , === , !==

//++++++++++++++++++++++++++++++++++++++++

//const score = 200

//if (score > 100){
   // const power = "fly"
  //  console.log(`user power: ${power}`);
//}
//console.log(`user power: ${power}`)


//+++++++++++++++++++++++++++++++++++++++++


//const balance = 1000

//if(balance>500) console.log("test"),console.log("test2");

//if(balance < 500){
  //console.log("less than 500");
//} else if(balance < 750){
  //console.log("less than 750");
//}else if( balance< 900){
  //console.log("less than 750");
//}else{
  //console.log("less than 1200");
//}



//+++++++++++++++++++++++++++++++++++++++++

const userLoggedIn = true;
const debitcard = true;
const loggedinFromGoogle = false;
const loggedinFromEmail = true;

if(userLoggedIn && debitcard){
  console.log("Allow to buy course");
}

if (loggedinFromGoogle||loggedinFromEmail){
  console.log("user logged In");
}

