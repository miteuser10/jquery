$(function(){
    //before entering first item,it should be blank
    if(localStorage.getItem("students") == null){
        localStorage.setItem("students", JSON.stringify([]));
    }
    
    showRegisteredStudents();
    //form appears as dialog
    dialog = $("#dialog").dialog({
     autoOpen : false,
        height : 500 ,
        width : 500
    });
    
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
    
    //select date upto today
    $("#dob").datepicker({
       changeYear : true,
        changeMonth : true,
        maxDate : "0d"
    });
    
    $(".submit").click(function(){
        isValid =
               $("#regform").validate({
        rules:{
            usn:{
                required: true,
                minlength : 10,
                maxlength : 10
            },
            name:{
                required: true
            },
            email:{
                required:true
            },
            course:{
                required: true
            },
            cgpa:{
                required: true
            }
        },
        messages:{
            usn :{
                required: "USN can't be empty",
                minlength: "USN must have 10 characters",
                maxlength: "USN must have onlys 10 characters",
            },
            name:{
                required: "Enter your Full name"
            },
            email:{
                required: "Enter a valid email"
            },
            course:{
                required: "Select any one"
            },
            cgpa:{
                required:"Upto the current semester"
            }
        }
    }).form(); //appears in form
        if (isValid){           //all errors are cleared
    var usn = $("#usn").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var course = $("#course").val();
    var cgpa = $("#cgpa").val();
    var dob = $("#dob").val();
    $(".reset").click();
    
    student = {             //put all details in array
        "usn":usn,
        "name":name,
        "email":email,
        "mobile":mobile,
        "course":course,
        "cgpa":cgpa,
        "dob" : dob
    }
    
            var students = getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
    }
}); 
// end of form validation

    function showRegisteredStudents(){
        var students = getDataFromLocalStorage();
        var data = "";
        if (students.length == 0){
            data = "<h3>No Students registered yet..</h3>"
        } else{
            data += "<table id='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>NAME</th>";
            data += "<th>EMAIL</th>";
            data += "<th>MOBILE</th>";
            data += "<th>COURSE</th>";
            data += "<th>CGPA</th>";
            data += "<th>DOB</th>";
            data += "</tr></thead>";
            
            for (var i = 0; i < students.length; i++){
                var j = i +1;
                data += "<tr>";
                data += "<td>"+ j + "</td>";
                data += "<td>"+ students[i].usn + "</td>";
                data += "<td>"+ students[i].name + "</td>";
                data += "<td>"+ students[i].email+ "</td>";
                data += "<td>"+ students[i].mobile + "</td>";
                data += "<td>"+ students[i].course + "</td>";
                data += "<td>"+ students[i].cgpa + "</td>";
                data += "<td>"+ students[i].dob + "</td>";
                data += "</tr>"
            }
            data += "</table"
            
        }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength" : 2
        });
    }
// updating to local storage
    function getDataFromLocalStorage(){
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
        
    }
    
    function updateLocalStorageData(updatedStudentsArr){
        localStorage.setItem("students", JSON.stringify(updatedStudentsArr));
    }
        
    });
