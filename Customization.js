  function executePatchx1() {
				     var modules = h5gg.getRangesList("UnityFramework"); //获取模块列表
				     var base = modules[0].start; //获取第一个模块的基地址
				   
				     var number = document.getElementById("inputNum").value; // 获取输入的数字
				     var armInstruction = "MOV W0, #" + number + "; RET"; // 构建ARM指令字符串
				   
				     patchBytes(armInstruction, base); // 调用patchBytes函数执行ARM指令
				   }
				   
				   function patchBytes(armInstruction, base) {
				     var addr = Number(base) + 0x3BD2ABC; // 计算要修改的地址
				     var hexValue = armInstructionToHex(armInstruction); // 将ARM指令转换为十六进制值
				   
				     for (var i = 0; i < hexValue.length / 2; i++) {
				       var item = parseInt(hexValue.substring(i * 2, i * 2 + 2), 16);
				       h5gg.setValue(addr + i, item, "U8"); // 调用h5gg函数修改内存值
				     }
				   }
				   
				   function armInstructionToHex(armInstruction) {
				     var hex = "";
				     for (var i = 0; i < armInstruction.length; i++) {
				       var charCode = armInstruction.charCodeAt(i);
				       hex += charCode.toString(16).toUpperCase();
				     }
				     return hex;
				   }
