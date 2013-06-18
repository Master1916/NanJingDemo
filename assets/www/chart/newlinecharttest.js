var screenWidth;// 或得画布的宽
var screenHeight;// 获得画布的高

var middleHeight;
var middleWidth;

var toppading; // 图片上面留出的边距
var toppading_text;// 图表时间显示的底边的位置
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

var x_copy;// x轴的份数或个数
var y_copy;// y轴的份数或个数
var x_copys;// x轴一份的大小
var y_copys; // y轴一份的大小

var x_density; // x轴刻度标识的密度
var y_density; // y轴刻度标识的密度

var legend;//存储lengend
var legend1;
var legend2;
var legend3;
var legend4;
var legend5;
var legend6;

var legend1_color;
var legend2_color;
var legend3_color;
var legend4_color;
var legend5_color;
var legend6_color;

var time;// 查找的时间

var canvas;
var context;
// 表示第一次请求数据还是第多次请求数据

var request_times;
// 在一个运维指标中有很多数据 可能需要使用不同类的图去表示其中的数据
// unm 表示第几类；num=1 表示第一类 num=2表示第二类

var num;
var place;

// 系统平台
var devicePlatform;

var year;
var month;
var day;
var type;

var urlstr;

//画园所需要的参数
//--------------------------
var radius;
var data;
var data_percent;
var describe;// 对每一块扇形的文字描述
var color;// 需要用到的颜色
var centre;// 确定圆心
var sum;
//--------------------------

//TYPE 类型
var ckzx_type;
var qyzx45;
var qyzx8;
var tcqz;
var dx100m;
var dx100mzx;
var sky;
var yd10m;
var ydhz;
var PxxtYyzbtjb;
var Pxxt;
var pxxttypeYear;

var typeCkjhj;
var typeScjhj;
var typeZwlj;
var typeWlj1;
var typeWlj2;

var typeWlj3;
var type5hc;
var type6hc;
var typeFwq;
var typeAfzx;
var typeSt;
var typeWxkzq;
var typeJkzx;

//ip地址
var ipstr;

// type 是表示在请求数据的时候相似数据中的不同类型
// js 入口
function initline(time1) {
	
	ipstr="10.1.40.232";
	//ipstr="192.168.1.119";
	checkNet();
	// 初始化窗体
	getWindow();
	// 初始化一些通用的数据
	initGeneral();
	// 初始化网络获得的数据
	initdata(time1);
	// 画图
	// painting();
}

function getWindow() {
	// alert("screen.width="+screen.width);
	// alert("screen.height="+screen.height);
	// alert("window.innerHeight="+window.innerHeight);
	var h = document.getElementById("head");
	var h1 = document.getElementById("foot");
	 
	if (window.innerHeight > 700) {
		h.style.height = window.innerHeight * 0.05 + 'px';
		h1.style.height = window.innerHeight * 0.05 + 'px';
		// can.style.height=window.innerHeight*0.835+'px';
		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight * 0.893;
	} else {
		h.style.height = window.innerHeight * 0.08 + 'px';
		h1.style.height = window.innerHeight * 0.08 + 'px';
		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight * 0.83;
	}
	/*
	 * h.style.height =window.innerHeight*0.08+'px'; h1.style.height
	 * =window.innerHeight*0.08+'px';
	 * //can.style.height=window.innerHeight*0.835+'px';
	 * screenWidth=window.innerWidth; screenHeight=window.innerHeight*0.835;
	 */
}

function initGeneral() {

	year = "yyyy";
	month = "mm";
	day = "dd";

	middleWidth = screenWidth / 2;
	middleHeight = screenHeight / 2;

	toppading = screenHeight * 0.1;
	toppading_text = screenHeight * 0.07;
	leftpading = screenWidth * 0.2;
	rightpading = screenWidth * 0.1;
	bottompading = screenHeight * 0.15;

	topleft = {
		x : leftpading,
		y : toppading
	};
	topright = {
		x : screenWidth * 0.9,
		y : toppading
	};
	bottomleft = {
		x : leftpading,
		y : screenHeight * 0.85
	};
	bottomright = {
		x : screenWidth * 0.9,
		y : screenHeight * 0.85
	};

	//初始化类型
	qyzx45 = "ckyzx_qyzx45m";
	qyzx8 = "ckyzx_qyzx8m";
	tcqz = "ckyzx_tcqz";
	dx100m = "ckyzx_dx100m";
	dx100mzx = "ckyzx_dx100mzx";
	sky = "ckyzx_sky";
	yd10m = "ckyzx_yd10m";
	ydhz = "ckyzx_ydbh";

	PxxtYyzbtjb = "typeYyzbtjb";
	Pxxt = "typePxxt";
	pxxttypeYear = "typeYear";

	//骨干流量数据类型
	typeCkjhj = "typeCkjhj";
	typeScjhj = "typeScjhj";
	typeZwlj = "typeZwlj";
	typeWlj1 = "typeWlj1";
	typeWlj2 = "typeWlj2";

	typeWlj3 = "typeWlj3";
	type5hc = "type5hc";
	type6hc = "type6hc";
	typeFwq = "typeFwq";
	typeAfzx = "typeAfzx";
	typeSt = "typeSt";
	typeWxkzq = "typeWxkzq";
	typeJkzx = "typeJkzx";
}

function initdata(time1) {
	// 初始化自定义数据
	// alert("time1="+time1);
	init(time1);
	// getData(time,request_time,place,num);
}

function init(time1) {
	// 获得是那种时间格式去显示数据的信息
	type = time1.substring(time1.length - 1, time1.length);
	// alert("type="+type);
	if (type == "1") {
		// 倒数第四个数第几次请求数据 request_time
		// 倒数第三个数表示哪一种指标 place
		// 倒数第二个数表示具体一个指标中那类表 num
		// 倒数第一个数表示那种时间格式表示 type
		// 例如： 2013 1111
		// alert(time1.length);
		// alert("time1的长度="+time1.length);
		t = time1.substring(0, 4);
		request_time = time1.substring(4, 5);
		place = time1.substring(5, 6);
		// alert("place="+place);
		num = time1.substring(6, 7);
		// alert("num="+num);
		getType(place, num);

		//由于服务端数据的查询不管是年、年月、年月日、的查询都是使用2011-01-10这种格式
		//所以我们要做一些调整后才能根据时间去获取数据
		//判断是否是月度汇总查询 是这对时间格式进行调整 
		t = t + "-01-01";
		if (request_time == 1) {
			getUrl(place, num);
			getData(t, request_time, place, num);
		} else if (request_time == 2) {
			getUrl(place, num);
			//alert("time=" + t + "&times=" + request_time+"&type="+ckzx_type);
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type, //
				success : function(data) {
					if (place == 9) {//对存在的特殊情况进行处理
						if (num == 1) {
							if (data.length == 2) {
								openpop();
								return;
							} else {
								second_getData(place, num, data);
								time = time1.substring(0, 4);
							}
						}

					} else {
						if (data.length == 1) {
							openpop();
							return;
						} else {
							second_getData(place, num, data);
							time = time1.substring(0, 4);
						}
					}
				}
			});
		}
	} else if (type == "2") {
		var t = time1.substring(0, 7);
		request_time = time1.substring(7, 8);
		place = time1.substring(8, 9);
		num = time1.substring(9, 10);
		getType(place, num);
		t = t + "-01";
		if (request_time == 1) {
			getUrl(place);
			getData(t, request_time, place, num);

		} else if (request_time == 2) {
			getUrl(place);
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					if (data.length == 1) {
						openpop();
						return;
					} else {
						second_getData(place, num, data);
						//getData(t, request_time, place, num);
						time = time1.substring(0, 7);
					}
				}
			});
		}
	} else if (type == "3") {
		// 时间格式： 2013-07-01 1113
		// alert("time1的长度="+time1.length);
		var t = time1.substring(0, 10);
		// alert("time的长度="+time.length);
		// alert(time);
		request_time = time1.substring(10, 11);
		// alert(request_time);
		place = time1.substring(11, 12);
		// alert(request_time);
		num = time1.substring(12, 13);

		getType(place, num);
		if (request_time == 1) {
			getUrl(place);
			//type
			getData(t, request_time, place, num, ckzx_type);
			// time=time1.substring(0, 7);
		} else if (request_time == 2) {
			getUrl(place);
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type=" + ckzx_type,//
				success : function(data) {
					if (place == "b") {//对存在的特殊情况进行处理
						if (num == 1 || num == 2 || num == 3 || num == 4
								|| num == 5) {
							if (data.length == 5) {
								openpop();
								return;
							} else {
								second_getData(place, num, data);
								time = time1.substring(0, 10);
							}

						}

					} else {
						if (data.length == 1) {
							openpop();
							return;
						} else {
							second_getData(place, num, data);
							time = time1.substring(0, 10);
						}
					}

				}
			});
		}
	}
	
	// 初始化一些变量
	description(place, num);

	// 获得 设备的是什么平台
	// 默认是html5 方便在浏览器中调试
	device_platform = "html5";
	// device_platform = "Android";
	// android的话 device_platform=“Android”
	// IPHONE的话 device_platform=“iOS”
	//device_platform=device.platform;
	// alert(device_platform);
}
//根据place和num获得是那种type
function getType(place, num) {
	if (place == 7) {
		if (num == 1) {
			ckzx_type = qyzx45;
		} else if (num == 2) {
			ckzx_type = qyzx8;
		} else if (num == 3) {
			ckzx_type = tcqz;
		} else if (num == 4) {
			ckzx_type = dx100m;
		} else if (num == 5) {
			ckzx_type = dx100mzx;
		} else if (num == 6) {
			ckzx_type = sky;
		} else if (num == 7) {
			ckzx_type = yd10m;
		}

	} else if (place == "d") {
		ckzx_type = ydhz;
	} else if (place == 9) {
		if (num == 1) {
			ckzx_type = pxxttypeYear;
		} else if (num == 2) {
			ckzx_type = Pxxt;
		} else if (num == 3) {
			ckzx_type = PxxtYyzbtjb;
		}

	} else if (place == 8) {
		if (num == 1) {
			ckzx_type = typeCkjhj;
		} else if (num == 2) {
			ckzx_type = typeScjhj;
		} else if (num == 3) {
			ckzx_type = typeZwlj;
		} else if (num == 4) {
			ckzx_type = typeWlj1;
		} else if (num == 5) {
			ckzx_type = typeWlj2;
		} else if (num == 6) {
			ckzx_type = typeWlj3;
		} else if (num == 7) {
			ckzx_type = type5hc;
		}
	} else if (place == "e") {
		if (num == 1) {
			ckzx_type = type6hc;
		} else if (num == 2) {
			ckzx_type = typeFwq;
		} else if (num == 3) {
			ckzx_type = typeAfzx;
		} else if (num == 4) {
			ckzx_type = typeSt;
		} else if (num == 5) {
			ckzx_type = typeWxkzq;
		} else if (num == 6) {
			ckzx_type = typeJkzx;
		}
	}

}

function getUrl(palce) {
	if (place == 1) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/ibmgpu!queryibmGpuList.action";
	} else if (place == 2) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/ibmhs!queryibmhsList.action";
	} else if (place == 3) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/sgjq!querysgjqList.action";
	} else if (place == 4) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/hpjq!queryHpjqList.action";
	} else if (place == 5) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/network!queryNetworkList.action";
	} else if (place == 6) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/vpnsyjl!queryVPNList.action";
	} else if (place == 7) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/ckyzx!queryCkyzx.action";
	} else if (place == 8) {
		urlstr = "http://" + ipstr + ":8080/importExcel/ggll!queryData.action";
	} else if (place == 9) {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/ygpxxt!queryYgpxList.action";
	} else if (place == "a") {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/zhywxt!queryZhywxtList.action";
	} else if (place == "b") {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/upsydjlb!queryDataList.action";
	} else if (place == "c") {
		urlstr = "http://" + ipstr + ":8080/importExcel/erpxt!queryData.action";
	} else if (place == "d") {
		urlstr = "http://" + ipstr
				+ ":8080/importExcel/ckyzx!queryCkyzx.action";
	} else if (place == "e") {
		urlstr = "http://" + ipstr + ":8080/importExcel/ggll!queryData.action";

	}
}

