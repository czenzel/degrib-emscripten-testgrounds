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
				var rows = content.split("\n");
				for (var i = 0; i < rows.length; i++) {
					if (i > 0 && i == 1) {
						var columns = rows[i].split(", ");
						if (columns.length > 4) {
							var strData = "The current cloud cover in Hilltown Township is " + Math.round(parseInt(columns[4])) + "%";
							$("#console").val(strData);
						}
					}
				}
			});
		}
	});
});