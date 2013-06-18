

var screenWidth;
var screenHeight;
var middleHeight;
var middleWidth;

var toppading; // 图片上面留出的边距
var leftpading;// 图片左边留出的边距
var rightpading;// 图片右边留出的边距
var bottompading;// 图片底部留出的边距

var ContainerPoint;// 存放点的容器

var topleft;// 左上方的开始的点
var topright; // 右上方结束的点
var bottomleft;// 左下方
var bottomright;// 右下方

var x_title; // x轴的标题
var y_title; // y轴的标题
var in_put;// 输入线的标识
var out_put;// 输出线的标识
var canvas; // 画布
var context; // 上下文

var x_copy;//x轴的份数
var y_copy;//  y轴的份数
var x_copys;//x轴一份的大小
var y_copys; //y轴一份的大小

var x_density; //x轴刻度标识的密度
var y_density; //y轴刻度标识的密度

var  legend1;
var  legend2;

var  legend1_color;
var  legend2_color;

var time;// 查找的时间



function init(){
	//控制格子的密度
	time="2012-07-01";
	
	x_copy=23;
	y_copy=30;
	
	x_density=3;
	y_density=3;
	
	x_title="时间(小时)";
	y_title="网络流量(Mbps)";
	
	legend1="——— 接受速率";
	legend2="——— 发送速率";
	
	legend1_color="#2e3192";
	legend2_color="#ed1c24";
	
	x_copys=screenWidth*(1-0.1-0.2)/x_copy;
	y_copys=screenHeight*(1-0.1-0.15)/y_copy;
}
function initdata() {
	
	screenWidth = screen.width;
	screenHeight = screen.height;
	middleWidth = screenWidth / 2;
	middleHeight = screenHeight / 2;

	toppading = screenHeight * 0.1;
	leftpading = screenWidth * 0.2;
	rightpading = screenWidth * 0.1;
	bottompading = screenHeight * 0.15;

	topleft = {
		x : leftpading,
		y : toppading
	};
	topright={
			x:screenWidth*0.9,
			y:toppading
	};
	bottomleft={
			x:leftpading,
			y:screenHeight*0.85
	}
	bottomright={
			x:screenWidth*0.9,
			y:screenHeight*0.85
	}
	//初始化自定义数据
	init();

}


function painting() {

	canvas = document.getElementById("myCanvas");
	canvas.width = screen.width;
	canvas.height = screen.height;
 
	context = canvas.getContext("2d");
	 
	context.beginPath();// 定义了一个新的路径绘制动作的开始。

	context.strokeStyle = "#808080";

	//画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {
			context.font = "normal 1pt Calibri";
			context.textAlign = "center";
			context.fillText(i, bottomleft.x-12, bottomleft.y - i*y_copys+4);
			context.moveTo(bottomleft.x, bottomleft.y- i*y_copys);
			context.lineTo(bottomright.x, bottomright.y- i*y_copys);
			
		} else {
			//context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			//context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}

	}
	context.stroke();
	
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	
	// 画竖线
	 for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {
			context.font = "normal 5pt Calibri";
			context.textAlign = "center";
			context.fillText(j, bottomleft.x + x_copys * j, bottomleft.y+12);
			
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
		}else{
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
		    context.lineTo(topleft.x + x_copys * j, topleft.y);

		}
	
	}
	 context.stroke(); 
	 transfromx(context, x_title, screenWidth*0.55, screenHeight*0.9);
	 
	 bule(context,legend2,screenWidth*0.7, screenHeight*0.95,legend2_color);
	 
	 transfromy(context, y_title, screenWidth*0.1, screenHeight*0.475);
	
	 bule(context,legend1,screenWidth*0.3, screenHeight*0.95,legend1_color);
	 
	 point(context, 1,time,legend1_color);
	 point(context, 2,time,legend2_color);
}
//标识图中线的意义 
function bule(context, str,x, y,color){
	context.strokeStyle = color;
	context.fillStyle = color;
	context.fillText(str, x, y);
	context.stroke();
	
}
function initline() {
	initdata();
	painting();
}
// Y轴上面的文字描述
function transfromy(context, str, x, y) {
	context.beginPath();
	context.fillStyle = "#000000";
	context.transform(0, -1, 1, 0, x, y);// 翻转文字
	context.font = "normal 10pt Calibri";
	context.fillText(str, 1, -1);
	context.stroke();
	context.setTransform(1,0,0,1,0,0);
}
// X轴上面的文字描述
function transfromx(context, str, x, y) {
	context.beginPath();
	context.font = "normal 10pt Calibri";
	context.fillText(str, x, y);
	context.stroke();

}
// 获得一个坐标在画布上的像素y轴的坐标
// y表示一个坐标值
function getypixel(y) {
	return bottomleft.y - y*y_copys;
}
// 画点
function point(context, flag,time,color) {

	var arry = new Array();
	var arry1 = new Array();
	$.getJSON("http://10.1.40.231:8080/Demo/servlet/NetWorkServlet?time="+time,
					function(data) {
						for ( var i = 0; i < 24; i++) {
							arry[i] = data[i].receive;
							arry1[i] = data[i].transmission;
						}
						context.beginPath();
						for ( var i = 0; i <= 23; i++) {
							if (flag == 1) {
								var y_ = arry[i ];
							} else if (flag == 2) {
								var y_ = arry1[i];
							}
							
							var x_pixle = bottomleft.x+i*x_copys;
							var y_pixle = getypixel(y_);
							

							if (flag == 1) {
								context.strokeStyle =color;
								context.fillStyle = color;
							} else if (flag == 2) {
								context.strokeStyle = color;
								context.fillStyle = color;
							}

							//给点描一个星号
							// context.fillText("*",x_pixle, y_pixle);
							context.lineTo(x_pixle, y_pixle);
						}
						context.stroke();
					});
	 
}



//随机生成一个坐标的x坐标
function randomxpoint(xmin, xmax) {
	return parseInt(Math.random() * (xmax - xmin + 1) + xmin); // 随机获得一个点的x坐标的值
}
// 随机生成一个坐标的y坐标
function randomypoint(ymin, ymax) {
	return parseInt(Math.random() * (ymax - ymin + 1) + ymin);// 随机获得一个点的y坐标的值
}
//获得一个坐标在画布上的像素x轴坐标
//x 表示一个坐标x轴的值
function getxpixel(x) {
	return 10 * (x - 1) + 60;
}