function description(place, num) {
	if (place == 1 || place == 2 || place == 3 || place == 4) {
		if (num == 1) {
			// 横竖坐标的文字说明
			x_title = "时间(日)";
			y_title = "利用率(%)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "—— CPU";
			legend2 = "—— MEM";
			legend3 = "—— GPU";

			// 曲线中线的颜色
			legend1_color = "#2e3192";
			legend2_color = "#ed1c24";
			legend3_color = "#FFAA00";

		} else if (num == 2) {
			// 横竖坐标的文字说明
			x_title = "时间(日)";
			y_title = "网络收发速率(Mb/S)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "——— IN";
			legend2 = "——— OUT";
			// 曲线中线的颜色
			legend1_color = "#2e3192";
			legend2_color = "#ed1c24";
		} else if (num == 3) {
			// 横竖坐标的文字说明
			x_title = "时间(日)";
			y_title = "利用率(%)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "——— DR";
			legend2 = "——— DW";

			// 曲线中线的颜色
			legend1_color = "#2e3192";
			legend2_color = "#ed1c24";
		}
	} else if (place == 5) {// 网络攻击安全
		if (num == 1) {
			// 横竖坐标的文字说明
			x_title = "时间(日)";
			y_title = "事件个数";

			// 在曲线图中动态生成线的文字表示

			legend1 = "—— 重要事件";
			legend2 = "—— 严重事件";
			legend3 = "—— 紧急事件";
			legend4 = "—— 阻断攻击";

			// 曲线中线的颜色
			legend1_color = "#FFAA00";
			legend2_color = "#1f31bd";
			legend3_color = "#516057";
			legend4_color = "#9C0A4E";

		}

	} else if (place == 6) {// vpn使用记录
		if (num == 1) {
			// 横竖坐标的文字说明
			x_title = "时间(日)";
			y_title = "个数";

			// 在曲线图中动态生成线的文字表示
			legend1 = "——— 用户登录";
			legend2 = "——— 连接数";

			// 曲线中线的颜色
			legend1_color = "#2e3192";
			legend2_color = "#ed1c24";

		} else if (num == 2) {
			// 横竖坐标的文字说明
			x_title = "时间(日)";
			y_title = "网络流量(M)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "——— NETIN";
			legend2 = "——— NETOUT";

			// 曲线中线的颜色
			legend1_color = "#2e3192";
			legend2_color = "#ed1c24";

		}

	} else if (place == 7) {// 出口和专线流量统计
		if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5
				|| num == 6 || num == 7) {
			// 横竖坐标的文字说明
			x_title = "时间(小时)";
			y_title = "网络流量(Mbps)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "接受最大值";
			legend2 = "接受最小值";
			legend3 = "接受平均值";
			legend4 = "发送最大值";
			legend5 = "发送最小值";
			legend6 = "发送平均值";

			// 曲线中线的颜色
			legend1_color = "#000080";
			legend2_color = "#FF00FF";
			legend3_color = "#3373a5";
			legend4_color = "#569162";
			legend5_color = "#800080";
			legend6_color = "#800000";

		} else if (num == 8) {

			// 横竖坐标的文字说明
			x_title = "时间(月)";
			y_title = "网络流量(GB)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "区域中心接受流量";
			legend2 = "区域中心发送流量";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";

		}
	} else if (place == 8) {// 骨干线路流量统计(1)
		if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5
				|| num == 6 || num == 7) {
			// 横竖坐标的文字说明
			x_title = "时间(小时)";
			y_title = "网络流量(Mbps)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "接受最大值";
			legend2 = "接受最小值";
			legend3 = "接受平均值";
			legend4 = "发送最大值";
			legend5 = "发送最小值";
			legend6 = "发送平均值";

			// 曲线中线的颜色
			legend1_color = "#000080";
			legend2_color = "#FF00FF";
			legend3_color = "#3373a5";
			legend4_color = "#569162";
			legend5_color = "#800080";
			legend6_color = "#800000";
		} else {
			alert("数据出错");
		}

	} else if (place == 9) {// 员工培训系统应用
		if (num == 1) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "个数";

			// 在曲线图中动态生成线的文字表示
			legend1 = "用户登录数";
			legend2 = "培训总人数";
			legend3 = "自主学习";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";
			legend3_color = "#83B2B1";

		} else if (num == 2) {
			// 横竖坐标的文字说明
			x_title = "时间(月)";
			y_title = "个数";

			// 在曲线图中动态生成线的文字表示
			legend1 = "综合知识";
			legend2 = "专业技术";
			legend3 = "管理制度";
			legend4 = "专业标准";
			legend5 = "常规培训";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";
			legend3_color = "#ed1c24";

		} else if (num == 3) {
			// 横竖坐标的文字说明
			x_title = "时间(月)";
			y_title = "";

			// 在曲线图中动态生成线的文字表示
			legend1 = "院组织培训";
			legend2 = "业务部门培训";
			legend3 = "常规培训";

			legend1_color = "#547A42";
			legend2_color = "#83B2B1";
			legend3_color = "#83B2B1";

		}

	} else if (place == "a") {// 综合业务系统应用指标

		if (num == 1) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "人数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——登录人数";

			// 曲线中线的颜色
			legend1_color = "#547A42";

		} else if (num == 2) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "次数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——工作安排";
			legend2 = "——工作请示";

			// 曲线中线的颜色
			legend1_color = "#547A42"
			legend2_color = "#FFAA00"

		} else if (num == 3) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "次数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——工作计划";
			legend2 = "——工作总结";
			// 曲线中线的颜色
			legend1_color = "#547A42"
			legend2_color = "#FFAA00"
		} else if (num == 4) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "次数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——月度计划";
			legend2 = "——月度总结";
			// 曲线中线的颜色
			legend1_color = "#547A42"
			legend2_color = "#FFAA00"
		} else if (num == 5) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "个数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "财务审批";
			legend2 = "物料零购";
			legend3 = "投资计划零购";

			// 曲线中线的颜色
			legend1_color = "#547A42"
			legend2_color = "#FFAA00"
			legend3_color = "#FF401A"
		} else if (num == 6) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "个数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——短信发送";

			// 曲线中线的颜色
			legend1_color = "#547A42"
		} else if (num == 7) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "个数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——系统升级";

			// 曲线中线的颜色
			legend1_color = "#547A42"
		} else if (num == 8) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "个数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——系统存储";

			// 曲线中线的颜色
			legend1_color = "#547A42"
		} else if (num == 9) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "个数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——用户维护";

			// 曲线中线的颜色
			legend1_color = "#547A42"
		} else if (num == 0) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "人数";
			// 在曲线图中动态生成线的文字表示
			legend1 = "——用户培训";

			// 曲线中线的颜色
			legend1_color = "#547A42"
		}

	} else if (place == "b") {// ups指标
		if (num == 1) {//总耗电量
			// 在曲线图中动态生成线的文字表示
			legend1 = "总耗电量";

			// 曲线中线的颜色
			legend1_color = "#547A42"

		} else if (num == 2) {//空调
			// 在曲线图中动态生成线的文字表示
			legend1 = "空调";

			// 曲线中线的颜色
			legend1_color = "#547A42"

		} else if (num == 3) {//照明及其他用电
			// 在曲线图中动态生成线的文字表示
			legend1 = "照明及其他用电";

			// 曲线中线的颜色
			legend1_color = "#547A42"

		} else if (num == 4) {//ups输出
			// 在曲线图中动态生成线的文字表示
			legend1 = "ups输出";

			// 曲线中线的颜色
			legend1_color = "#547A42"

		} else if (num == 5) {//PUE
			// 在曲线图中动态生成线的文字表示
			legend1 = "PUE";

			// 曲线中线的颜色
			legend1_color = "#547A42"

		}

	} else if (place == "c") {// ERP指标
		if (num == 1) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "张数";

			// 在曲线图中动态生成线的文字表示
			legend1 = "会计凭证";

			// 曲线中线的颜色
			legend1_color = "#547A42";

		} else if (num == 2) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "笔数";

			// 在曲线图中动态生成线的文字表示
			legend1 = "财企直连";

			// 曲线中线的颜色
			legend1_color = "#547A42";

		} else if (num == 3) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "张数";

			// 在曲线图中动态生成线的文字表示
			legend1 = "MRO采购申请";
			legend2 = "MRO采购订单";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";

		} else if (num == 4) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "笔数/个数";

			// 在曲线图中动态生成线的文字表示
			legend1 = "创建WBS元素";
			legend2 = "申请供应商";
			legend3 = "ps采购申请";
			legend4 = "服务接受";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";
			legend3_color = "#FFAA00";
			legend4_color = "#D20040";

		} else if (num == 5) {
			// 横竖坐标的文字说明
			x_title = "时间(年)";
			y_title = "套数/人次";

			// 在曲线图中动态生成线的文字表示
			legend1 = "软件安装";
			legend2 = "用户维护";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";

		}

	} else if (place == "d") {// 出口与流量月度汇总

		if (num == 1) {
			// 横竖坐标的文字说明
			x_title = "时间(月)";
			y_title = "流量(GB)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "区域中心8M接受";
			legend2 = "区域中心8M发送";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";
		} else if (num == 2) {
			// 横竖坐标的文字说明
			x_title = "时间(月)";
			y_title = "流量(GB)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "区域中心45M接受";
			legend2 = "区域中心45M发送";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";

		} else if (num == 3) {
			// 横竖坐标的文字说明
			x_title = "时间(月)";
			y_title = "流量(GB)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "电信宽带接受";
			legend2 = "电信宽带发送";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";

		} else if (num == 4) {
			// 横竖坐标的文字说明
			x_title = "时间(月)";
			y_title = "流量(GB)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "电信互联接受";
			legend2 = "电信互联发送";

			// 曲线中线的颜色
			legend1_color = "#547A42";
			legend2_color = "#83B2B1";

		}

	} else if (place == "e") {
		if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5
				|| num == 6) {
			// 横竖坐标的文字说明
			x_title = "时间(小时)";
			y_title = "网络流量(Mbps)";

			// 在曲线图中动态生成线的文字表示
			legend1 = "接受最大值";
			legend2 = "接受最小值";
			legend3 = "接受平均值";
			legend4 = "发送最大值";
			legend5 = "发送最小值";
			legend6 = "发送平均值";

			// 曲线中线的颜色
			// 曲线中线的颜色
			legend1_color = "#000080";
			legend2_color = "#FF00FF";
			legend3_color = "#3373a5";
			legend4_color = "#569162";
			legend5_color = "#800080";
			legend6_color = "#800000";

		} else {
			alert("数据出错");
		}

	} else {
		alert("数据错误，请重新开启应用！");
	}

}

function description_ygpx(num, num1, num2, num3) {
	if (num == 1) {
		// 横竖坐标的文字说明
		x_title = "时间(月)";
		y_title = "个数";
		// 在曲线图中动态生成线的文字表示
		legend1 = "用户登录(" + num1 + ")";
		legend2 = "参加培训(" + num2 + ")";
		legend3 = "自主学习(" + num3 + ")";

		// 曲线中线的颜色
		legend1_color = "#547A42";
		legend2_color = "#83B2B1";
		legend3_color = "#603813";

	}
}

function description_erp(num, num1, num2, num3, num4) {
	if (num == 1) {
		// 横竖坐标的文字说明
		x_title = "时间(年)";
		y_title = "张数";
		// 在曲线图中动态生成线的文字表示
		legend1 = "会计凭证(" + num1 + ")";
		// 曲线中线的颜色
		legend1_color = "#547A42";
	} else if (num == 2) {
		// 横竖坐标的文字说明
		x_title = "时间(年)";
		y_title = "笔数";

		// 在曲线图中动态生成线的文字表示
		legend1 = "财企直连(" + num1 + ")";
		// 曲线中线的颜色
		legend1_color = "#547A42";

	} else if (num == 3) {
		// 横竖坐标的文字说明
		x_title = "时间(年)";
		y_title = "张数";

		// 在曲线图中动态生成线的文字表示
		legend1 = "MRO采购申请(" + num1 + ")";
		legend2 = "MRO采购订单(" + num2 + ")";

		// 曲线中线的颜色
		legend1_color = "#547A42";
		legend2_color = "#83B2B1";

	} else if (num == 4) {
		// 横竖坐标的文字说明
		x_title = "时间(年)";
		y_title = "笔数/个数";

		// 在曲线图中动态生成线的文字表示
		legend1 = "创建WBS元素(" + num1 + ")";
		legend2 = "申请供应商(" + num2 + ")";
		legend3 = "ps采购申请(" + num3 + ")";
		legend4 = "服务接受(" + num4 + ")";
		// 曲线中线的颜色
		legend1_color = "#547A42";
		legend2_color = "#83B2B1";
		legend3_color = "#603813";
		legend4_color = "#4d4d4d";
	} else if (num == 5) {
		// 横竖坐标的文字说明
		x_title = "时间(年)";
		y_title = "套数/人次";
		// 在曲线图中动态生成线的文字表示
		legend1 = "软件安装(" + num1 + ")";
		legend2 = "用户维护(" + num2 + ")";
		// 曲线中线的颜色
		legend1_color = "#547A42";
		legend2_color = "#83B2B1";

	}

}

function description_ups(num, num1, num2, num3, num4) {
	if (num == 1) {
		// 横竖坐标的文字说明
		x_title = "时间(日)";
		y_title = "电量";
		// 在曲线图中动态生成线的文字表示
		legend1 = "日耗电量(" + num1 + ")、" + "周(" + num2 + ")、"
				+ "月(" + num3 + ")、" + "年(" + num4 + ")";

		// 曲线中线的颜色
		legend1_color = "#547A42";

	} else if (num == 2) {
		// 横竖坐标的文字说明
		x_title = "时间(日)";
		y_title = "电量";
		// 在曲线图中动态生成线的文字表示
		legend1 = "日耗电量(" + num1 + ")、"  + "周(" + num2 + ")、"
				+ "月(" + num3 + ")、" + "年(" + num4 + ")";

		// 曲线中线的颜色
		legend1_color = "#547A42";
	} else if (num == 3) {
		// 横竖坐标的文字说明
		x_title = "时间(日)";
		y_title = "电量";
		// 在曲线图中动态生成线的文字表示
		legend1 = "日耗电量(" + num1 + ")、"  + "周(" + num2 + ")、"
		+ "月(" + num3 + ")、" + "年(" + num4 + ")";
		// 曲线中线的颜色
		legend1_color = "#547A42";

	} else if (num == 4) {
		// 横竖坐标的文字说明
		x_title = "时间(日)";
		y_title = "ups值";

		// 在曲线图中动态生成线的文字表示
		legend1 = "————UPS";
		// 曲线中线的颜色
		legend1_color = "#547A42";

	} else if (num == 5) {
		// 横竖坐标的文字说明
		x_title = "时间(日)";
		y_title = "PUE值";
		// 在曲线图中动态生成线的文字表示
		legend1 = "————PUE";

		// 曲线中线的颜色
		legend1_color = "#547A42";

	}

}

