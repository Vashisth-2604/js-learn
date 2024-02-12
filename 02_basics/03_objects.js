//Singleton
//Object.create

//object literals
const mysym = Symbol("key1")

const jsUser = {
    name :"Abhishek",
    "full name": "Abhishek vashisth",
    [mysym]:"mykey1",
    age : 25,
    location: "jaipur",
    email: "abhishek@google.com",
    isLoggedIn: false,
    Lastlogindays:["Monday", "Saturday"],
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(jsUser[mysym]);

jsUser.email="abhishekchatgpt.com"
//Object.freeze(jsUser)
jsUser.email="abhishekmicrsoft.com"

//console.log(jsUser);


jsUser.greeting= function() {
    console.log("Hello JS User");
}
jsUser.greetingTwo= function(){
    console.log(`hello js Users, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());