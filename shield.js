//Jie阻止查看源代码方案
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
      return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
      return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
      return false;
    }
  }
//屏蔽右键菜单
document.oncontextmenu = function (event){
    if(window.event){
    event = window.event;
    }
    try{
    var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
    }
    catch (e){
        return false;
    }
}
//屏蔽选中
document.onselectstart = function (event){
    if(window.event){
        event = window.event;
        }
    try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        } 
    catch (e) {
        return false;
    }
}
//屏蔽复制
document.oncopy = function (event){
    if(window.event){
    event = window.event;
    }
    try{
        var the = event.srcElement;
        if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        }
    catch (e){
        return false;
    }
}

//屏蔽剪贴
document.oncut = function (event){
    if(window.event){
    event = window.event;
    }
    try{
        var the = event.srcElement;
        if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        }
    catch (e){
        return false;
    }
}
//屏蔽粘贴
document.onpaste = function (event){
    if(window.event){
        event = window.event;
        }
    try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        }
    catch (e){
        return false;
    }
}
//测试版本-测试时也要屏蔽这行代码 不然会让你无法打开F12开发人员
document.onkeydown = function (event) {
  // 判断是否按下F12键，F12键码为123
  if (event.keyCode == 123) {
    // 跳转到指定页面
    window.location.href = "https://example.com/debug.html";
  }
};

var threshold = 400; // 打开控制台的宽或高阈值
// 每秒检查一次
var check = setInterval(function() {
    if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
        // 如果打开控制台，则刷新页面
       window.location.href = "https://example.com/debug.html";
    }
},1000)