//第一次使用请求数据的时候使用这个方法
function getData(t, times, place, num, type) {
	
	if (place == 1 || place == 2 || place == 3 || place == 4) {
		
		//checkNet();
		
		if (num == 1) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {

					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].cpu;
						arry1[i] = data[i].memory;
						arry2[i] = data[i].gpu;
					}
					y_max = get_Max_th_num(data[data.length - 1].cpu,
							data[data.length - 1].memory,
							data[data.length - 1].gpu);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 7);
					painting_th(arry, arry1, arry2, x_length, y_max);
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert(XMLHttpRequest.status);
					alert(XMLHttpRequest.readyState);
					alert(textStatus);
				}

			});
			
			 
		} else if (num == 2) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].bytesIn;
						arry1[i] = data[i].bytesOut;
					}
					time = data[1].date.substring(0, 7);
					y_max = get_Max_two_num(data[data.length - 1].bytesIn,
							data[data.length - 1].bytesOut);
					x_length = data.length - 1;
					painting(arry, arry1, x_length, y_max);
				}
			});

		}

	} else if (place == 5) {// 网络攻击安全
		if (num == 1) {
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();

			var y_max;
			var x_length;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry1[i] = data[i].zysj;
						arry2[i] = data[i].yzsj;
						arry3[i] = data[i].jjsj;
						arry4[i] = data[i].zdsj;
					}

					y_max = get_Max_four_num(data[data.length - 1].zysj,
							data[data.length - 1].yzsj,
							data[data.length - 1].jjsj,
							data[data.length - 1].zdsj);

					// alert("y_max="+y_max);
					x_length = data.length - 1;
					// alert("x_length="+x_length);
					time = data[1].date.substring(0, 7);
					// alert("time="+time);
					painting_four(arry1, arry2, arry3, arry4, x_length, y_max);
				}
			});

		}

	} else if (place == 6) {// vpn使用记录
		if (num == 1) {
			var arry1 = new Array();
			var arry2 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry1[i] = data[i].dlyhs;
						arry2[i] = data[i].ljs;
					}
					y_max = get_Max_two_num(data[data.length - 1].dlyhs,
							data[data.length - 1].ljs);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 7);
					painting(arry1, arry2, x_length, y_max);
				}
			});

		} else if (num == 2) {
			var arry1 = new Array();
			var arry2 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,  //
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry1[i] = data[i].wlllIN;
						arry2[i] = data[i].wlllOUT;
					}
					y_max = get_Max_two_num(data[data.length - 1].wlllIN,
							data[data.length - 1].wlllOUT);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 7);
					painting(arry1, arry2, x_length, y_max);
				}
			});
		}
	} else if (place == 7) {// 出口和专线流量统计
		if (num == 1) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].qyzxJkjsslMax;
						arry1[i] = data[i].qyzxJkjsslMin;
						arry2[i] = data[i].qyzxJkjsslAvg;
						arry3[i] = data[i].qyzxJkfsslMax;
						arry4[i] = data[i].qyzxJkfsslMin;
						arry5[i] = data[i].qyzxJkfsslAvg;
					}
					y_max = get_Max_six_num(
							data[data.length - 1].qyzxJkjsslMax,
							data[data.length - 1].qyzxJkjsslMin,
							data[data.length - 1].qyzxJkjsslAvg,
							data[data.length - 1].qyzxJkfsslMax,
							data[data.length - 1].qyzxJkfsslMin,
							data[data.length - 1].qyzxJkjsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});
		} else if (num == 2) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].qyzxJkjsslMax;
						arry1[i] = data[i].qyzxJkjsslMin;
						arry2[i] = data[i].qyzxJkjsslAvg;
						arry3[i] = data[i].qyzxJkfsslMax;
						arry4[i] = data[i].qyzxJkfsslMin;
						arry5[i] = data[i].qyzxJkfsslAvg;
					}
					y_max = get_Max_six_num(
							data[data.length - 1].qyzxJkjsslMax,
							data[data.length - 1].qyzxJkjsslMin,
							data[data.length - 1].qyzxJkjsslAvg,
							data[data.length - 1].qyzxJkfsslMax,
							data[data.length - 1].qyzxJkfsslMin,
							data[data.length - 1].qyzxJkjsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});

		} else if (num == 3) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].tcJkjsslMax;
						arry1[i] = data[i].tcJkjsslMin;
						arry2[i] = data[i].tcJkjsslAvg;
						arry3[i] = data[i].tcJkfsslMax;
						arry4[i] = data[i].tcJkfsslMin;
						arry5[i] = data[i].tcJkfsslAvg;
					}
					y_max = get_Max_six_num(data[data.length - 1].tcJkjsslMax,
							data[data.length - 1].tcJkjsslMin,
							data[data.length - 1].tcJkjsslAvg,
							data[data.length - 1].tcJkfsslMax,
							data[data.length - 1].tcJkfsslMin,
							data[data.length - 1].tcJkjsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});

		} else if (num == 4) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();

			var y_max;
			var x_length;
			//alert("time=" + t  + "&times="+ request_time+"&type=ckyzx_qyzx45m");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].dxJkjsslMax;
						arry1[i] = data[i].dxJkjsslMin;
						arry2[i] = data[i].dxJkjsslAvg;
						arry3[i] = data[i].dxJkfsslMax;
						arry4[i] = data[i].dxJkfsslMin;
						arry5[i] = data[i].dxJkfsslAvg;
					}
					y_max = get_Max_six_num(data[data.length - 1].dxJkjsslMax,
							data[data.length - 1].dxJkjsslMin,
							data[data.length - 1].dxJkjsslAvg,
							data[data.length - 1].dxJkfsslMax,
							data[data.length - 1].dxJkfsslMin,
							data[data.length - 1].dxJkjsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});

		} else if (num == 5) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();

			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].dxzxJkjsslMax;
						arry1[i] = data[i].dxzxJkjsslMin;
						arry2[i] = data[i].dxzxJkjsslAvg;
						arry3[i] = data[i].dxzxJkfsslMax;
						arry4[i] = data[i].dxzxJkfsslMin;
						arry5[i] = data[i].dxzxJkfsslAvg;
					}
					y_max = get_Max_six_num(
							data[data.length - 1].dxzxJkjsslMax,
							data[data.length - 1].dxzxJkjsslMin,
							data[data.length - 1].dxzxJkjsslAvg,
							data[data.length - 1].dxzxJkfsslMax,
							data[data.length - 1].dxzxJkfsslMin,
							data[data.length - 1].dxzxJkjsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});

		} else if (num == 6) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();

			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].skyJkjsslMax;
						arry1[i] = data[i].skyJkjsslMin;
						arry2[i] = data[i].skyJkjsslAvg;
						arry3[i] = data[i].skyJkfsslMax;
						arry4[i] = data[i].skyJkfsslMin;
						arry5[i] = data[i].skyJkfsslAvg;
					}
					y_max = get_Max_six_num(data[data.length - 1].skyJkjsslMax,
							data[data.length - 1].skyJkjsslMin,
							data[data.length - 1].skyJkjsslAvg,
							data[data.length - 1].skyJkfsslMax,
							data[data.length - 1].skyJkfsslMin,
							data[data.length - 1].skyJkjsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});

		} else if (num == 7) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].yd10mJkjsslMax;
						arry1[i] = data[i].yd10mJkjsslMin;
						arry2[i] = data[i].yd10mJkjsslAvg;
						arry3[i] = data[i].yd10mJkfsslMax;
						arry4[i] = data[i].yd10mJkfsslMin;
						arry5[i] = data[i].yd10mJkfsslAvg;
					}
					y_max = get_Max_six_num(
							data[data.length - 1].yd10mJkjsslMax,
							data[data.length - 1].yd10mJkjsslMin,
							data[data.length - 1].yd10mJkjsslAvg,
							data[data.length - 1].yd10mJkfsslMax,
							data[data.length - 1].yd10mJkfsslMin,
							data[data.length - 1].yd10mJkjsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});

		}
	} else if (place == 8) {// 骨干线路流量统计（1）
		if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5
				|| num == 6 || num == 7) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].jkjsslMax;
						arry1[i] = data[i].jkjsslMin;
						arry2[i] = data[i].jkjsslAvg;
						arry3[i] = data[i].jkfsslMax;
						arry4[i] = data[i].jkfsslMin;
						arry5[i] = data[i].jkfsslAvg;
					}
					y_max = get_Max_six_num(data[data.length - 1].jkjsslMax,
							data[data.length - 1].jkjsslMin,
							data[data.length - 1].jkjsslAvg,
							data[data.length - 1].jkfsslMax,
							data[data.length - 1].jkfsslMin,
							data[data.length - 1].jkfsslAvg);
					x_length = data.length - 1;
					time = data[1].date.substring(0, 10);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);
				}
			});
		} else {
			alert("数据出错！");
		}

	} else if (place == 9) {// 员工培训系统应用
		if (num == 1) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 2; i++) {
						arry[i] = data[i].yhdl;
						arry1[i] = data[i].cjpxrs;
						arry2[i] = data[i].zzpx;
					}
					description_ygpx(num, data[data.length - 1].yhdl,
							data[data.length - 1].cjpxrs,
							data[data.length - 1].zzpx);
					time = data[0].date.substring(0, 4);
					y_max = get_Max_th_num(data[data.length - 2].yhdl,
							data[data.length - 2].cjpxrs,
							data[data.length - 2].zzpx);
					x_length = data.length - 2;
					painting_th(arry, arry1, arry2, x_length, y_max);
				}
			});

		} else if (num == 2) {
			var arry = new Array();
			var arry1;
			var arry2;
			var arry3;
			var arry4;
			var arry5;
			var max;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					// alert(data.length);
					for ( var i = 0; i < data.length - 1; i++) {
						arry1 = data[i].zhzs;
						arry2 = data[i].zyjs;
						arry3 = data[i].glzd;
						arry4 = data[i].zybz;
						arry5 = data[i].cgpx;
					}
					time = data[0].date.substring(0, 7);
					y_max = get_Max_two_num(get_Max_four_num(
							data[data.length - 1].zhzs,
							data[data.length - 1].zyjs,
							data[data.length - 1].glzd,
							data[data.length - 1].zybz),
							data[data.length - 1].cgpx);
					var x_length = 5;
					arry[0] = arry1;
					arry[1] = arry2;
					arry[2] = arry3;
					arry[3] = arry4;
					arry[4] = arry5;
					paint_Bar_Chart_std(arry, x_length, y_max);

				}
			});

		} else if (num == 3) {
			var arry = new Array();
			var arry1;
			var arry2;
			var arry3;
			var max;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					arry1 = data[0].cgpx;
					arry2 = data[0].yzzpx;
					arry3 = data[0].ywbmzzdpx;
					time = data[0].date.substring(0, 7);
					y_max = get_Max_th_num(data[data.length - 1].cgpx,
							data[data.length - 1].yzzpx,
							data[data.length - 1].ywbmzzdpx);
					var x_length = 3;
					arry[0] = arry1;
					arry[1] = arry2;
					arry[2] = arry3;
					paint_Bar_Chart_std(arry, x_length, y_max);
				}
			});
		}
	} else if (place == "a") {// 综合业务系统应用指标
		if (num == 1) {
			var arry = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].yhdl;
					}
					y_max = data[data.length - 1].yhdl;
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting_one(arry, x_length, y_max);
				},
				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 2) {
			var arry = new Array();
			var arry1 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].gzap;
						arry1[i] = data[i].gzqs;
					}
					y_max = get_Max_two_num(data[data.length - 1].gzap,
							data[data.length - 1].gzqs);
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting(arry, arry1, x_length, y_max);
				},
				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 3) {
			var arry = new Array();
			var arry1 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].gzjh;
						arry1[i] = data[i].gzzj;
					}
					y_max = get_Max_two_num(data[data.length - 1].gzjh,
							data[data.length - 1].gzzj);
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting(arry, arry1, x_length, y_max);
				},
				error : function() {
					alert('获取数据失败！');
				}
			});
		} else if (num == 4) {
			var arry = new Array();
			var arry1 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].ydjh;
						arry1[i] = data[i].ydzj;
					}
					y_max = get_Max_two_num(data[data.length - 1].ydjh,
							data[data.length - 1].ydzj);
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting(arry, arry1, x_length, y_max);
				},
				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 5) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].cwsp;
						arry1[i] = data[i].wllg;
						arry2[i] = data[i].tzjhlg;
					}
					y_max = get_Max_th_num(data[data.length - 1].cwsp,
							data[data.length - 1].wllg,
							data[data.length - 1].tzjhlg);
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting_th(arry, arry1, arry2, x_length, y_max);
				},
				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 6) {
			var arry = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].dxfs;
					}
					y_max = data[data.length - 1].dxfs;
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 7) {
			var arry = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].xtsj;
					}
					y_max = data[data.length - 1].xtsj;
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 8) {
			var arry = new Array();
			var y_max;
			var x_length;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].xtcc;
					}
					y_max = data[data.length - 1].xtcc;
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 9) {
			var arry = new Array();
			var y_max;
			var x_length;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].yhwh;
					}
					y_max = data[data.length - 1].yhwh;
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 0) {
			var arry = new Array();
			var y_max;
			var x_length;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].yhpx;
					}
					y_max = data[data.length - 1].yhpx;
					x_length = data.length - 1;
					time = data[0].date.substring(0, 4);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		}

	} else if (place == "b") {// ups指标
		if (num == 1) {
			var arry = new Array();
			var y_max;
			var x_length;

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 5; i++) {
						arry[i] = data[i].zhdl;
					}
					//alert(data.length);
					description_ups(num, data[data.length - 4].zhdl,
							data[data.length - 3].zhdl,
							data[data.length - 2].zhdl,
							data[data.length - 1].zhdl);

					y_max = data[data.length - 5].zhdl;
					x_length = data.length - 5;
					time = data[0].date.substring(0, 10);
					// alert("time="+time);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 2) {
			var arry = new Array();
			var y_max;
			var x_length;

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 5; i++) {
						arry[i] = data[i].kt;
					}
					//alert(data.length);
					description_ups(num, data[data.length - 4].kt,
							data[data.length - 3].kt, data[data.length - 2].kt,
							data[data.length - 1].kt);

					y_max = data[data.length - 5].kt;
					x_length = data.length - 5;
					time = data[0].date.substring(0, 10);
					// alert("time="+time);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 3) {
			var arry = new Array();
			var y_max;
			var x_length;

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 5; i++) {
						arry[i] = data[i].zmjqtyd;
					}
					//alert(data.length);
					description_ups(num, data[data.length - 4].zmjqtyd,
							data[data.length - 3].zmjqtyd,
							data[data.length - 2].zmjqtyd,
							data[data.length - 1].zmjqtyd);

					y_max = data[data.length - 5].zmjqtyd;
					x_length = data.length - 5;
					time = data[0].date.substring(0, 10);
					// alert("time="+time);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 4) {
			var arry = new Array();
			var y_max;
			var x_length;

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 5; i++) {
						arry[i] = data[i].UPSsc;
					}

					description_ups(num, data[data.length - 4].UPSsc,
							data[data.length - 3].UPSsc,
							data[data.length - 2].UPSsc,
							data[data.length - 1].UPSsc);

					y_max = data[data.length - 5].UPSsc;
					x_length = data.length - 5;
					time = data[0].date.substring(0, 10);
					// alert("time="+time);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});

		} else if (num == 5) {
			var arry = new Array();
			var y_max;
			var x_length;

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 5; i++) {
						arry[i] = data[i].PUE;
					}
					//alert(data.length);
					description_ups(num, data[data.length - 4].PUE,
							data[data.length - 3].PUE,
							data[data.length - 2].PUE,
							data[data.length - 1].PUE);

					y_max = data[data.length - 5].PUE;
					x_length = data.length - 5;
					time = data[0].date.substring(0, 10);
					// alert("time="+time);
					painting_one(arry, x_length, y_max);
				},

				error : function() {
					alert('获取数据失败！');
				}
			});
		}
	} else if (place == "c") {// ERP指标
		if (num == 1) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					for ( var i = 0; i < data.length - 2; i++) {
						arry[i] = data[i].hjpz;
					}
					description_erp(num, data[data.length - 1].hjpz);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = data[data.length - 2].hjpz;
					//获得x轴的最大值
					x_length = data.length - 2;

					painting_one(arry, x_length, y_max);
					//paint_Bar_Chart(arry,arry1, x_length, y_max);
				}
			});

		} else if (num == 2) {

			var arry = new Array();
			var arry1 = new Array();
			var max;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 2; i++) {
						arry[i] = data[i].cqzl;
					}
					description_erp(num, data[data.length - 1].cqzl);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = data[data.length - 2].cqzl;
					//获得x轴的最大值
					x_length = data.length - 2;
					painting_one(arry, x_length, y_max);
				}
			});

		} else if (num == 3) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 2; i++) {
						arry[i] = data[i].MROcgsq;
						arry1[i] = data[i].MROcgdd;
					}
					description_erp(num, data[data.length - 1].MROcgsq,
							data[data.length - 1].MROcgdd);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = get_Max_two_num(data[data.length - 2].MROcgsq,
							data[data.length - 2].MROcgdd);
					//获得x轴的最大值
					x_length = data.length - 2;
					painting(arry, arry1, x_length, y_max);
				}
			});

		} else if (num == 4) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var max;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 2; i++) {
						arry[i] = data[i].cjWBSys;
						arry1[i] = data[i].sqgys;
						arry2[i] = data[i].PScgsq;
						arry3[i] = data[i].fwjs;
					}
					description_erp(num, data[data.length - 1].cjWBSys,
							data[data.length - 1].sqgys,
							data[data.length - 1].PScgsq,
							data[data.length - 1].fwjs);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = get_Max_four_num(data[data.length - 2].cjWBSys,
							data[data.length - 2].sqgys,
							data[data.length - 2].PScgsq,
							data[data.length - 2].fwjs);
					//获得x轴的最大值
					x_length = data.length - 2;
					painting_four(arry, arry1, arry2, arry3, x_length, y_max);
				}
			});

		} else if (num == 5) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			// alert("time="+time+"-01");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 2; i++) {
						arry[i] = data[i].rjaz;
						arry1[i] = data[i].yhwh;
					}
					// 获得总和并写在画布上
					description_erp(num, data[data.length - 1].rjaz,
							data[data.length - 1].yhwh);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = get_Max_two_num(data[data.length - 2].rjaz,
							data[data.length - 2].yhwh);
					//获得x轴的最大值
					x_length = data.length - 2;
					//alert("x_length"+x_length);
					painting(arry, arry1, x_length, y_max);
				}
			});

		}

	} else if (place == "d") {// 出口与专线流量月度汇总

		if (num == 1) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].qyzx8mjs;
						arry1[i] = data[i].qyzx8mfs;
					}
					// 获得总和并写在画布上
					//alert(data.length);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = get_Max_two_num(data[data.length - 1].qyzx8mjs,
							data[data.length - 1].qyzx8mfs);
					//获得x轴的最大值
					x_length = data.length - 1;

					paint_Bar_Chart(arry, arry1, x_length, y_max);
					//painting(arry,arry1, x_length, y_max);
				}
			});

		} else if (num == 2) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			//alert( "time=" + t  +"-01-01"+ "&times="+ request_time+"&type="+ckzx_type);

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].qyzx45mjs;
						arry1[i] = data[i].qyzx45mfs;
					}
					// 获得总和并写在画布上
					//alert(data.length);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = get_Max_two_num(data[data.length - 1].qyzx45mjs,
							data[data.length - 1].qyzx45mfs);
					//获得x轴的最大值
					x_length = data.length - 1;
					paint_Bar_Chart(arry, arry1, x_length, y_max);
					//painting(arry,arry1, x_length, y_max);
				}
			});

		} else if (num == 3) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			//alert( "time=" + t  +"-01-01"+ "&times="+ request_time+"&type="+ckzx_type);

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].dxkdjs;
						arry1[i] = data[i].dxkdfs;
					}
					// 获得总和并写在画布上
					//alert(data.length);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = get_Max_two_num(data[data.length - 1].dxkdjs,
							data[data.length - 1].dxkdfs);
					//获得x轴的最大值
					x_length = data.length - 1;
					paint_Bar_Chart(arry, arry1, x_length, y_max);
					//painting(arry,arry1, x_length, y_max);
				}
			});

		} else if (num == 4) {
			var arry = new Array();
			var arry1 = new Array();
			var max;
			//	alert( "time=" + t  +"-01-01"+ "&times="+ request_time+"&type="+ckzx_type);
			//	alert(urlstr);

			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					// alert(data.length);

					for ( var i = 0; i < data.length - 1; i++) {
						arry[i] = data[i].dxhljs;
						arry1[i] = data[i].dxhlfs;
					}
					// 获得总和并写在画布上
					//alert(data.length);
					time = data[1].date.substring(0, 4);
					//获得y轴的最大值  最大值是倒数第二个
					y_max = get_Max_two_num(data[data.length - 1].dxhljs,
							data[data.length - 1].dxhlfs);
					//获得x轴的最大值
					x_length = data.length - 1;
					paint_Bar_Chart(arry, arry1, x_length, y_max);
					//painting(arry,arry1, x_length, y_max);
				}
			});

		}

	} else if (place == "e") {
		if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5
				|| num == 6) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();

			var y_max;
			var x_length;
			//alert("time=" + t  + "&times="+ request_time+"&type=ckyzx_qyzx45m");
			$.ajax({
				type : "POST",
				url : urlstr,
				async : false,
				dataType : "jsonp",
				jsonp : "jsoncallback",
				// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				jsonpCallback : "success_jsonpCallback",
				data : "time=" + t + "&times=" + request_time + "&type="
						+ ckzx_type,//
				success : function(data) {
					for ( var i = 0; i < data.length - 1; i++) {

						arry[i] = data[i].jkjsslMax;
						arry1[i] = data[i].jkjsslMin;
						arry2[i] = data[i].jkjsslAvg;
						arry3[i] = data[i].jkfsslMax;
						arry4[i] = data[i].jkfsslMin;
						arry5[i] = data[i].jkfsslAvg;
					}
					y_max = get_Max_six_num(data[data.length - 1].jkjsslMax,
							data[data.length - 1].jkjsslMin,
							data[data.length - 1].jkjsslAvg,
							data[data.length - 1].jkfsslMax,
							data[data.length - 1].jkfsslMin,
							data[data.length - 1].jkfsslAvg);
					//y_max = data[data.length - 1].qyzxJkjsslMax;
					x_length = data.length - 1;
					//alert("x_length="+x_length);
					time = data[1].date.substring(0, 10);
					// alert("time="+time);
					painting_six(arry, arry1, arry2, arry3, arry4, arry5,
							x_length, y_max);

				}
			});
		} else {
			alert("数据出错！");
		}

	} else {
		alert("数据错误，请重新开启应用！");
	}
}

