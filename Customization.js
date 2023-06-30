function patchBytes() {
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
	var addr = Number(base) + 0x01915304;

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
