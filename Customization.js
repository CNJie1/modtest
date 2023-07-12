function patchBytes() {
	var modules = h5gg.getRangesList("UnityFramework");
	var base = modules[0].start;
	var addr = Number(base) + 0x3BBBCC4;

  var inputField = document.getElementById("inputNum");
  var userInput = inputField.value;
  h5gg.setValue(addr, userInput, "U8"); // 写入内存地址
  inputField.value = ""; // 清空输入字段
}