// 在第二次请求后确定有数据的时候调用此方法处理数据data
function second_getData(place, num, data) {
	if (place == 1 || place == 2 || place == 3 || place == 4) {//高性能
		if (num == 1) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].cpu;
				arry1[i] = data[i].memory;
				arry2[i] = data[i].gpu;
			}
			var y_max = get_Max_th_num(data[data.length - 1].cpu,
					data[data.length - 1].memory, data[data.length - 1].gpu);
			var x_length = data.length - 1;
			time = data[1].date.substring(0, 7);
			painting_th(arry, arry1, arry2, x_length, y_max);

		} else if (num == 2) {
			var arry = new Array();
			var arry1 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].bytesIn;
				arry1[i] = data[i].bytesOut;
			}
			time = data[1].date.substring(0, 7);
			var y_max = get_Max_two_num(data[data.length - 1].bytesIn,
					data[data.length - 1].bytesOut);
			var x_length = data.length - 1;
			painting(arry, arry1, x_length, y_max);

		}

	} else if (place == 5) {//网络攻击统计
		if (num == 1) {
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry1[i] = data[i].zysj;
				arry2[i] = data[i].yzsj;
				arry3[i] = data[i].jjsj;
				arry4[i] = data[i].zdsj;
			}
			var y_max = get_Max_four_num(data[data.length - 1].zysj,
					data[data.length - 1].yzsj, data[data.length - 1].jjsj,
					data[data.length - 1].zdsj);
			var x_length = data.length - 1;
			time = data[1].date.substring(0, 7);
			painting_four(arry1, arry2, arry3, arry4, x_length, y_max);
		}

	} else if (place == 6) {//Vpn使用记录
		if (num == 1) {
			var arry1 = new Array();
			var arry2 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry1[i] = data[i].dlyhs;
				arry2[i] = data[i].ljs;
			}
			y_max = get_Max_two_num(data[data.length - 1].dlyhs,
					data[data.length - 1].ljs);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 7);
			painting(arry1, arry2, x_length, y_max);
		} else if (num == 2) {
			var arry1 = new Array();
			var arry2 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry1[i] = data[i].wlllIN;
				arry2[i] = data[i].wlllOUT;
			}
			y_max = get_Max_two_num(data[data.length - 1].wlllIN,
					data[data.length - 1].wlllOUT);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 7);
			painting(arry1, arry2, x_length, y_max);

		}

	} else if (place == 7) {//出口与专线	
		var arry = new Array();
		var arry1 = new Array();
		var arry2 = new Array();
		var arry3 = new Array();
		var arry4 = new Array();
		var arry5 = new Array();
		if (num == 1 || num == 2) {
			for ( var i = 0; i < data.length - 1; i++) {

				arry[i] = data[i].qyzxJkjsslMax;
				arry1[i] = data[i].qyzxJkjsslMin;
				arry2[i] = data[i].qyzxJkjsslAvg;
				arry3[i] = data[i].qyzxJkfsslMax;
				arry4[i] = data[i].qyzxJkfsslMin;
				arry5[i] = data[i].qyzxJkfsslAvg;
			}
			y_max = get_Max_six_num(data[data.length - 1].qyzxJkjsslMax,
					data[data.length - 1].qyzxJkjsslMin,
					data[data.length - 1].qyzxJkjsslAvg,
					data[data.length - 1].qyzxJkfsslMax,
					data[data.length - 1].qyzxJkfsslMin,
					data[data.length - 1].qyzxJkjsslAvg);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 10);
			painting_six(arry, arry1, arry2, arry3, arry4, arry5, x_length,
					y_max);
		} else if (num == 3) {
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].tcJkjsslMax;
				arry1[i] = data[i].tcJkjsslMin;
				arry2[i] = data[i].tcJkjsslAvg;
				arry3[i] = data[i].tcJkfsslMax;
				arry4[i] = data[i].tcJkfsslMin;
				arry5[i] = data[i].tcJkfsslAvg;
			}
			y_max = get_Max_six_num(data[data.length - 1].tcJkjsslMax,
					data[data.length - 1].tcJkjsslMin,
					data[data.length - 1].tcJkjsslAvg,
					data[data.length - 1].tcJkfsslMax,
					data[data.length - 1].tcJkfsslMin,
					data[data.length - 1].tcJkjsslAvg);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 10);
			painting_six(arry, arry1, arry2, arry3, arry4, arry5, x_length,
					y_max);
		} else if (num == 4) {
			for ( var i = 0; i < data.length - 1; i++) {

				arry[i] = data[i].dxJkjsslMax;
				arry1[i] = data[i].dxJkjsslMin;
				arry2[i] = data[i].dxJkjsslAvg;
				arry3[i] = data[i].dxJkfsslMax;
				arry4[i] = data[i].dxJkfsslMin;
				arry5[i] = data[i].dxJkfsslAvg;
			}
			y_max = get_Max_six_num(data[data.length - 1].dxJkjsslMax,
					data[data.length - 1].dxJkjsslMin,
					data[data.length - 1].dxJkjsslAvg,
					data[data.length - 1].dxJkfsslMax,
					data[data.length - 1].dxJkfsslMin,
					data[data.length - 1].dxJkjsslAvg);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 10);
			painting_six(arry, arry1, arry2, arry3, arry4, arry5, x_length,
					y_max);
		} else if (num == 5) {
			for ( var i = 0; i < data.length - 1; i++) {

				arry[i] = data[i].dxzxJkjsslMax;
				arry1[i] = data[i].dxzxJkjsslMin;
				arry2[i] = data[i].dxzxJkjsslAvg;
				arry3[i] = data[i].dxzxJkfsslMax;
				arry4[i] = data[i].dxzxJkfsslMin;
				arry5[i] = data[i].dxzxJkfsslAvg;
			}
			y_max = get_Max_six_num(data[data.length - 1].dxzxJkjsslMax,
					data[data.length - 1].dxzxJkjsslMin,
					data[data.length - 1].dxzxJkjsslAvg,
					data[data.length - 1].dxzxJkfsslMax,
					data[data.length - 1].dxzxJkfsslMin,
					data[data.length - 1].dxzxJkjsslAvg);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 10);
			painting_six(arry, arry1, arry2, arry3, arry4, arry5, x_length,
					y_max);
		} else if (num == 6) {
			for ( var i = 0; i < data.length - 1; i++) {

				arry[i] = data[i].skyJkjsslMax;
				arry1[i] = data[i].skyJkjsslMin;
				arry2[i] = data[i].skyJkjsslAvg;
				arry3[i] = data[i].skyJkfsslMax;
				arry4[i] = data[i].skyJkfsslMin;
				arry5[i] = data[i].skyJkfsslAvg;
			}
			y_max = get_Max_six_num(data[data.length - 1].skyJkjsslMax,
					data[data.length - 1].skyJkjsslMin,
					data[data.length - 1].skyJkjsslAvg,
					data[data.length - 1].skyJkfsslMax,
					data[data.length - 1].skyJkfsslMin,
					data[data.length - 1].skyJkjsslAvg);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 10);
			painting_six(arry, arry1, arry2, arry3, arry4, arry5, x_length,
					y_max);
		} else if (num == 7) {
			for ( var i = 0; i < data.length - 1; i++) {

				arry[i] = data[i].yd10mJkjsslMax;
				arry1[i] = data[i].yd10mJkjsslMin;
				arry2[i] = data[i].yd10mJkjsslAvg;
				arry3[i] = data[i].yd10mJkfsslMax;
				arry4[i] = data[i].yd10mJkfsslMin;
				arry5[i] = data[i].yd10mJkfsslAvg;
			}
			y_max = get_Max_six_num(data[data.length - 1].yd10mJkjsslMax,
					data[data.length - 1].yd10mJkjsslMin,
					data[data.length - 1].yd10mJkjsslAvg,
					data[data.length - 1].yd10mJkfsslMax,
					data[data.length - 1].yd10mJkfsslMin,
					data[data.length - 1].yd10mJkjsslAvg);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 10);
			painting_six(arry, arry1, arry2, arry3, arry4, arry5, x_length,
					y_max);
		}

	} else if (place == 8 || place == "e") {//骨干线路流量统计
		if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5
				|| num == 6 || num == 7) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			var arry4 = new Array();
			var arry5 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {

				arry[i] = data[i].jkjsslMax;
				arry1[i] = data[i].jkjsslMin;
				arry2[i] = data[i].jkjsslAvg;
				arry3[i] = data[i].jkfsslMax;
				arry4[i] = data[i].jkfsslMin;
				arry5[i] = data[i].jkfsslAvg;
			}
			y_max = get_Max_six_num(data[data.length - 1].jkjsslMax,
					data[data.length - 1].jkjsslMin,
					data[data.length - 1].jkjsslAvg,
					data[data.length - 1].jkfsslMax,
					data[data.length - 1].jkfsslMin,
					data[data.length - 1].jkfsslAvg);
			x_length = data.length - 1;
			time = data[1].date.substring(0, 10);
			painting_six(arry, arry1, arry2, arry3, arry4, arry5, x_length,
					y_max);
		} else {

		}

	} else if (place == 9) {//员工培训系统应用指标
		if (num == 1) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			for ( var i = 0; i < data.length - 2; i++) {
				arry[i] = data[i].yhdl;
				arry1[i] = data[i].cjpxrs;
				arry2[i] = data[i].zzpx;
			}
			description_ygpx(num, data[data.length - 1].yhdl,
					data[data.length - 1].cjpxrs, data[data.length - 1].zzpx);
			time = data[0].date.substring(0, 4);
			//获得y轴的最大值
			y_max = get_Max_th_num(data[data.length - 2].yhdl,
					data[data.length - 2].cjpxrs, data[data.length - 2].zzpx);

			//获得x轴的最大值
			x_length = data.length - 2;
			painting_th(arry, arry1, arry2, x_length, y_max);

		} else if (num == 2) {
			var arry = new Array();
			var arry1;
			var arry2;
			var arry3;
			var arry4;
			var arry5;
			for ( var i = 0; i < data.length - 1; i++) {
				arry1 = data[i].zhzs;
				arry2 = data[i].zyjs;
				arry3 = data[i].glzd;
				arry4 = data[i].zybz;
				arry5 = data[i].cgpx;
			}

			time = data[0].date.substring(0, 7);
			y_max = get_Max_two_num(get_Max_four_num(
					data[data.length - 1].zhzs, data[data.length - 1].zyjs,
					data[data.length - 1].glzd, data[data.length - 1].zybz),
					data[data.length - 1].cgpx);
			x_length = 5;
			arry[0] = arry1;
			arry[1] = arry2;
			arry[2] = arry3;
			arry[3] = arry4;
			arry[4] = arry5;

			paint_Bar_Chart_std(arry, x_length, y_max);

		} else if (num == 3) {
			var arry = new Array();
			var arry1;
			var arry2;
			var arry3;
			arry1 = data[0].cgpx;
			arry2 = data[0].yzzpx;
			arry3 = data[0].ywbmzzdpx;

			//获得时间
			time = data[0].date.substring(0, 7);
			//获得最大值
			y_max = get_Max_th_num(data[data.length - 1].cgpx,
					data[data.length - 1].yzzpx,
					data[data.length - 1].ywbmzzdpx);

			x_length = 3;
			arry[0] = arry1;
			arry[1] = arry2;
			arry[2] = arry3;

			paint_Bar_Chart_std(arry, x_length, y_max);

		} else {
			alert("数据传入错误~ 请重新启动程序~");
		}

	} else if (place == "a") {//综合业务
		if (num == 1) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].yhdl;
			}
			y_max = data[data.length - 1].yhdl;
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting_one(arry, x_length, y_max);
		} else if (num == 2) {
			var arry = new Array();
			var arry1 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].gzap;
				arry1[i] = data[i].gzqs;
			}
			y_max = get_Max_two_num(data[data.length - 1].gzap,
					data[data.length - 1].gzqs);
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting(arry, arry1, x_length, y_max);
		} else if (num == 3) {
			var arry = new Array();
			var arry1 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].gzjh;
				arry1[i] = data[i].gzzj;
			}
			y_max = get_Max_two_num(data[data.length - 1].gzjh,
					data[data.length - 1].gzzj);
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting(arry, arry1, x_length, y_max);

		} else if (num == 4) {
			var arry = new Array();
			var arry1 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].ydjh;
				arry1[i] = data[i].ydzj;
			}
			y_max = get_Max_two_num(data[data.length - 1].ydjh,
					data[data.length - 1].ydzj);
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting(arry, arry1, x_length, y_max);

		} else if (num == 5) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].cwsp;
				arry1[i] = data[i].wllg;
				arry2[i] = data[i].tzjhlg;
			}
			y_max = get_Max_th_num(data[data.length - 1].cwsp,
					data[data.length - 1].wllg, data[data.length - 1].tzjhlg);
			x_length = data.length - 1;

			time = data[0].date.substring(0, 4);
			painting_th(arry, arry1, arry2, x_length, y_max);

		} else if (num == 6) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].dxfs;
			}
			y_max = data[data.length - 1].dxfs;
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting_one(arry, x_length, y_max);
		} else if (num == 7) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].xtsj;
			}
			y_max = data[data.length - 1].xtsj;
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting_one(arry, x_length, y_max);

		} else if (num == 8) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].xtcc;
			}
			y_max = data[data.length - 1].xtcc;
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting_one(arry, x_length, y_max);

		} else if (num == 9) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].yhwh;
			}
			y_max = data[data.length - 1].yhwh;
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting_one(arry, x_length, y_max);
		} else if (num == 0) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].yhpx;
			}
			y_max = data[data.length - 1].yhpx;
			x_length = data.length - 1;
			time = data[0].date.substring(0, 4);
			painting_one(arry, x_length, y_max);
		}

	} else if (place == "b") {//ups用电指标
		if (num == 1) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 5; i++) {
				arry[i] = data[i].zhdl;
			}
			description_ups(num, data[data.length - 4].zhdl,
					data[data.length - 3].zhdl, data[data.length - 2].zhdl,
					data[data.length - 1].zhdl);
			y_max = data[data.length - 5].zhdl;
			x_length = data.length - 5;
			time = data[0].date.substring(0, 10);
			painting_one(arry, x_length, y_max);
		} else if (num == 2) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 5; i++) {
				arry[i] = data[i].kt;
			}
			description_ups(num, data[data.length - 4].kt,
					data[data.length - 3].kt, data[data.length - 2].kt,
					data[data.length - 1].kt);
			y_max = data[data.length - 5].kt;
			x_length = data.length - 5;
			time = data[0].date.substring(0, 10);
			painting_one(arry, x_length, y_max);
		} else if (num == 3) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 5; i++) {
				arry[i] = data[i].zmjqtyd;
			}
			description_ups(num, data[data.length - 4].zmjqtyd,
					data[data.length - 3].zmjqtyd,
					data[data.length - 2].zmjqtyd,
					data[data.length - 1].zmjqtyd);
			y_max = data[data.length - 5].zmjqtyd;
			x_length = data.length - 5;
			time = data[0].date.substring(0, 10);
			painting_one(arry, x_length, y_max);
		} else if (num == 4) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 5; i++) {
				arry[i] = data[i].UPSsc;
			}
			description_ups(num, data[data.length - 4].UPSsc,
					data[data.length - 3].UPSsc, data[data.length - 2].UPSsc,
					data[data.length - 1].UPSsc);
			y_max = data[data.length - 5].UPSsc;
			x_length = data.length - 5;
			time = data[0].date.substring(0, 10);
			painting_one(arry, x_length, y_max);
		} else if (num == 5) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 5; i++) {
				arry[i] = data[i].PUE;
			}
			description_ups(num, data[data.length - 4].PUE,
					data[data.length - 3].PUE, data[data.length - 2].PUE,
					data[data.length - 1].PUE);
			y_max = data[data.length - 5].PUE;
			x_length = data.length - 5;
			time = data[0].date.substring(0, 10);
			painting_one(arry, x_length, y_max);
		} else {
			alert("参数传递错误！ 请重启程序！");

		}

	} else if (place == "c") {//erp
		if (num == 1) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 2; i++) {
				arry[i] = data[i].hjpz;

			}
			description_erp(num, data[data.length - 1].hjpz);
			time = data[1].date.substring(0, 4);
			y_max = data[data.length - 2].hjpz;
			x_length = data.length - 2;
			painting_one(arry, x_length, y_max);
		} else if (num == 2) {
			var arry = new Array();
			for ( var i = 0; i < data.length - 2; i++) {
				arry[i] = data[i].cqzl;

			}
			description_erp(num, data[data.length - 1].cqzl);
			time = data[1].date.substring(0, 4);
			y_max = data[data.length - 2].cqzl;
			x_length = data.length - 2;
			painting_one(arry, x_length, y_max);
		} else if (num == 3) {
			var arry = new Array();
			var arry1 = new Array();
			for ( var i = 0; i < data.length - 2; i++) {
				arry[i] = data[i].MROcgsq;
				arry1[i] = data[i].MROcgdd;

			}
			description_erp(num, data[data.length - 1].MROcgsq,
					data[data.length - 1].MROcgdd);
			time = data[1].date.substring(0, 4);
			y_max = get_Max_two_num(data[data.length - 2].MROcgsq,
					data[data.length - 2].MROcgdd);
			x_length = data.length - 2;
			painting(arry, arry1, x_length, y_max);

		} else if (num == 4) {
			var arry = new Array();
			var arry1 = new Array();
			var arry2 = new Array();
			var arry3 = new Array();
			for ( var i = 0; i < data.length - 2; i++) {
				arry[i] = data[i].cjWBSys;
				arry1[i] = data[i].sqgys;
				arry2[i] = data[i].PScgsq;
				arry3[i] = data[i].fwjs;

			}
			description_erp(num, data[data.length - 1].cjWBSys,
					data[data.length - 1].sqgys, data[data.length - 1].PScgsq,
					data[data.length - 1].fwjs);
			time = data[1].date.substring(0, 4);
			y_max = get_Max_four_num(data[data.length - 2].cjWBSys,
					data[data.length - 2].sqgys, data[data.length - 2].PScgsq,
					data[data.length - 2].fwjs);
			x_length = data.length - 2;
			painting_four(arry, arry1, arry2, arry3, x_length, y_max);
		} else if (num == 5) {
			var arry = new Array();
			var arry1 = new Array();
			for ( var i = 0; i < data.length - 2; i++) {
				arry[i] = data[i].rjaz;
				arry1[i] = data[i].yhwh;

			}
			description_erp(num, data[data.length - 1].rjaz,
					data[data.length - 1].yhwh);
			time = data[1].date.substring(0, 4);
			y_max = get_Max_two_num(data[data.length - 2].rjaz,
					data[data.length - 2].yhwh);
			x_length = data.length - 2;
			painting(arry, arry1, x_length, y_max);

		}
	} else if (place == "d") {//出口与专线月度汇总
		var arry = new Array();
		var arry1 = new Array();
		if (num == 1) {
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].qyzx8mjs;
				arry1[i] = data[i].qyzx8mfs;
			}
			time = data[1].date.substring(0, 4);
			y_max = get_Max_two_num(data[data.length - 1].qyzx8mjs,
					data[data.length - 1].qyzx8mfs);
			x_length = data.length - 1;
			paint_Bar_Chart(arry, arry1, x_length, y_max);
		} else if (num == 2) {
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].qyzx45mjs;
				arry1[i] = data[i].qyzx45mfs;
			}
			time = data[1].date.substring(0, 4);
			y_max = get_Max_two_num(data[data.length - 1].qyzx45mjs,
					data[data.length - 1].qyzx45mfs);
			x_length = data.length - 1;
			paint_Bar_Chart(arry, arry1, x_length, y_max);
		} else if (num == 3) {
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].dxkdjs;
				arry1[i] = data[i].dxkdfs;
			}
			time = data[1].date.substring(0, 4);
			y_max = get_Max_two_num(data[data.length - 1].dxkdjs,
					data[data.length - 1].dxkdfs);
			x_length = data.length - 1;
			paint_Bar_Chart(arry, arry1, x_length, y_max);
		} else if (num == 4) {
			for ( var i = 0; i < data.length - 1; i++) {
				arry[i] = data[i].dxhljs;
				arry1[i] = data[i].dxhlfs;
			}
			time = data[1].date.substring(0, 4);
			y_max = get_Max_two_num(data[data.length - 1].dxhljs,
					data[data.length - 1].dxhlfs);
			x_length = data.length - 1;
			paint_Bar_Chart(arry, arry1, x_length, y_max);
		} else {
			alert("数据出错！请重新启动程序");
		}
	}

}

