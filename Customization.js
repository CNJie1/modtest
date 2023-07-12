function patchBytes() {

	var inputNum = document.getElementById("inputNum").value;
	
	var movInstruction = "mov r0, #" + inputNum; // MOV 指令，将输入的数字存入寄存器 r0
	var retInstruction = "bx lr"; // RET 指令，跳转到链接寄存器 lr 中的地址
	
	var movHex = asmToHex(movInstruction); // 调用 asmToHex 函数将指令转换为十六进制
	var retHex = asmToHex(retInstruction);

	var modules = h5gg.getRangesList("UnityFramework"); // 获取模块范围列表
	var base = modules[0].start; // 运行时内存中的模块基地址
	var addr = BigInt(base) + 0x3BBBCC4; // 偏移量

	var hex = movHex + retHex; // 拼接转换后的指令

	patchBytes(addr, hex); // 调用 patchBytes 函数进行字节修补
	
	function asmToHex(asmInstruction) {
	  var buffer = new ArrayBuffer(4);
	  var view = new DataView(buffer);
	
	  var asm = "add r0, r0, r0\n" + asmInstruction; // 添加额外指令以确保编码正确
	
	  var code = asm.codePointAt(0) & 0x7F;
	  view.setInt32(0, code, false);
	
	  return view.getUint32(0).toString(16).padStart(8, '0').toUpperCase();
	}
	function patchBytes(addr, hex) {
		for (var i = 0; i < hex.length / 2; i++) {
		  var item = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
		  h5gg.setValue(addr + BigInt(i), item, "U8");
		}
	  }
}

/*function patchBytes() {
	var input = document.getElementById("myInput").value;
	var intValue = parseInt(input);
	var hexValue = intValue.toString(16);

	// 补齐为8位的十六进制字符串
	while (hexValue.length < 8) {
	  hexValue = "0" + hexValue;
	}

	// 获取名为 "UnityFramework" 的模块地址范围列表
	var modules = h5gg.getRangesList("UnityFramework");

	// 获取第一个模块的起始地址
	var base = modules[0].start;

	// 计算补丁地址
	var addr = Number(base) + 0x3BD2ABC;

	// 拼接成ARM64指令需要的格式
	var hexString = "EOR X0, X0, X0\nADD X0, X0, #" + hexValue;

	// 调用汇编函数执行字节补丁
	asmPatch(addr, hexString);
  }

  function asmPatch(addr, hexString) {
	// 将十六进制字符串转换为Uint8Array
	var bytes = new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

	// 执行字节补丁
	for (var i = 0; i < bytes.length; i++) {
	  h5gg.setValue(addr + i, bytes[i], "U8");
	}
  }
*/
