var historyBorrow = document.getElementById("historyBorrow");
        var dataList = JSON.parse(localStorage.getItem("dataList"));
        let count_b = localStorage.getItem("count_b");
        const arr_em = [];
        

       function displayValues(){
        historyBorrow.innerHTML = "";
        for(var i =0;i < dataList.length; i++){
            var output = document.createElement("div");
            output.classList.add("output");
            output.innerHTML = dataList[i];
            historyBorrow.appendChild(output);
            console.log("data list",count_b," = ",dataList);
            arr_em.push(dataList[i]);
            console.log(arr_em.length);
        }
       }

    displayValues();

    function delete_data(){
         localStorage.removeItem(dataList);
         document.getElementById("historyBorrow").innerHTML = "";
    }