// 请求数据时，如果没有数据提示
function openpop() {
	$("#nodatapop").popup("open");

}

//没有网络时提示
function netpop() {
	$("#netpop").popup("open");

}
//服务器没有打开时提示
function serverpop() {
	$("#serverpop").popup("open");

}

// 画线形图
// arry arry1数组表示要显示的数据
//x表示x轴上的最大值 
//y表示y轴上的最大值
function painting_one(arry1, x, y) {

	/*
	 * // 横竖坐标的数量 x_copy=30; y_copy=100;
	 * 
	 * //表示x y轴上每隔多少个单位标一个数字 x_density=3; y_density=10; //x y轴上最小的单位 精度
	 * x_copys=screenWidth*(1-0.1-0.2)/x_copy;
	 * y_copys=screenHeight*(1-0.1-0.15)/y_copy;
	 */

	//真对特殊情况特殊处理的程序
	if (x == 1 || x == 2 || x == 3) {
		x_copy = 4;
	} else {
		x_copy = x - 1;//

	}

	// 因为Y表示y轴的最大值如果y轴的最大值为0这就很难画图 如果y轴的最大值为0 这认为改为10
	if (y == 0) {
		y = 10;
	} else if (y > 0 && y < 1) {
		y = 1;
	}

	y_copy = y;

	// 表示 x y 轴上每隔多少个单位标一个数字
	x_density = 3;

	if (y >= 1000) {
		y_density = 500;
	} else if (y >= 500) {
		y_density = 100;
	} else if (y >= 300) {
		y_density = 50;
	} else if (y >= 100) {
		y_density = 20;
	} else if (y >= 50) {
		y_density = 5;
	} else if (y >= 10) {
		y_density = 2;
	} else if (y >= 1) {
		y_density = 1;
	} else {
		y_density = 0.1;
	}

	//
	// x y轴上最小的单位 精度
	//x_copys = screenWidth * (1 - 0.1 - 0.2) / x_copy;
	//alert("x_copys="+x_copys);
	x_copys = (bottomright.x - bottomleft.x) / x_copy;
	y_copys = screenHeight * (1 - 0.1 - 0.15) / y_copy;

	canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	context.strokeStyle = "#808080";

	// 画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {
			if (i == 0) {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);
				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);
				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 0.1;
				context.stroke();
			}

		} else {
			// context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			// context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}

	}
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	// 画竖线
	for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {//0除以任何不为0的数的余数都等于0
			if (j == 0) {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				/*	context.fillText(1, bottomleft.x + x_copys * j,bottomleft.y + 12);
					
					context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
					
					context.lineTo(topleft.x + x_copys * j, topleft.y);*/

				context.fillText(1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);

				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);

				context.lineTo(topleft.x + x_copys * j, topleft.y);

				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(j + 1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 0.1;
				context.stroke();
			}
		} else {
			context.beginPath();
			//context.font = "normal 5pt Calibri";
			//context.textAlign = "center";
			// document.write(x_copys);
			//context.fillText(j + 1, bottomleft.x + x_copys * j,
			//		bottomleft.y + 12);
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
			context.lineWidth = 0.1;
			context.stroke();

		}

	}

	transfromx(context, x_title, screenWidth * 0.55, screenHeight * 0.92);
	bule(context, legend1, screenWidth * 0.5, screenHeight * 0.97,
			legend1_color);
	transfromy(context, y_title, screenWidth * 0.1, screenHeight * 0.475);
	//
	point(context, arry1, legend1_color);

	paint_time(time);
	initShowtTime(device_platform, type);

}

