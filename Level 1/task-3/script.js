let counter = document.getElementsByClassName("count")[0];
let decBtn = document.getElementById("dec");
let resBtn = document.getElementById("res");
let incBtn = document.getElementById("inc");
let count = 0;
incBtn.addEventListener("click",function(){
    count++;
    counter.textContent = count;
});
decBtn.addEventListener("click",function(){
    count--;
    counter.textContent = count;
})
resBtn.addEventListener("click",function(){
     count = 0;
    counter.textContent = 0;
})
