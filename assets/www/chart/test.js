//定义画布的高度和长度
var legendHeight;
var canvasWidth;
//定义比例
var legend;
var legend1;

var pxHeight;// 画布的像素
var long;
var start;
var end;
var Margin;




function init(){
	start=200;
	end=5000;
    legend=50;
	legend1=0.5;
	canvasWidth=1000;
	Margin=50;
	
	init1(start,end,legend,legend1,Margin);
}

function init1(start,end,legend,legend1,Margin){
	
    legendHeight=end*legend/start-legend;
    
    pxHeight=legendHeight*legend1;
    
	canvas = document.getElementById("myCanvas");
	canvas.width = canvasWidth;
	
	canvas.height = pxHeight+Margin*2;
	context = canvas.getContext("2d");

	drawScale(30,Margin,100,pxHeight);

}

function drawScale(leftMargin,topMargin,width,heigth){
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	//画矩形
	context.rect(leftMargin, topMargin, width,heigth);
	context.fillStyle='#c3c3c3';
	//context.fill();
	context.lineWidth=1;
	context.strokeStyle="black";
	context.stroke();
	
	/*for(var i=1;i<=){
		
	}*/
	
	
	
	
}

 

	
	