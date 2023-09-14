// -------------  (while & do while) -----------=-

let num1=0;
while(num1 <= 10){
    console.log(num1);
    num1++;
}

let num2=0;
do{   
    console.log(num2);
    num2++;
}
while(num2 <=10)


// ----------- (class list) --------

let my=document.getElementById("text")
console.log(my.classList.length);
console.log(my.classList.contains("my"));
console.log(my.classList.contains("name"));

// ----------- (hasownproperty) --------

let data={
    name: "Ali" ,
    age:22
}
console.log(data.hasOwnProperty("name"));


// ----------- (task of prize) --------

let my_div=document.querySelector("div")
let my_p=document.createElement("p")
let my_text=document.createTextNode("text one")
my_p.appendChild(my_text)
my_div.onclick=function(){
    my_div.before(my_p)
}