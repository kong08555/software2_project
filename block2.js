var f_name = document.getElementById("f_name");
          var l_name = document.getElementById("l_name");
          var faculty = document.getElementById("faculty");
          var p_id = document.getElementById("p_id");
          var sub_list = document.getElementById("sub_list");

          var dataList = JSON.parse(localStorage.getItem("arr_empty"));
          var count_i = JSON.parse(localStorage.getItem("i"));
          var button = localStorage.getItem("button");
          var k_i = localStorage.getItem(key);
          
          console.log("create empty array: ", k_i ,dataList);
          console.log(localStorage.getItem("count"));
          

          sub_list.addEventListener("click",function(){
            dataList.push("name: "+f_name.value +" "+ l_name.value + "<br> faculty: "+ faculty.value + "<br> personal ID: "+ p_id.value);
            f_name.value = "";
            l_name.value = "";
            faculty.value = "";
            p_id.value = "";
            localStorage.setItem('dataList', JSON.stringify(dataList));
          });
