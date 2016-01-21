#!/usr/bin/env node
var pluginlist = [
	"cordova-plugin-dialogs",
	"cordova-plugin-device"
];
var exec = require('child_process').exec;

function logOuput(error, stdout, stderr) {
    console.log(stdout);
}

pluginlist.forEach(function(plugin) {
    exec("cordova plugin add " + plugin, logOuput);
});