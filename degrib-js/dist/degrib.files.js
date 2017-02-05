define(['degrib.browser'], function(myModule) {
	var content = '';
	myModule({
		arguments: ['-in', '/data.bin', '-P', '-pnt', '40.3182,-75.2476'],
		print: function() {
			return function(text) {
				if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
				content += text + "\n";
			};
		}(),
		postRun: function() {
			$(document).ready(function() {
				$('#console').val(content);
			});
		}
	});
});