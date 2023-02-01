let arr_empty;
let count = 0;
let button = document.getElementById("btn-2");
function create_arr(){
    count++;
    for(let i = 0;i > count;i++){
    arr_empty = [];
    var key_i = localStorage.key(i);
    localStorage.setItem("button",button);
    localStorage.setItem("arr_empty",JSON.stringify(arr_empty))
    localStorage.setItem("count",count);
    
}
}