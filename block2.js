var f_name = document.getElementById("f_name");
          var l_name = document.getElementById("l_name");
          var faculty = document.getElementById("faculty");
          var p_id = document.getElementById("p_id");
          var sub_list = document.getElementById("sub_list");

          const dataList = JSON.parse(localStorage.getItem("New_Var"));
          let count_b = localStorage.getItem("count_b");
          let reset_btn = document.getElementById("reset_btn");

          console.log("create empty array: ",count_b ,"=",dataList);
          console.log(localStorage.getItem("i"));
          
          sub_list.addEventListener("click",function(){
            dataList.push(f_name.value);
            dataList.push(l_name.value);
            dataList.push(faculty.value);
            dataList.push(p_id.value);
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

      
