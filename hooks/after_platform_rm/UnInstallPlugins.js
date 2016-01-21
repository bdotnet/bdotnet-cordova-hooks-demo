#!/usr/bin/env node

var exec = require('child_process').exec;
var pluginList = {};

function logOutput(error, stdout,stderr){
	console.log(stdout);
}

function uninstallAllPlugins(error, stdout, stderr) {
	pluginList = stdout;
	console.log(`Available plugins :`+ pluginList);
    var plugins = pluginList.split('\n');
	plugins.forEach(function(plugin){
    	var pluginName = plugin.split(" ")[0];
		exec("cordova plugin remove "+ pluginName,logOutput);
	});    	
}
exec("cordova plugins",uninstallAllPlugins);