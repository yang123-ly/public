$(function() {//查看老师的接口以及渲染
    $.ajax({
        url:'http://qhdlink-student.top/test/teacher.php',
        dataType:'html',
        type:'get',
        data:{'username':"ysf","userpwd":12345678,'userclass':61,"type":2},
        success:function(obj) {
            console.log(obj);
            
            var obj = eval(obj);
            console.log(obj);
            function init(obj) {
                var str0 = '';
                $.each(obj,function(i,v){
                    str0 += `<div>
                                <img src="${v.pic}">
                                <button>删除</button>
                                <h2>${v.name_t}</h2>
                                <span>${v.msg_t}</span>
                            </div>
                            `
                })
                $('.msg0').html($(str0));    
            }
            init(obj);
            //添加老师点击提交按钮时的功能
            $(".submitTea").click(function() {               
                var name = $('[name="name"]').val();
                var content = $('[name="content"]').val();               
                if(name == ""||content == ""){
                    alert("内容为空");
                }else{
                    $(".addTeacher").hide();
                    var objLen = obj.length;
                    obj[objLen] = {id_t:objLen,pic:"../img/teacher/zheng.jpg",name_t:name,msg_t:content};
                    init(obj);
                }    
            })
            function delTea() {
                $.each(obj,function(i,v){
                    $(".msg button:eq("+i+")").click(function() {
                        
                        delete obj[i];
                        console.log(obj);
                        str = '';
                        var len = Object.keys(obj).length;                       
                        console.log(len);
                        var objNew = {};                        
                        for(let v = 0;v < len;v ++) {
                            objNew[v] = Object.values(obj)[v];
                        }
                        obj = objNew;                       
                        console.log(obj);
                        init(obj);
                        $(".msg button").slideDown(0);
                        console.log($('.msg0').children().length);
                        if($('.msg0').children().length == 0){
                            console.log($(".msg0"))
                            var h2 = $('<h2>内容为空<h2>');
                            h2.css("text-align","center");
                            $('.msg0').append(h2);
                        }
                        delTea();
                        
                    })
                })
            }
            delTea();
            //添加按钮
            $(".addli").click(function() {
                $(".addTeacher").css("display","block");
            })
            //删除按钮
            $(".delli").click(function() {
                $(".msg button").slideDown("slow")
            })
        }
    })

    
})


$(function() {//查看老师详细信息的接口以及渲染
    $.ajax({
        url:'http://www.qhdlink-student.top/student/coach.php',
        type:'post',
        dataType:'json',
        data:{'username':"zs","userpwd":12345678,'userclass':61,"type":2},
        success:function(data){
            console.log(data);
            var str = '';
            $.each(data,function(i,v){
                    str += `
                    <div>
                    <div class="left">
                        <img src="http://www.qhdlink-student.top/${v.path_coach}" alt="">
                    </div>
                    <div class="right">
                        <p>${v.name_coach}</p>
                        <p>工作时间：${v.dage_coach}</p>
                        <p>加入朗科时间：${v.tage_coach}</p>
                        <p>职位：${v.honor_coach}</p>
                        <p>入职前职位：${v.type_coach}</p>
                        <p>被誉为${v.evaluate_coach}星级讲师</p>
                    </div>
                </div>
                    `
            })
            $('.msg1').append($(str));
        }
    })
})

//学员banner
$(function() {//学员接口以及渲染
    $.ajax({
        url:"http://www.qhdlink-student.top/student/banner.php",
        type:"post",
        data:{'username':"zs","userpwd":12345678,'userclass':61,"type":2},
        success:function(data) {
            var str = '';
            var obj = JSON.parse(data);
            console.log(obj)
            $.each(obj,function(i,v){
                $(".contents>img:eq("+i+")").attr("src","http://www.qhdlink-student.top/" + v.path_banner)
            })
        }
    })
})

$(function() {//测导航栏点击事件
    $.extend({
        repeat:function() {
            $(".msg").css("display","none")
        }
    })
    $(".navLeft>ul>li>a").click(function(){
        $(this).next("ul").fadeToggle(500);
    })
    $('.checkDetTeacher').click(function() {
        $.repeat();
        $(".msg1").fadeToggle(500);
        $(".addTeacher").hide();
    })
    $('.checkTeacher').click(function() {
        $.repeat();
        $(".msg0").fadeToggle(500);
        
    })
    $('.checkStudent').click(function() {
        $.repeat();
        $(".msg2").fadeToggle(500); 
        $(".addTeacher").hide();
    })
    $(".addTeacher .del").click(function() {
        $(".addTeacher").hide();
    })
})
$(function() {//banner图展示
    var i = 0;
        function scrolls() {                           
                $('.contents').animate({'left':'-1000px'},500,function() {
                    $(this).append($(this).children('img:first')).css('left','0px');
                    i ++;
                    if(i === 4){
                        i = 0;
                    }
                    $('.num>span').eq(i).addClass('m').siblings('span').removeClass('m');
                    $('.num>span').each(function(index,value){
                        $(this).click(function() {
                            $('.contents').prepend($('img').eq(index));
                        })
                    })
                })             
        }
        timer = setInterval(scrolls,2000);
})