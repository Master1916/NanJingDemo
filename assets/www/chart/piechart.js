 


//初始化数据
function initpie() {
	//要显示的数据
	var data = [ {
		year : "2007-1-1",
		sales : 49
	}, {
		year : "2008",
		sales : 131
	}, {
		year : "2009",
		sales : 294
	}, {
		year : "2010",
		sales : 405
	} , {
		year : "2011",
		sales : 45
	}, {
		year : "2012",
		sales : 445
	}, {
		year : "2013",
		sales : 415
	}
	, {
		year : "2013",
		sales : 415
	}];

	var report = {
		x : "year",
		y : "sales",
		values : data
	};
   //画图
	graph(report, screen.width-200, screen.height-200);
}
/*
 *@method 生成柱状图数据报表
 */
function graph(report, maxWidth, maxHeight) {
	var data = report.values;
	var canvas = document.getElementById("graph");
	var axisBuffer = 50;
	canvas.width = screen.width;
	canvas.height = screen.height;
	var ctx = canvas.getContext("2d"); //<canvas>标签获取一个2D矩阵
	//ctx.fillStyle='#FF0000';         //给矩阵描绘颜色
	//ctx.fillRect(0,0,80,100);        //给矩阵定义宽高
	var width = 50;
	var buffer = 20;
	var i = 0;
	var x = buffer + axisBuffer;
	ctx.font = "bold 12px sans-serif";
	ctx.textAlign = "start";
	for (i = 0; i < data.length; i++) {
		ctx.fillStyle = "rgba(0, 0, 200, 0.9)";
		ctx.fillRect(x, maxHeight - (data[i][report.y] / 2), width,(data[i][report.y] / 2));
		ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
		ctx.fillText(data[i][report.x], x + (width / 4), maxHeight + 15);
		x += width + buffer;
		// draw the horizontal axis
		ctx.moveTo(axisBuffer, maxHeight);
		ctx.lineTo(axisBuffer + maxWidth, maxHeight);
		ctx.strokeStyle = "black";
		ctx.stroke();
		
		// draw the vertical axis
		ctx.moveTo(axisBuffer, 0);
		ctx.lineTo(axisBuffer, maxHeight);
		ctx.stroke();

	}
	for ( var i = 0; i < 30; i++) {
		// draw the horizontal axis

		if (i % 5 != 0) {
			ctx.moveTo(axisBuffer - 6, maxHeight - 10 * i);
			ctx.lineTo(axisBuffer + 10 - 10, maxHeight - 10 * i);

		} else {
			ctx.moveTo(axisBuffer - 10, maxHeight - 10 * i);
			ctx.lineTo(axisBuffer + 10 - 10, maxHeight - 10 * i);
			ctx.font = "normal 10pt Calibri";
			ctx.fillText(i, axisBuffer - 30, maxHeight - 10 * i);
		}
		ctx.strokeStyle = "black";
		ctx.stroke();
	}

	//画x轴的文字
	ctx.beginPath();
	ctx.font = "normal 10pt Calibri";
	ctx.fillText("时间(H)", axisBuffer + 200, maxHeight + 40);
	ctx.stroke();

	//画Y轴的文字
	ctx.beginPath();
	ctx.transform(0, -1, 1, 0, 15, 160);
	ctx.font = "normal 10pt Calibri";
	ctx.fillText("数量(个)", 1, -1);
	ctx.stroke();

}

