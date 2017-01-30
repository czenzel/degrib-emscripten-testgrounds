var Module = {
	preInit: function() {
		var globalData = require('fs').readFileSync('/dev/stdin');
		console.log(data.length);

		var stream = FS.open('/data.bin', 'w+');
		FS.write(stream, globalData, 0, globalData.length, 0);
		FS.close(stream);

		console.log(FS.readFile('/data.bin', {encoding:'binary'}).length);
	}
};

function toArrayBuffer(buf) {
	var ab = new ArrayBuffer(buf.length);
	var view = new Uint8Array(ab);
	for (var i = 0; i < buf.length; ++i) {
		view[i] = buf[i];
	}
	return ab;
}