
function isLegal(age: number): boolean{
  if(age>=18){
    console.log("The guy is leagal");
    return true;
  }else{
    console.log("The guy is illeagal");
    return false;
  }
}

// yaha bhi TypeScript khud se hi pata laga rahi hai ki x ka type kya ho sakta hai
let x = isLegal(23);

console.log(); 