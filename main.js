function newFunc(){
let polidrom=prompt("eded ve ya soz daxil edin");
let word=polidrom.split("").reverse().join("");
if(polidrom==word){
    console.log("polidramdir")
}else{
    console.log("polidram deyil")
} 
}
newFunc();


// polidram yoxlama