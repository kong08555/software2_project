var f_name = document.getElementById("f_name");
          var l_name = document.getElementById("l_name");
          var faculty = document.getElementById("faculty");
          var p_id = document.getElementById("p_id");
          var sub_list = document.getElementById("sub_list");

          var dataList = JSON.parse(localStorage.getItem("arr_empty"));
          var count_i = JSON.parse(localStorage.getItem("i"));
          var count1 = localStorage.getItem("count1");
          let count_b = localStorage.getItem("count_b");
          let reset_btn = document.getElementById("reset_btn");

          console.log("create empty array: ",dataList);
          console.log(count_b);

          sub_list.addEventListener("click",function(){
            dataList.push("name: "+f_name.value +" "+ l_name.value + "<br> faculty: "+ faculty.value + "<br> personal ID: "+ p_id.value);
            f_name.value = "";
            l_name.value = "";
            faculty.value = "";
            p_id.value = "";
            localStorage.setItem('dataList', JSON.stringify(dataList));
          });

          reset_btn.addEventListener("click", function() {
            localStorage.removeItem("count_b");
            count_b = 0;
            console.log(count_b);
          });

      
