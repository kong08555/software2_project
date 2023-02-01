var historyBorrow = document.getElementById("historyBorrow");
        var dataList = JSON.parse(localStorage.getItem("dataList"));
        

       function displayValues(){
        historyBorrow.innerHTML = "";
        for(var i =0;i < dataList.length; i++){
            var output = document.createElement("div");
            output.classList.add("output");
            output.innerHTML = dataList[i];
            historyBorrow.appendChild(output);
            console.log(dataList);
        }
       }

    displayValues();

    function delete_data(){
         localStorage.removeItem("f_name");
         localStorage.removeItem("l_name");
         localStorage.removeItem("faculty");
         localStorage.removeItem("p_id");
         document.getElementById("historyBorrow").innerHTML = "";
    }