// 画线形图
// arry arry1数组表示要显示的数据 x表示x轴上的最大值 y表示y轴上的最大值
function painting(arry, arry1, x, y) {

	/*
	 * // 横竖坐标的数量 x_copy=30; y_copy=100;
	 * 
	 * //表示x y轴上每隔多少个单位标一个数字 x_density=3; y_density=10; //x y轴上最小的单位 精度
	 * x_copys=screenWidth*(1-0.1-0.2)/x_copy;
	 * y_copys=screenHeight*(1-0.1-0.15)/y_copy;
	 */

	x_copy = x - 1;
	// 因为Y表示y轴的最大值如果y轴的最大值为0这就很难画图 如果y轴的最大值为0 这认为改为10
	if (y == 0) {
		y = 10;
	} else if (y > 0 && y < 1) {
		y = 1;
	}
	y_copy = y;

	// 表示x y轴上每隔多少个单位标一个数字
	x_density = 3;

	if (y >= 1000) {
		y_density = 500;
	} else if (y >= 500) {
		y_density = 100;
	} else if (y >= 100) {
		y_density = 20;
	} else if (y >= 50) {
		y_density = 10;
	} else if (y >= 10) {
		y_density = 2;
	} else if (y == 0.0) {
		y_density = 10;
	} else {
		y_density = 1;
	}
	//
	// x y轴上最小的单位 精度
	x_copys = screenWidth * (1 - 0.1 - 0.2) / x_copy;
	y_copys = screenHeight * (1 - 0.1 - 0.15) / y_copy;

	canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	context.strokeStyle = "#808080";

	// 画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {

			if (i == 0) {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 0.1;
				context.stroke();
			}

		} else {
			// context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			// context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}
	}
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	// 画竖线
	for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {
			if (j == 0) {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(j + 1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 0.1;
				context.stroke();
			}
		} else {
			context.beginPath();
			//context.font = "normal 5pt Calibri";
			//context.textAlign = "center";
			/// document.write(x_copys);
			//context.fillText(j + 1, bottomleft.x + x_copys * j,
			//		bottomleft.y + 12);
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
			context.lineWidth = 0.1;
			context.stroke();

		}

	}

	transfromx(context, x_title, screenWidth * 0.55, screenHeight * 0.92);
	bule(context, legend2, screenWidth * 0.7, screenHeight * 0.97,
			legend2_color);
	transfromy(context, y_title, screenWidth * 0.1, screenHeight * 0.475);
	bule(context, legend1, screenWidth * 0.3, screenHeight * 0.97,
			legend1_color);
	//f
	point(context, arry, legend1_color);
	point(context, arry1, legend2_color);

	paint_time(time);
	initShowtTime(device_platform, type);

}

// 画线形图
// arry arry1,arry1数组表示要显示的数据 x表示x轴上的最大值 y表示y轴上的最大值
function painting_th(arry1, arry2, arry3, x, y) {

	/*
	 * // 横竖坐标的数量 x_copy=30; y_copy=100;
	 * 
	 * //表示x y轴上每隔多少个单位标一个数字 x_density=3; y_density=10; //x y轴上最小的单位 精度
	 * x_copys=screenWidth*(1-0.1-0.2)/x_copy;
	 * y_copys=screenHeight*(1-0.1-0.15)/y_copy;
	 */
	//为了在x轴上实现画满竖线在分段的时候要少一个才能把下面的横线画满
	x_copy = x - 1;

	// 因为Y表示y轴的最大值如果y轴的最大值为0这就很难画图 如果y轴的最大值为0 这认为改为10
	if (y == 0) {
		y = 10;
	} else if (y > 0 && y < 1) {
		y = 1;
	}
	y_copy = y;

	// 表示x y轴上每隔多少个单位标一个数字
	if (x > 12) {
		x_density = 3;
	} else if (x > 10) {
		x_density = 2;

	} else {
		x_density = 1;
	}

	if (y >= 1000) {
		y_density = 500;
	} else if (y >= 500) {
		y_density = 100;
	} else if (y >= 100) {
		y_density = 20;
	} else if (y >= 50) {
		y_density = 10;
	} else if (y >= 10) {
		y_density = 2;
	} else {
		y_density = 1;
	}
	//
	// x y轴上最小的单位 精度
	x_copys = screenWidth * (1 - 0.1 - 0.2) / x_copy;
	y_copys = screenHeight * (1 - 0.1 - 0.15) / y_copy;

	canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	context.strokeStyle = "#808080";

	// 画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {

			if (i == 0) {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i * y_copys + 4);
				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 0.1;
				context.stroke();
			}

		} else {
			// context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			// context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}
	}
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	// 画竖线
	for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {
			if (j == 0) {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(j + 1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 0.1;
				context.stroke();
			}
		} else {
			context.beginPath();
			//context.font = "normal 5pt Calibri";
			//context.textAlign = "center";
			// document.write(x_copys);
			//context.fillText(j + 1, bottomleft.x + x_copys * j,
			//	bottomleft.y + 12);
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
			context.lineWidth = 0.1;
			context.stroke();

		}

	}

	transfromx(context, x_title, screenWidth * 0.55, screenHeight * 0.92);

	transfromy(context, y_title, screenWidth * 0.1, screenHeight * 0.475);
	bule(context, legend1, screenWidth * 0.2, screenHeight * 0.97,
			legend1_color);

	bule(context, legend2, screenWidth * 0.5, screenHeight * 0.97,
			legend2_color);

	bule(context, legend3, screenWidth * 0.8, screenHeight * 0.97,
			legend3_color);
	//
	point(context, arry1, legend1_color);
	point(context, arry2, legend2_color);
	point(context, arry3, legend3_color);

	paint_time(time);
	initShowtTime(device_platform, type);

}

//画线形图 可以传入四个参数
//arry arry1,arry1数组表示要显示的数据 x表示x轴上的最大值 y表示y轴上的最大值
function painting_four(arry1, arry2, arry3, arry4, x, y) {

	/*
	 * // 横竖坐标的数量 x_copy=30; y_copy=100;
	 * 
	 * //表示x y轴上每隔多少个单位标一个数字 x_density=3; y_density=10; //x y轴上最小的单位 精度
	 * x_copys=screenWidth*(1-0.1-0.2)/x_copy;
	 * y_copys=screenHeight*(1-0.1-0.15)/y_copy;
	 */

	x_copy = x - 1;
	// 因为Y表示y轴的最大值如果y轴的最大值为0这就很难画图 如果y轴的最大值为0 这认为改为10
	if (y == 0) {
		y = 10;
	} else if (y > 0 && y < 1) {
		y = 1;
	}
	y_copy = y;

	// 表示x y轴上每隔多少个单位标一个数字
	x_density = 3;

	if (y >= 1000) {
		y_density = 500;
	} else if (y >= 500) {
		y_density = 100;
	} else if (y >= 100) {
		y_density = 20;
	} else if (y >= 50) {
		y_density = 10;
	} else if (y >= 10) {
		y_density = 2;
	} else {
		y_density = 1;
	}
	//
	// x y轴上最小的单位 精度
	x_copys = screenWidth * (1 - 0.1 - 0.2) / x_copy;
	y_copys = screenHeight * (1 - 0.1 - 0.15) / y_copy;

	canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	context.strokeStyle = "#808080";

	// 画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {

			if (i == 0) {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 0.1;
				context.stroke();
			}

		} else {
			// context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			// context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}
	}
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	// 画竖线
	for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {
			if (j == 0) {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(j + 1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 0.1;
				context.stroke();
			}
		} else {
			context.beginPath();
			/*context.font = "normal 5pt Calibri";
			context.textAlign = "center";
			// document.write(x_copys);
			context.fillText(j + 1, bottomleft.x + x_copys * j,bottomleft.y + 12);*/
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
			context.lineWidth = 0.1;
			context.stroke();

		}

	}

	transfromx(context, x_title, screenWidth * 0.55, screenHeight * 0.92);

	transfromy(context, y_title, screenWidth * 0.1, screenHeight * 0.475);

	bule(context, legend1, screenWidth * 0.3, screenHeight * 0.95,
			legend1_color);

	bule(context, legend2, screenWidth * 0.7, screenHeight * 0.95,
			legend2_color);

	bule(context, legend3, screenWidth * 0.3, screenHeight * 0.99,
			legend3_color);

	bule(context, legend4, screenWidth * 0.7, screenHeight * 0.99,
			legend4_color);
	//
	point(context, arry1, legend1_color);
	point(context, arry2, legend2_color);
	point(context, arry3, legend3_color);
	point(context, arry4, legend4_color);

	paint_time(time);
	initShowtTime(device_platform, type);

}

