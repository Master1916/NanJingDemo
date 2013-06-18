

var screenWidth;
var screenHeight;
var radius;
var data;
var data_percent;
var describe;// 对每一块扇形的文字描述
var color;// 需要用到的颜色
var centre;// 确定圆心
var context;
var sum;

/*
h1.style.height =window.innerHeight*0.08+'px';
//can.style.height=window.innerHeight*0.835+'px';
screenWidth=window.innerWidth;
*/

//初始化画圆需要的参数
function initbar(data1,data2,data3) {
	data=new Array();
	color = [ "#FF0000", "#808080", "#00FF00"];
	data = [ data1, data2, data3,];
	describe=["常规培训","院组织培训","业务部门组织培训",];
	
	initdata_percent(data);
	
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;

	//定义圆心的位置
	centre = {
		x : screenWidth * 0.5,
		y : screenHeight * 0.41
	};
	//半径
	radius = screenWidth * 0.3125;
	drawCircle(data, color);
}
//画圆初始化data_percent
function initdata_percent(data){
	 sum=0;
	for(var j=0;j<data.length;j++){
		//alert(data[j]);
		sum=sum+data[j];
		//alert(sum);
	}
	//alert(sum);
	data_percent=new Array();
	for(var i=0;i<data.length;i++){
	//对数据进行百分比的初始化	
	var strData = parseFloat(data[i]/sum)*100;
    var ret = strData.toString().substring(0, strData.toString().indexOf(".")+2)+"%";
    data_percent[i]=ret;
    
	}	
}
//画圆的方法
function drawCircle(data, color) {
	var canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");

	var startPoint = 1.5 * Math.PI;// 要画圆的起始位置

	for ( var i = 0; i < data.length; i++) {
		context.fillStyle = color[i];
		context.strokeStyle = color[i];
		context.beginPath();
		context.moveTo(centre.x, centre.y);// 画笔开始位置
		context.arc(centre.x, centre.y, radius, startPoint, startPoint - Math.PI* 2 * (data[i] / sum), true);
		context.fill();
		context.stroke();
		startPoint -= Math.PI * 2 * (data[i] / sum);
		
	}
	drawSomething();

}
//画圆需要的注释
function drawSomething(){
	var height=new Array();
	var copy=0.06;//指两个注释之间距离是高的多少
	var rectWidth=screenWidth*0.25;//表示图形距离左边距的距离
	var data_percentWidth= screenWidth*0.5;//表示文字百分率距离左边距的距离
	var textWidth=screenWidth*0.75;//表示文字描述距离左边距的距离
	var w=50;//表示矩形的高
	var h=20//表示矩形的宽
	for(var i=0;i<data.length;i++){
		height[i]=screenHeight*(0.81+copy*i);
		context.beginPath();
		 //画矩形
		context.rect(rectWidth, height[i], w,h );
		context.fillStyle = color[i];
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = 'black';
		context.stroke();
		context.font = "normal 5pt Calibri";
		context.textAlign = "center";
		context.fillStyle ="000000";
		context.fillText(data[i], data_percentWidth, height[i]+h-5);
		context.fillText(describe[i], textWidth, height[i]+h-5);
	}
	//context.rect(x, y, width, height);
	
	
}