var historyBorrow = document.getElementById("historyBorrow");
        var dataList = JSON.parse(localStorage.getItem("dataList"));
        let count_b = localStorage.getItem("count_b");
        const arr_em = [];
        

       function displayValues(){
        historyBorrow.innerHTML = "";
        for(var j =0;j < dataList.length; j++){
            var output = document.createElement("div");
            output.classList.add("output");
            output.innerHTML = dataList[j];
            historyBorrow.appendChild(output);
        }
        console.log(dataList);
       }

    displayValues();

    function delete_data(){
         localStorage.removeItem("dataList");
         document.getElementById("historyBorrow").innerHTML = "";
    }