module.exports = function (grunt) {
	grunt.initConfig({
		exec: {
			addAndroid : {
				cmd : 'cordova platform add android'
			},
			removeAndroid : {
				cmd : 'cordova platform rm android'
			},
			buildAndroid : {
				cmd : 'cordova build android'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask('build-android',['exec:addAndroid','exec:buildAndroid']);
	grunt.registerTask('remove-android',['exec:removeAndroid']);
};