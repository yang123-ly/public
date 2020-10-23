
//防抖：让一个函数在频繁触发时，一定时间只执行一次8
/*在页面开始添加*/
window.onresize = r;
function r(resizeNum){
	var winW = window.innerWidth;
	document.getElementsByTagName("html")[0].style.fontSize=winW*0.15625+"px";
	console.log(winW);
	if(winW>window.screen.width&&resizeNum<=10){
		setTimeout(function(){
			r(++resizeNum);
			console.log("防抖")
		}, 100);
		document.getElementsByTagName("body")[0].style.background = "#f00";
	}
	else{
		// document.getElementsByTagName("body")[0].style.opacity = 1;
		document.getElementsByTagName("body")[0].style.background = "#ff0";
		
	}
};
// setTimeout(r(0), 100);


