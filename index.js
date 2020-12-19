/*效果1：计时器。(为演示方便，将时分秒间的进率由60统一变成5)
显示浏览页面的时间。
所用知识点：周期执行*/
/*效果2：每2分钟(时间进率仍为5)后弹出确认框提示用户休息，
单击取消继续浏览，单击确定3秒后关闭页面。
所用知识点：确认框、窗口关闭、延迟执行*/
/*效果3：时间提醒的打开和关闭。
单击"关闭提醒"按钮，停止提醒,按钮名称改变；再次单击，继续提醒。
所用知识点；鼠标单击事件*/
/*效果4：图片移动形成动态效果*/


//效果1：计时器
//创建计时器节点
var timer=document.createElement("div");
//改好样式
timer.style.border="1px red solid";
timer.style.height="120px";
timer.style.width="280px";
timer.style.position="absolute";
timer.style.right="160px";
timer.style.top="40px";
timer.style.textAlign="center";
//写入内容
var timerHead=document.createElement("p");
var timerBottom=document.createElement("p");
var hour=document.createElement("span");
var minute=document.createElement("span");
var second=document.createElement("span");
timerHead.innerHTML="您已浏览页面:";
timerBottom.innerHTML="请注意休息呦~";
hour.innerHTML=0+'时';
minute.innerHTML=0+'分';
second.innerHTML=0+'秒';
timer.appendChild(timerHead);
timer.appendChild(hour);
timer.appendChild(minute);
timer.appendChild(second);
timer.appendChild(timerBottom);
timer.firstElementChild.style.marginBottom="20px";
timer.lastElementChild.style.marginTop="20px";
for(var i=0;i<5;i++){
	timer.childNodes[i].style.font="italic bolder 20px 黑体";
}
//添加在合适位置
var login=document.getElementsByClassName("right")[0];
login.style.marginTop="5px";
login.style.marginRight="60px";
var header=document.getElementsByClassName("header")[0];
header.appendChild(timer);
//10s后弹出确认框，并启动延迟执行（关闭页面）
var intervalSecond;
var intervalMinute;
var intervalHour;
var secondNum=parseInt(second.innerHTML);
var minuteNum=parseInt(minute.innerHTML);
var hourNum=parseInt(hour.innerHTML);
//页面加载完成后开始计时（）
var intervaltime;
window.onload=function(){
	intervalSecond=setInterval(function(){
		secondNum++;
		if(secondNum==5){
			secondNum=0;
		}
		second.innerHTML=secondNum+'秒';
	},1000);
	intervalMinute=setInterval(function(){
		minuteNum++;
		if(minuteNum==5){
			minuteNum=0;
		}
		minute.innerHTML=minuteNum+'分';
	},5000);
	intervalHour=setInterval(function(){
		hourNum++;
		hour.innerHTML=hourNum+'时';
	},25000); 
	//效果2：到临界时间点，弹出确认框
	intervaltime=setInterval(function(){
		var confirmValue=window.confirm("您已经看了一段时间了，休息一下吧");
		if(confirmValue==true){
			var timeout=setTimeout(function(){
				window.close();
			},3000);
		}
	},10000);	
	//效果4："猴子"图片移动形成动态效果
	//创建节点
	var monkey=document.createElement("img");
	//放在合适位置
	var body=document.body;
	body.appendChild(monkey);
	//添加内容
	monkey.src="images/monkey2.png";
	//设置样式
	monkey.style.position="fixed";
	monkey.style.bottom="0";
	monkey.style.left="0";
	monkey.style.width="160px";
	//设置移动样式
	var timeMonkey=0;
	var monkeyInterval;
	var bottom=parseInt(monkey.style.bottom);
	var screenHeight=parseInt(screen.availHeight);
	monkeyInterval=setInterval(function(){
		timeMonkey++;
		bottom=4.68*timeMonkey-0.01*timeMonkey*timeMonkey;
		if(bottom==0){
			timeMonkey=0;
		}
		monkey.style.bottom=bottom+"px";
	},1)
}
//效果3：时间提醒开关
//创建节点
var timeSwitch=document.createElement("button");
timeSwitch.innerHTML="关闭提醒";
//放在合适位置
timer.appendChild(timeSwitch);
//设置样式
timeSwitch.style.position="absolute";
timeSwitch.style.right="3px";
timeSwitch.style.bottom="9px";
//添加内容
timeSwitch.onclick=function(){
	if(timeSwitch.innerHTML=="关闭提醒"){
		timeSwitch.innerHTML="开启提醒";
		clearInterval(intervaltime);
	}else{
		timeSwitch.innerHTML="关闭提醒";
		intervaltime=setInterval(function(){
			var confirmValue=window.confirm("您已经看了一段时间了，休息一下吧");
			if(confirmValue==true){
				var timeout=setTimeout(function(){
					window.location.href = "about:blank";
        			window.close();
				},3000);
			}
		},10000);		
	}
}
