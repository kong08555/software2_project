let arr_empty;
let New_Var = [];
let count_b = localStorage.getItem("count_b") || 0;
let button = document.getElementById("btn-2");
function create_arr(){
    count_b++;
    for (let i = 0;i < count_b+1;i++){
    New_Var[i] = [];
    localStorage.setItem("New_Var",JSON.stringify(New_Var));
    localStorage.setItem("count_b",count_b);
    localStorage.setItem("i",i);
    console.log(count_b);
    }
}