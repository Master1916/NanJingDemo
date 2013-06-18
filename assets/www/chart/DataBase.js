
/********************************************
 * 说明：数据处理类                             *
 * 参数：                                     *
 *                                          *
 * 
 *********************************************/

function DataBase()
{
	//通过制定的url获得json数据
	this.data;
	//设置数据
	this.setDate=function(newData){
		this.data=newData;
	};
 
	this.getData=function(url)
	{
    //url 数据的格式	
    // http://10.1.1.1:8080/importExcel/
    //ygpxxt!queryYgpxList.action?time=1&times=1&type=l";
	///var arry = new Array();
	//var arry1 = new Array();
	//var arry2 = new Array();
	//var str=urlstr.split("?");
		$.ajax({
			type : "POST",
			url : str[0],
			async : false,
			dataType : "jsonp",
			jsonp : "jsoncallback",
			// 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
			jsonpCallback : "success_jsonpCallback",
			data :str[1],
			success : function(data) {
				setDate(data);
				return data;
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert("dataBase_error");
				
			}
			
		});
		
	};
	
}

