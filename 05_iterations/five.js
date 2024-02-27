const coding =["js","ruby","java","python","cpp"]
//coding.forEach(function (val){
  //    console.log(val);
//})

//coding.forEach((item) => {
  //  console.log(item);
//} )
  // function printMe(item) {
   // console.log(item);
//} 

//coding.forEach(printMe)

 

const myCoding = [
    {
        languageName:"javascript",
        languageFilename:"js"
    },
    {
        languageName:"java",
        languageFilename:"java"
    },
    {
        languageName:"Python",
        languageFilename:"py"
    },
]
myCoding.forEach((item) => {
    console.log(item.languageName);
})