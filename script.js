let Strin="";
let refresh=document.querySelector(".clear")
let btn=document.querySelectorAll(".btn");
let remove=document.querySelector(".remove");
let current;
Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        try{
if(e.target.innerHTML=="="){
    Strin= eval(Strin);
    document.querySelector(".in").value=Strin;
}

else if(e.target.innerHTML=="AC"){
    Strin="";
}else{
    Strin=Strin + e.target.innerHTML;
    document.querySelector(".in").value=Strin;
}} catch(err){
    Strin=err.name;
    document.querySelector(".in").value=Strin;

} 
current=e.target.innerHTML;
    })
})
refresh.addEventListener("click",()=>{
    Strin=" "
     document.querySelector(".in").value=" ";
})
remove.addEventListener("click", () => {
    Strin = Strin.slice(0, -1); // Removes last character
    document.querySelector(".in").value = Strin;
});
