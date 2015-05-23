module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		copy: {
			main: {
				files: [
					// html
					{src: ['*.html'], dest: 'build/', expand: true},
					// css
					{src: ['css/**/*'], dest: 'build/', expand: true},
					// js
					{src: ['js/**/*'], dest: 'build/', expand: true},
					// img
					{src: ['*.png', '*.ico'], dest: 'build/', expand: true},
					// misc
					{src: ['.htaccess', '*.xml', 'humans.txt', 'robots.txt'], dest: 'build/', expand: true}
				]
			}
		},
		clean: {
			build: ['build/']
		}
	});
	
	grunt.registerTask('default', ['clean', 'copy']);
};