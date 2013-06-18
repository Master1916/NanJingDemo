//包含DrawLine基类绘图

document.write('<script src="./chart/DrawLine.js"></script>');
document.write('<script src="./chart/DrawLegend.js"></script>');
document.write('<script src="./chart/DrawXYTitle.js"></script>');
document.write('<script src="./chart/DataBase.js"></script>');

/************************************************************************************
 * 说明：基本绘图类--------在画布上画时间和时间翻转按键                                                    *
 * 参数： canvasEle ---------------绘图画布ID                                      *
 *       P ---------------------- 图像绘制范围                                      *
 *       P[0] ------------------- 图像左上角顶点的x坐标                              *
 *       P[1] ------------------- 图像左上角顶点的y坐标                              *
 *       P[2] ------------------- 图像绘制范围的宽度                                 *
 *       P[3] ------------------- 图像绘制范围的高度                                *
 ************************************************************************************/
function DrawTime(canvasEle,P)
{
	DrawLine.call(this,canvasEle,P);
	
	
}