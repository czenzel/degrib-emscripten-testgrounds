var Module = {
	preInit: function() {
		/*
		Use for a Node.JS Environment:
		*/
		var globalData = require('fs').readFileSync('/dev/stdin');

		/*
		Use for a Browser-based Environment
		According to Emscripten Documentation - "Setting up Standard I/O Devices"
		/dev/stdin is still STDIN similar to Node.JS environment
		We must read it without a nodeJS module though
		var globalData = FS.readFile('/dev/stdin', {encoding: 'binary'});
		*/


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