//画线形图 可以传入四个参数
//arry arry1,arry1数组表示要显示的数据 x表示x轴上的最大值 y表示y轴上的最大值
function painting_six(arry1, arry2, arry3, arry4, arry5, arry6, x, y) {

	/*
	 * // 横竖坐标的数量 x_copy=30; y_copy=100;
	 * 
	 * //表示x y轴上每隔多少个单位标一个数字 x_density=3; y_density=10; //x y轴上最小的单位 精度
	 * x_copys=screenWidth*(1-0.1-0.2)/x_copy;
	 * y_copys=screenHeight*(1-0.1-0.15)/y_copy;
	 */

	x_copy = x - 1;
	// 因为Y表示y轴的最大值如果y轴的最大值为0这就很难画图 如果y轴的最大值为0 这认为改为10
	if (y == 0) {
		y = 10;
	} else if (y > 0 && y < 1) {
		y = 1;
	}
	y_copy = y;

	// 表示x y轴上每隔多少个单位标一个数字
	x_density = 3;

	if (y >= 1000) {
		y_density = 500;
	} else if (y >= 500) {
		y_density = 100;
	} else if (y >= 100) {
		y_density = 20;
	} else if (y >= 50) {
		y_density = 10;
	} else if (y >= 10) {
		y_density = 2;
	} else {
		y_density = 1;
	}
	//
	// x y轴上最小的单位 精度
	x_copys = screenWidth * (1 - 0.1 - 0.2) / x_copy;
	y_copys = screenHeight * (1 - 0.1 - 0.15) / y_copy;

	canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	context.strokeStyle = "#808080";

	// 画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {

			if (i == 0) {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 0.1;
				context.stroke();
			}

		} else {
			// context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			// context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}
	}
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	// 画竖线
	for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {
			if (j == 0) {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(j + 1, bottomleft.x + x_copys * j,
						bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 0.1;
				context.stroke();
			}
		} else {
			context.beginPath();
			/*context.font = "normal 5pt Calibri";
			context.textAlign = "center";
			// document.write(x_copys);
			context.fillText(j + 1, bottomleft.x + x_copys * j,bottomleft.y + 12);*/
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
			context.lineWidth = 0.1;
			context.stroke();

		}

	}

	transfromx(context, x_title, screenWidth * 0.55, screenHeight * 0.92);

	transfromy(context, y_title, screenWidth * 0.1, screenHeight * 0.475);

	bule(context, legend1, screenWidth * 0.2, screenHeight * 0.95,
			legend1_color);

	bule(context, legend2, screenWidth * 0.5, screenHeight * 0.95,
			legend2_color);

	bule(context, legend3, screenWidth * 0.8, screenHeight * 0.95,
			legend3_color);

	bule(context, legend4, screenWidth * 0.2, screenHeight * 0.99,
			legend4_color);

	bule(context, legend5, screenWidth * 0.5, screenHeight * 0.99,
			legend5_color);

	bule(context, legend6, screenWidth * 0.8, screenHeight * 0.99,
			legend6_color);
	//
	point(context, arry1, legend1_color);
	point(context, arry2, legend2_color);
	point(context, arry3, legend3_color);
	point(context, arry4, legend4_color);
	point(context, arry5, legend5_color);
	point(context, arry6, legend6_color);

	paint_time(time);

	initShowtTime(device_platform, type);

}

// 画柱状图
// arry arry1数组表示要显示的数据 x表示x轴上的最大值 y表示y轴上的最大值
//type: 表示有两种情况的柱状图 1表示月度统计的 2表示标准的柱状图
function paint_Bar_Chart(arry, arry1, x, y) {

	x_copy = x;
	// 因为Y表示y轴的最大值如果y轴的最大值为0这就很难画图 如果y轴的最大值为0 这认为改为10
	if (y == 0) {
		y = 10;
	} else if (y > 0 && y < 1) {
		y = 1;
	}
	y_copy = y;

	// 表示x y轴上每隔多少个单位标一个数字
	x_density = 1;

	if (y >= 1000) {
		y_density = 500;
	} else if (y >= 500) {
		y_density = 100;
	} else if (y >= 100) {
		y_density = 20;
	} else if (y >= 50) {
		y_density = 10;
	} else if (y >= 10) {
		y_density = 2;
	} else {
		y_density = 1;
	}
	// x y轴上最小的单位 精度
	x_copys = screenWidth * (1 - 0.1 - 0.2) / x_copy;
	y_copys = screenHeight * (1 - 0.1 - 0.15) / y_copy;

	canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	context.strokeStyle = "#808080";

	// 画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {

			if (i == 0) {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 0.1;
				context.stroke();
			}

		} else {
			// context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			// context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}
	}
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	// 画竖线
	for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {
			if (j == 0) {
				context.beginPath();
				context.font = "normal 8pt Calibri";
				context.textAlign = "center";
				// document.write(x_copys);
				context.fillText(1, (bottomleft.x + x_copys * j)
						+ (x_copys / 2), bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				if (j == x_copy) {

				} else {
					context.font = "normal 8pt Calibri";
					context.textAlign = "center";
					// document.write(x_copys);
					context.fillText(j + 1, (bottomleft.x + x_copys * j)
							+ (x_copys / 2), bottomleft.y + 12);
				}

				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 0.1;
				context.stroke();
			}
		} else {
			context.beginPath();
			context.font = "normal 5pt Calibri";
			context.textAlign = "center";
			// document.write(x_copys);
			context.fillText(j + 1, (bottomleft.x + x_copys * j)
					+ (x_copys / 2), bottomleft.y + 12);
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
			context.lineWidth = 0.1;
			context.stroke();

		}

	}

	transfromx(context, x_title, screenWidth * 0.55, screenHeight * 0.92);
	bule(context, legend2, screenWidth * 0.7, screenHeight * 0.97,
			legend2_color);

	transfromy(context, y_title, screenWidth * 0.1, screenHeight * 0.475);
	bule(context, legend1, screenWidth * 0.3, screenHeight * 0.97,
			legend1_color);
	//00
	pointBar(context, arry, arry1, legend1_color);
	paint_time(time);
	initShowtTime(device_platform, type);

}

//普通 画柱状图 
//arry arry1数组表示要显示的数据 x表示x轴上的最大值 y表示y轴上的最大值
// 
function paint_Bar_Chart_std(arry, x, y) {

	x_copy = x;
	// 因为Y表示y轴的最大值如果y轴的最大值为0这就很难画图 如果y轴的最大值为0 这认为改为10
	if (y == 0) {
		y = 10;
	} else if (y > 0 && y < 1) {
		y = 1;
	}
	y_copy = y;

	// 表示x y轴上每隔多少个单位标一个数字
	x_density = 1;

	if (y >= 1000) {
		y_density = 500;
	} else if (y >= 500) {
		y_density = 100;
	} else if (y >= 100) {
		y_density = 20;
	} else if (y >= 50) {
		y_density = 10;
	} else if (y >= 10) {
		y_density = 2;
	} else {
		y_density = 1;
	}
	// x y轴上最小的单位 精度
	x_copys = screenWidth * (1 - 0.1 - 0.2) / x_copy;
	y_copys = screenHeight * (1 - 0.1 - 0.15) / y_copy;

	canvas = document.getElementById("myCanvas");
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	context = canvas.getContext("2d");
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	context.strokeStyle = "#808080";

	// 画横线
	for ( var i = 0; i <= y_copy; i++) {
		if (i % y_density == 0) {

			if (i == 0) {
				context.beginPath();
				context.font = "normal 10pt Calibri";
				context.textAlign = "center";

				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				context.font = "normal 10pt  Calibri";
				context.textAlign = "center";
				context.fillText(i, bottomleft.x - 12, bottomleft.y - i
						* y_copys + 4);

				context.moveTo(bottomleft.x, bottomleft.y - i * y_copys);
				context.lineTo(bottomright.x, bottomright.y - i * y_copys);
				context.lineWidth = 0.1;
				context.stroke();
			}

		} else {
			// context.moveTo(bottomleft.x, bottomleft.y - i*y_copys);
			// context.lineTo(bottomright.x, bottomright.y- i*y_copys);
		}
	}
	context.beginPath();// 定义了一个新的路径绘制动作的开始。
	// 画竖线
	for ( var j = 0; j <= x_copy; j++) {
		if (j % x_density == 0) {
			if (j == 0) {
				context.beginPath();
				context.font = "normal 5pt Calibri";
				context.textAlign = "center";

				if (arry.length == 3) {
					context.fillText("常规培训", (bottomleft.x + x_copys * j)
							+ (x_copys / 2), bottomleft.y + 20);
				} else if (arry.length == 5) {
					context.fillText("综合知识", (bottomleft.x + x_copys * j)
							+ (x_copys / 2), bottomleft.y + 20);
				}
				//context.fillText(1, (bottomleft.x + x_copys * j)+ (x_copys / 2), bottomleft.y + 12);
				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 1;
				context.stroke();
			} else {
				context.beginPath();
				if (j == x_copy) {
					//最后一个 不用画出来了

				} else {
					context.font = "normal 8pt Calibri";
					context.textAlign = "center";
					if (arry.length == 3) {
						if (j == 1) {
							context.fillText("院组织培训", (bottomleft.x + x_copys
									* j)
									+ (x_copys / 2), bottomleft.y + 20);

						} else if (j == 2) {
							context.fillText("业务部门培训", (bottomleft.x + x_copys
									* j)
									+ (x_copys / 2), bottomleft.y + 20);

						}

					} else if (arry.length == 5) {
						if (j == 1) {
							context.fillText("专业技术", (bottomleft.x + x_copys
									* j)
									+ (x_copys / 2), bottomleft.y + 20);

						} else if (j == 2) {
							context.fillText("管理制度", (bottomleft.x + x_copys
									* j)
									+ (x_copys / 2), bottomleft.y + 20);

						} else if (j == 3) {
							context.fillText("专业标准", (bottomleft.x + x_copys
									* j)
									+ (x_copys / 2), bottomleft.y + 20);

						} else if (j == 4) {
							context.fillText("常规培训", (bottomleft.x + x_copys
									* j)
									+ (x_copys / 2), bottomleft.y + 20);

						}

					}

					// context.fillText(j + 1, (bottomleft.x + x_copys * j)+ (x_copys / 2), bottomleft.y + 12);
				}

				context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
				context.lineTo(topleft.x + x_copys * j, topleft.y);
				context.lineWidth = 0.1;
				context.stroke();
			}
		} else {
			context.beginPath();
			context.font = "normal 8pt Calibri";
			context.textAlign = "center";
			// document.write(x_copys);
			context.fillText(j + 1, (bottomleft.x + x_copys * j)
					+ (x_copys / 2), bottomleft.y + 12);
			context.moveTo(bottomleft.x + x_copys * j, bottomleft.y);
			context.lineTo(topleft.x + x_copys * j, topleft.y);
			context.lineWidth = 0.1;
			context.stroke();

		}

	}

	//transfromx(context, x_title, screenWidth * 0.55, screenHeight * 0.92);
	//bule(context, legend2, screenWidth * 0.7, screenHeight * 0.97,legend2_color);

	//transfromy(context, y_title, screenWidth * 0.1, screenHeight * 0.475);
	//bule(context, legend1, screenWidth * 0.3, screenHeight * 0.97,legend1_color);
	//00
	pointBar_std(context, arry, legend1_color);
	paint_time(time);
	initShowtTime(device_platform, type);

}
// 把时间写在画布上
function paint_time(time) {
	// alert(time);
	context.beginPath();
	context.font = "normal 13pt Calibri";
	context.textAlign = "center";
	context.fillText(time, middleWidth, toppading_text);
	// /
	var imageleft = new Image();
	var imageright = new Image();
	imageleft.onload = function() {
		context.drawImage(imageleft, middleWidth - 100, toppading_text - 13,
				13, 15);

	};
	imageright.onload = function() {
		context.drawImage(imageright, middleWidth + 80, toppading_text - 13,
				13, 15);

	};
	imageleft.src = "image/left.png";
	imageright.src = "image/right.png";
}

$(document).ready(
		function() {
			// 点击时间弹出对话框重新选择时间
			$('#myCanvas').bind(
					'tap',
					function(event) {

						touchX = event.pageX;
						touchY = event.pageY;
						// alert(touchX+"dd"+touchY);
						context.fillStyle = "#0f0";

						if (touchX > middleWidth - 50
								&& touchX < middleWidth + 50
								&& touchY > toppading
								&& touchY < toppading + 50) {
							// context.fillRect(middleWidth-50,
							// toppading-30,100,60);
							choosetime();
						} else if (touchX > middleWidth - 100
								&& touchX < middleWidth - 50
								&& touchY > toppading
								&& touchY < toppading + 50) {

							// context.fillRect(middleWidth-150,
							// toppading-30,100,60);
							// alert(time);

							var data = new Date(time);

							if (type == 3) {
								d = DelDays(data, 1);
								var str = getTime(d, "yyyy-MM-dd");
							} else if (type == 2) {
								d = DelDays(data, 1);
								var str = getTime(d, "yyyy-MM");
							} else if (type == 1) {
								// alert(type);
								d = DelDays(data, 1);
								var str = getTime(d, "yyyy");
							} else {
								alert("时间出错请重新启动程序！");
							}

							// var d =DelDays(data,1);

							// var str=getTime(d);

							var t = str + "2" + place + num + type;
							//  alert("t="+t);
							initline(t);

							// $( "#pop" ).popup( "open");

						} else if (touchX > middleWidth + 50
								&& touchX < middleWidth + 100
								&& touchY > toppading
								&& touchY < toppading + 50) {
							// context.fillRect(middleWidth+50,
							// toppading-30,100,60);

							var data = new Date(time);
							if (type == 3) {
								d = AddDays(data, 1);
								var str = getTime(d, "yyyy-MM-dd");
							} else if (type == 2) {
								d = AddMonths(data, 1);
								var str = getTime(d, "yyyy-MM");
							} else if (type == 1) {
								// alert(type);
								d = AddYears(data, 1);
								var str = getTime(d, "yyyy");
							} else {
								alert("时间出错请重新启动程序！");
							}

							// var str=getTime(d);

							//alert("str="+str);

							var t = str + "2" + place + num + type;

							//alert("t="+t);
							initline(t);
						} else if (touchX > 0 && touchX < screenWidth * 0.2
								&& touchY > 0 && touchY < screenHeight) {
							// context.fillRect(0,
							// 0,screenWidth*0.2,screenHeight);
							// 打开左侧的导航面板
							//$("#leftpanel").panel("open");
						}
					});

		});
