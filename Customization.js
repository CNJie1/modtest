 //测试[1]
 function patchBytes() {
        var inputNum = document.getElementById("inputNum").value;
        var modules = h5gg.getRangesList("UnityFramework");
        var base = modules[0].start;
        var addr = Number(base) + 0x3BD2ABC;
        var hex = inputNum.toString(16).toUpperCase();
        
        for (var i = 0; i < hex.length / 2; i++) {
            var item = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
            h5gg.setValue(addr + i, item, "U8");
        }
    }
	// //测试[2]
	//  function patchBytes() {
	//         var inputNum = document.getElementById("inputNum").value;
	//         var modules = h5gg.getRangesList("UnityFramework");
	//         var base = modules[0].start;
	//         var addr = Number(inputNum);
	//         var hex = "00E0AFD2C0035FD6";
	        
	//         for (var i = 0; i < hex.length / 2; i++) {
	//             var item = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
	//             h5gg.setValue(addr + i, item, "U8");
	//         }
	//     }