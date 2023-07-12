function Customization(){
	var inputField = document.getElementById("inputNum");
}
var modules = h5gg.getRangesList("UnityFramework"); //库
  
  var base = modules[0].start;//运行时内存中的模块基地址
  
  var addr = Number(base) + 0x2DB2B78; //偏移量
  
  patchBytes(addr,inputField); //字节
  //只有越狱设备才能做到这一点
  function patchBytes(addr, hex) {
      for(i = 0;i<hex.length/2;i++) {
          var item = parseInt(hex.substring(i*2, i*2+2), 16);
          h5gg.setValue(addr+i,item, "U8");
      }
   }
