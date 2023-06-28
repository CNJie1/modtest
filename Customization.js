 function executePatchx1() {
	          var inputNum = document.getElementById("inputNum").value;
	          var modules = h5gg.getRangesList("UnityFramework");
	          var base = modules[0].start;
	          var addr = Number(base) + 0x01915304;
	          var hex = inputNum.toString(16).toUpperCase(); // 将输入的整数转换为十六进制，并转换为大写形式
	  
	          // 将用户输入的十六进制值传递给 patchBytes() 函数
	          patchBytes(addr, hex);
	      }
	  
	      function patchBytes(addr, hex) {
	          for (var i = 0; i < hex.length / 2; i++) {
	              var item = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
	              h5gg.setValue(addr + i, item, "U8");
	          }
	      }
