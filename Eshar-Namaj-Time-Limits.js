// document.getElementById("submit").addEventListener("click", function () {
//     let eshaTime = document.getElementById("esha-time").value;
//     let fazarTime = document.getElementById("fazar-time").value;


//     // let eshaTimeH =  parseInt(str.slice(0,2)); 
//     // let eshaTimeM = parseInt(str.slice(0,2)); 


//     // console.log(eshaTime, fazarTime);


// })
// let str = "ABCD";
// console.log(str.slice(0,2)); 
let esha = "753";
let fazar = "520";
let eshaTimeH = parseInt(esha.slice(0, 1));
let eshaTimeM = parseInt(esha.slice(1, 3));

let fazarTimeH = parseInt(fazar.slice(0, 1));
let fazarTimeM = parseInt(fazar.slice(1, 3));

let eshaMM = eshaTimeH*60 + eshaTimeM;
let fazarMM = fazarTimeH*60 + fazarTimeM;

let diffarance = 

console.log(eshaTimeH, ":",eshaTimeM);
console.log(fazarTimeH, ":",fazarTimeM);

console.log(eshaMM);
console.log(fazarMM);

