define(function() {
	return function(Module) {
		Module.preInit = function() {
			FS.init(null, null, null);
			window.processFileActions(FS);
		};