//常用量
var storage = window.localStorage; 
var serverAdd=storage["serverAdd"];

var companyId=storage["companyId"]; 
var deptId=storage["deptId"]; 
var userId=storage["userId"]; 
var EId=storage["EId"]; 
var WId=storage["WId"]; 
var CId=storage["CId"]; 

var serverUrl=serverAdd+"/api/AppService.aspx";
var serverPicUrl=serverAdd+"/upload/cover/";

$(document).ready(function(){
	
	//监听安卓的返回键
	document.addEventListener("backbutton", eventBackButton, false);//按返回时提示退出
	
	//左上角的返回按钮，苹果系统点文字没有影应，加个事件。
	$(".leftBackButton").click(function(){
		if(APPTYPE == 1) {
			$.ui.goBack();
		}
	});
	//StatusBar.overlaysWebView(true);
});

function eventBackButton(){
	
	
	//alert(888);
	 history.back();
	
//	document.removeEventListener("backbutton", eventBackButton, false); //注销返回键
//    //3秒后重新注册
//    var intervalID = window.setInterval(
//        function() {
//           window.clearInterval(intervalID);
//           document.addEventListener("backbutton", eventBackButton, false); //返回键
//        }, 3000);
	
	// back();
////	if($("#page_home").is(":visible") || $("#page_login").is(":visible")){
//	if(	   $("#page_home").css("display") == "block"
//		|| $("#page_login").css("display") == "block"
//	  ){
//		
//		var times = 2000;//2秒之内再点退出
//		window.toast("点击两次返回键退出应用", times);
//		document.removeEventListener("backbutton", eventBackButton, false); //注销返回键
//		document.addEventListener("backbutton", exitAPP, false); //返回键
//		
//		//3秒后重新注册
//		var intervalID = window.setInterval( function() {
//			window.clearInterval(intervalID);
//			document.removeEventListener("backbutton", exitAPP, false); //注销返回键
//			document.addEventListener("backbutton", eventBackButton, false); //返回键
//		}, times );
//	} else {
//		//hideLoading();
//		//console.log( "3" );
//		//if($("#afui_modal").is(":visible"))
//		if($("#afui_modal").css("display") == "block")
//			$.ui.hideModal();
//		else
//			$.ui.goBack();
//	}
}
function exitAPP(){
	navigator.app.exitApp();
}

window.andoidVersion  = function(url, method, successCallback, errorCallback)
{
    cordova.exec(successCallback, errorCallback, "AndoidVersionPlugin", method, [url]);
};

//图标返回按钮
function back(){
	  history.back();
}
//获取UUid
function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

//分割字符串
function splitByBar(str){
	var strs= new Array(); //定义一数组 
	strs=str.split("-"); //字符分割 
	for (i=0;i<strs.length ;i++ ) 
	{ 
		strs[i]; //分割后的字符输出 
	} 	
	return strs;
}
function splitStr(str,s){
	var strs= new Array(); //定义一数组 
	strs=str.split(s); //字符分割 
	for (i=0;i<strs.length ;i++ ) 
	{ 
		strs[i]; //分割后的字符输出 
	} 	
	return strs;
}

//判断数字非0正整数
function isNum(value){
	//var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/ 
	var re = /^[1-9]+[0-9]*]*$/ ;
	return re.test(value);
}

function isNumber(value){
	var re = /^[0-9]+.?[0-9]*$/;
	return re.test(value);
}

//判断电话
function isPhone(tel){
   var mobile = /^1[3|4|5|7|8]\d{9}$/ , phone = /^0\d{2,3}-?\d{5,8}$/;
   return mobile.test(tel) || phone.test(tel);
}