// 增加天
function AddDays(date, value) {
	date.setDate(date.getDate() + value);
	return date;
}
// 增加月 2012-01
function AddMonths(date, value) {
	var m = date.getMonth();
	// var d=getTime(new Date());
	// alert(m);
	// alert("m="+m);
	date.setMonth(m + 1);
	// var m1=date.getMonth();
	// alert(m1);
	return date;
}
// 增加年
function AddYears(date, value) {

	date.setYear(date.getFullYear() + value);

	return date;
}
// 减少天
function DelDays(date, value) {
	date.setDate(date.getDate() - value);
	return date;
}
// 初始化mobiscroll show
// paltform 表示是哪一个平台 目前有android 和ios 和网页三种
function initShowtTime(platform, style) {
	var platform_ = "";
	if (platform = "Android") {
		platform_ = 'android-ics light';
	} else if (platform == "iOS") {
		platform_ = "ios";
	} else if (platform == "WinCE" || platform == "Win32NT") {
		platform_ = "wp";
	} else if (platform == "BlackBerry") {
		platform_ = "jqm";
	} else if (platform == "Tizen") {
		platform_ = "sense-ui";
	} else if (platform == "html5") {
		platform_ = "default";
	} else {
		alert("platform_ 错误");
	}
	if (style == 1) {

		$('#show').mobiscroll().date({
			// invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24',
			// '12/25'] },
			theme : 'android-ics light',
			theme : platform_,
			display : 'modal',
			mode : 'scroller',
			dateOrder : 'yyyy',
			dateFormat : 'yyyy',
			onSelect : function(val, inst) {
				// I would think this is where it's supposed to go, no luck thus
				// far though!
				// console.log(this);
				var ti = val + "2" + place + num + style;
				//alert(ti);
				initline(ti);
			},
		});

	} else if (style == 2) {

		$('#show').mobiscroll().date({
			// invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24',
			// '12/25'] },
			theme : 'android-ics light',
			theme : platform_,
			display : 'modal',
			mode : 'scroller',
			dateOrder : 'yyyy-mm',
			dateFormat : 'yyyy-mm',
			onSelect : function(val, inst) {
				// I would think this is where it's supposed to go, no luck thus
				// far though!
				// console.log(this);
				var ti = val + "2" + place + num + style;
				//alert(ti);
				initline(ti);
			},
		});
	} else if (style == 3) {
		$('#show').mobiscroll().date({
			// invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24',
			// '12/25'] },
			theme : 'android-ics light',
			theme : platform_,
			display : 'modal',
			mode : 'scroller',
			dateOrder : 'yyyy-mm-dd',
			dateFormat : 'yyyy-mm-dd',
			onSelect : function(val, inst) {
				// I would think this is where it's supposed to go, no luck thus
				// far though!
				// console.log(this);
				var ti = val + "2" + place + num + style;
				// alert(ti);
				initline(ti);
			},
		});
	}
}

// 弹出时间对话框
function choosetime() {
	$('#show').mobiscroll('show');
}

// 标识图中线的意义
function bule(context, str, x, y, color) {
	context.strokeStyle = color;
	context.fillStyle = color;
	context.fillText(str, x, y);
	context.stroke();
}

// 穿入时间并格式化成想要的格式
function getTime(data, f) {

	Date.prototype.format = function(format) {
		var o = {

			"M+" : this.getMonth() + 1, // month
			"d+" : this.getDate(), // day
			"h+" : this.getHours(), // hour
			"m+" : this.getMinutes(), // minute
			"s+" : this.getSeconds(), // second
			"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
			"S" : this.getMilliseconds()
		// millisecond
		}
		if (/(y+)/.test(format))
			format = format.replace(RegExp.$1, (this.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		for ( var k in o)
			if (new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
						: ("00" + o[k]).substr(("" + o[k]).length));
		return format;
	}

	// 日期格式化
	// var d = new Date();
	var t = data.format(f);
	// alert("var t = data.format(f); t="+t);
	return t;
}

// Y轴上面的文字描述
function transfromy(context, str, x, y) {
	context.beginPath();
	context.fillStyle = "#000000";
	context.transform(0, -1, 1, 0, x, y);// 翻转文字
	context.font = "normal 10pt Calibri";
	context.fillText(str, 1, -1);
	context.stroke();
	context.setTransform(1, 0, 0, 1, 0, 0);
}

// X轴上面的文字描述
function transfromx(context, str, x, y) {
	context.beginPath();
	context.font = "normal 10pt Calibri";
	context.fillText(str, x, y);
	context.stroke();

}

// 画点
function point(context, arry, color) {

	context.beginPath();
	// alert(arry.length);
	for ( var i = 0; i <= arry.length - 1; i++) {

		var y_ = arry[i];
		var x_pixle = bottomleft.x + i * x_copys;
		var y_pixle = getypixel(y_);

		context.strokeStyle = color;
		context.fillStyle = color;

		// 给点描一个星号
		// context.fillText("*",x_pixle, y_pixle);

		context.lineTo(x_pixle, y_pixle);
		context.lineWidth = 1;
		context.stroke();

	}

}

// 画矩形 专为月流量统计使用
function pointBar(context, arry, arry1, color) {

	context.beginPath();
	// alert(arry.length);
	for ( var i = 0; i < arry.length; i++) {

		var y_ = arry[i];
		var y1_ = arry1[i];
		var x_pixle = bottomleft.x + i * x_copys;
		var y_pixle = getypixel(y_);
		var y_pixle1 = getypixel(y1_);

		context.beginPath();

		context.rect(x_pixle + (x_copys / 6), y_pixle, x_copys / 3,
				bottomleft.y - y_pixle);
		// context.rect(x_pixle+x_copys/2, y_pixle,
		// x_copys/3,bottomleft.y-y_pixle);

		context.fillStyle = '#547A42';
		context.fill();
		// context.lineWidth = 5;
		context.strokeStyle = 'black';
		context.stroke();

		context.beginPath();

		// context.rect(x_pixle+(x_copys/6), y_pixle,
		// x_copys/3,bottomleft.y-y_pixle);
		context.rect(x_pixle + x_copys / 2, y_pixle1, x_copys / 3, bottomleft.y
				- y_pixle1);

		context.fillStyle = '#83B2B1';
		context.fill();
		//context.lineWidth = 5;
		context.strokeStyle = 'black';
		context.stroke();
	}

}

//画矩形  通用使用
function pointBar_std(context, arry, color) {

	context.beginPath();

	for ( var i = 0; i < arry.length; i++) {
		var y_ = arry[i];
		var y_pixle = getypixel(y_);
		var x_pixle = bottomleft.x + i * x_copys;
		context.beginPath();
		context.rect(x_pixle + (x_copys / 4), y_pixle, x_copys / 2,
				bottomleft.y - y_pixle);

		context.fillText(arry[i], x_pixle + (x_copys / 2), y_pixle - 2); //(x_copys / 2)表示写在柱状图的中间 y_pixle-2 表示写在柱状图的上面 

		context.fillStyle = '#547A42';
		context.fill();
		//context.lineWidth = 5;
		context.strokeStyle = 'black';
		context.stroke();

	}

}

// 获得一个坐标在画布上的像素y轴的坐标
// y表示一个坐标值
function getypixel(y) {
	return bottomleft.y - y * y_copys;
}
$(document).ready(
		function() {
			// / initShowtTime();
			$('#theme').click(
					function() {
						var oT = $("div[data-role='header']")
								.attr('data-theme'); // old theme
						// alert(oT);
						// var nT = (oT == 'b' ? 'e' : 'b'); // new theme
						var nT = 'a';
						if (oT == 'a') {
							nT = 'b';
							oT = 'b';
						} else if (oT == 'b') {
							nT = 'c';
							oT = 'c';
						} else if (oT == 'c') {
							nT = 'd';
							oT = 'd';
						} else if (oT == 'd') {
							nT = 'e';
							oT = 'e';
						} else if (oT == 'e') {
							// $.mobile.changePage($.mobile.activePage.jqmData('index2.html'),
							// {reloadPage : true});
							window.location.reload();

						}
						// $(this).removeClass('ui-btn-up-' +
						// oT).addClass('ui-btn-up-' + nT).attr('data-theme',
						// nT);
						// $(this).parent('div').parent('div').parent('div').removeClass('ui-btn-hover-'
						// + oT).addClass('ui-btn-hover-' +
						// nT).removeClass('ui-btn-up-' +
						// oT).addClass('ui-btn-up-' + nT).attr('data-theme',
						// nT);
						// $(this).parent('div').removeClass('ui-btn-hover-' +
						// oT).addClass('ui-btn-hover-' +
						// nT).removeClass('ui-btn-up-' +
						// oT).addClass('ui-btn-up-' + nT).attr('data-theme',
						// nT);
						// $(this).removeClass('ui-btn-hover-' +
						// oT).addClass('ui-btn-hover-' +
						// nT).removeClass('ui-btn-up-' +
						// oT).addClass('ui-btn-up-' + nT).attr('data-theme',
						// nT);
						$("div[data-role='header']").removeClass(
								'ui-btn-hover-' + oT).addClass(
								'ui-btn-hover-' + nT).removeClass(
								'ui-btn-up-' + oT).addClass('ui-btn-up-' + nT)
								.attr('data-theme', nT);
						$("div[data-role='footer']").removeClass(
								'ui-btn-hover-' + oT).addClass(
								'ui-btn-hover-' + nT).removeClass(
								'ui-btn-up-' + oT).addClass('ui-btn-up-' + nT)
								.attr('data-theme', nT);
						$('#show').removeClass('ui-btn-hover-' + oT).addClass(
								'ui-btn-hover-' + nT).removeClass(
								'ui-btn-up-' + oT).addClass('ui-btn-up-' + nT)
								.attr('data-theme', nT);
						$('#show1').removeClass('ui-btn-hover-' + oT).addClass(
								'ui-btn-hover-' + nT).removeClass(
								'ui-btn-up-' + oT).addClass('ui-btn-up-' + nT)
								.attr('data-theme', nT);
						$('#show2').removeClass('ui-btn-hover-' + oT).addClass(
								'ui-btn-hover-' + nT).removeClass(
								'ui-btn-up-' + oT).addClass('ui-btn-up-' + nT)
								.attr('data-theme', nT);

						// $.mobile.buttonMarkup.hoverDelay = 0;
						// $(this).buttonMarkup({theme: nT});
						// $("div[data-role='footer']").text('Done');
						// 可以动态的改变标签上个的文字
						// $("div[data-role='footer']").buttonMarkup({theme:
						// nT});
						// $("div[data-role='footer']").button('refresh');
						// $(this).button('refresh');
						// $("div[data-role='header']").buttonMarkup({theme:
						// nT}).trigger("create");
						// $("div[data-role='header']").buttonMarkup({
						// data-inline: "true" });
						// $("div[data-role='header']").buttonMarkup({ corners:
						// "false" }).trigger("create");
						// $("div[data-role='header']").data('theme', nT);
					});
		 

		});

/*
 * //添加回退按钮事件 document.addEventListener("backbutton",onBackKeyDown,false);
 * //BackButton按钮 function onBackKeyDown(){ console.log('任意一个页面初始化时响应');
 * if($.mobile.activePage.is('#host')){ navigator.app.exitApp(); } else {
 * navigator.app.backHistory(); } }
 */


//初始化画圆需要的参数
function initbar(data1, data2, data3) {
	data = new Array();
	color = [ "#FF0000", "#808080", "#00FF00" ];
	data = [ data1, data2, data3, ];
	describe = [ "常规培训", "院组织培训", "业务部门组织培训", ];

	initdata_percent(data);
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
function initdata_percent(data) {
	sum = 0;
	for ( var j = 0; j < data.length; j++) {
		//alert(data[j]);
		sum = sum + data[j];
		//alert(sum);
	}
	//alert(sum);
	data_percent = new Array();
	for ( var i = 0; i < data.length; i++) {
		//对数据进行百分比的初始化	
		var strData = parseFloat(data[i] / sum) * 100;
		var ret = strData.toString().substring(0,
				strData.toString().indexOf(".") + 2)
				+ "%";
		data_percent[i] = ret;

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
		context.arc(centre.x, centre.y, radius, startPoint, startPoint
				- Math.PI * 2 * (data[i] / sum), true);
		context.fill();
		context.stroke();
		startPoint -= Math.PI * 2 * (data[i] / sum);

	}
	drawSomething();

}

//画圆需要的注释
function drawSomething() {
	var height = new Array();
	var copy = 0.06;//指两个注释之间距离是高的多少
	var rectWidth = screenWidth * 0.25;//表示图形距离左边距的距离
	var data_percentWidth = screenWidth * 0.5;//表示文字百分率距离左边距的距离
	var textWidth = screenWidth * 0.75;//表示文字描述距离左边距的距离
	var w = 50;//表示矩形的高
	var h = 20//表示矩形的宽
	for ( var i = 0; i < data.length; i++) {
		height[i] = screenHeight * (0.81 + copy * i);
		context.beginPath();
		//画矩形
		context.rect(rectWidth, height[i], w, h);
		context.fillStyle = color[i];
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = 'black';
		context.stroke();
		context.font = "normal 5pt Calibri";
		context.textAlign = "center";
		context.fillStyle = "000000";
		context.fillText(data[i], data_percentWidth, height[i] + h - 5);
		context.fillText(describe[i], textWidth, height[i] + h - 5);
	}
	//context.rect(x, y, width, height);
	paint_time(time);
	initShowtTime(device_platform, type);

}

// 获得三个数中其中最大的一个
function get_Max_th_num(num1, num2, num3) {
	var max;
	max = get_Max_two_num(num1, num2);
	max = get_Max_two_num(max, num3);
	return max;
}

//获得两个数中其中最大的一个
function get_Max_two_num(num1, num2) {
	var max;
	if (num1 >= num2) {
		max = num1;

	} else {
		max = num2;

	}
	return max;

}

//获得四个数中其中最大的一个
function get_Max_four_num(num1, num2, num3, num4) {
	var max;
	max1 = get_Max_two_num(num1, num2);
	max2 = get_Max_two_num(max1, num3);
	max = get_Max_two_num(max2, num4);
	return max;
}

//获得六个数中其中最大的一个
function get_Max_six_num(num1, num2, num3, num4, num5, num6) {
	var max;
	max1 = get_Max_four_num(num1, num2, num3, num4);

	max2 = get_Max_two_num(num5, num6);

	max = get_Max_two_num(max1, num2);
	return max;
}

function checkNet(){
	
	$.jsonp({
		type: "POST",
		url: "http://"+ipstr+":8080/importExcel/home!checkNet.action",
		async: false,
		data:{type: 'ok'},
		dataType:"text",
		//jsonp: "jsoncallback",  
		//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名  
		//jsonpCallback:"success_jsonpCallback",  
		callbackParameter: "callback",
		success: function (data) {
			return true;
		},
		error: function (xOptions, textStatus) {
			alert("服务器已经断掉");
		}
	});
}

