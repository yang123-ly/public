$(function() {
    $.ajax({
        url:"http://www.qhdlink-student.top/student/newsa.php",
        type:"post",
        data:{"username":"ysf","userpwd":12345678,"userclass":"61","type":2},
        dataType:'json',
        success:function(data) {
            console.log(data)
        }


    })
})