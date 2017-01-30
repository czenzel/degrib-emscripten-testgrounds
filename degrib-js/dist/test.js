var fs = require('fs');
fs.readFile('../datasets/ds.snow.bin', {encoding: 'utf-8'}, function(err, data) {
	console.log(data.length);
});