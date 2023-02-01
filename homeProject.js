let arr_empty;
let count_b = localStorage.getItem("count_b") || 0;
let button = document.getElementById("btn-2");
button.addEventListener("click",function(){
    count_b++;
    arr_empty = [];
    localStorage.setItem("arr_empty",JSON.stringify(arr_empty))
    localStorage.setItem("count_b",count_b);
    console.log(count_b);
    
});