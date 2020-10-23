/*
    Ajax函数封装
    fn:指定函数
    method:打开方式
    url:目标地址
    asy：是否需为异步
    data：发送的数据

*/ 

function getData(fn,method,url,asy,data){
    var xmlHttp;
    if(window.XMLHttpRequest){
      xmlHttp= new XMLHttpRequest();
    }else if(window.ActiveXObject){
      xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
    }
    //打开链接
    xmlHttp.open(method,url,asy);
    //设置头信息
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //设置响应信息
    xmlHttp.onreadystatechange=change;
    //发送数据
    // xmlHttp.send(data);
    if(data){
      xmlHttp.send(data);
    }else{
      xmlHttp.send();
    }
    function change(){
    if(xmlHttp.readyState== 4 && xmlHttp.status==200){
        var str=xmlHttp.responseText;
        fn(str);
    }else{
      console.log("链接阶段");
    }


    }
}