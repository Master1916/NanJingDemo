
function initline(){
	var x="时间-日期";
	var y="网络流量(Mbps)";
	var canvas = document.getElementById("myCanvas");
	canvas.width=screen.width;
	canvas.height=screen.height;
	//alert(screen.width);
//	alert(screen.height);

	var context = canvas.getContext("2d")
	context.beginPath();//定义了一个新的路径绘制动作的开始。
	
	context.strokeStyle="#808080";
	var j=10;
	//画竖线
	for( var i=0;i<=25;i++){
		 if(i%5==0){
			context.font="normal 10pt Calibri";
			context.textAlign="center";
			context.fillText(i,50+j*i,320);
			context.moveTo(50+j*i, 308);
			context.lineTo(50+j*i, 10);
			}  
		context.moveTo(50+j*i, 300);
		context.lineTo(50+j*i, 10);
		 
	 }
	var k=10;
	//画横线
	for(var i=0;i<30;i++){
		if(i%5==0){
			context.font="normal 10pt Calibri";
			context.textAlign="center";
			context.fillText(i,30, 300-k*i);
			
			context.moveTo(42, 300-k*i);
			context.lineTo(250, 300-k*i);
		}
		context.moveTo(50, 300-k*i);
		context.lineTo(300, 300-k*i);
	}
	context.stroke();
	 
	//画线
  point(context,2);
  
  point(context,1);
  context.beginPath();
	//标识线的意义
 	context.strokeStyle="#2e3192";
	context.fillStyle="#2e3192";
	context.moveTo(60,360);
	context.lineTo(100,360);
	context.fillText("接受速率",140,365);
	context.stroke(); 
 
  
  transfromx(context,x,170,340);
 	
	context.strokeStyle="#ed1c24";
	context.fillStyle="#ed1c24";
	context.moveTo(180,360);
	context.lineTo(220,360);
	context.fillText("接受速率",250,365);
	context.stroke();
  
  transfromy(context,y,20,140);	
 
}
//Y轴上面的文字描述
function transfromy(context,str,x,y){
	context.beginPath();
	context.transform(0,-1,1,0,x,y);//翻转文字
	context.font="normal 10pt Calibri";
	context.fillText(str,1,-1);
	context.stroke();
}
//X轴上面的文字描述
function transfromx(context,str,x,y){
	context.beginPath();
	context.font="normal 10pt Calibri"; 
	context.fillText(str,x,y);
	context.stroke();
	
}
//获得一个坐标在画布上的像素x轴坐标
//x 表示一个坐标x轴的值
function getxpixel(x){
	return 10*(x-1)+60;
}
//获得一个坐标在画布上的像素y轴的坐标
//y表示一个坐标值
function getypixel(y){
	return 300-10*y;
}
//随机生成一个坐标的x坐标
function randomxpoint(xmin,xmax){
  return parseInt(Math.random()*(xmax-xmin+1)+xmin); //随机获得一个点的x坐标的值
}	
//随机生成一个坐标的y坐标
function randomypoint(ymin,ymax){
 return parseInt(Math.random()*(ymax-ymin+1)+ymin);//随机获得一个点的y坐标的值
}


//画点
function point(context,flag){

var arry=new Array();
var arry1=new Array();
$.getJSON("http://10.1.40.231:8080/Demo/servlet/NetWorkServlet?time=2012-07-01",function(data){
		for(var i=0;i<24;i++){
					arry[i]=data[i].receive;
					arry1[i]=data[i].transmission;
				  // document.write(arry[i]);
		}
		context.beginPath();
		for(var i=1;i<=24;i++){
			if(flag==1){
				var y_=arry[i-1];
				}else if(flag==2){
				var y_=arry1[i-1];
			}	
		var y_pixle=getypixel(y_);
		var x_pixle=getxpixel(i);

		if(flag==1){
			context.strokeStyle="#2e3192"
			context.fillStyle="#2e3192"
		}else if(flag==2){
			context.strokeStyle="#ed1c24"
			context.fillStyle="#ed1c24"
		}
		
		//给点描一个星号
	 	// context.fillText("*",x_pixle, y_pixle);
		context.lineTo(x_pixle,y_pixle);
}
	context.stroke();
});
//document.write(arry[1]);
}