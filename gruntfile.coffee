module.exports = (grunt) ->
	grunt.initConfig
		requirejs:
			compile:
				options:
					mainConfigFile: "build.js"
		min:
			"dist/skeleton.min.js": "dist/skeleton.js"
		jasmine:
			all: ['test/runner.html']
		watch:
			files: ['lib/**/*','test/spec/**/*']
			tasks: ['jasmine']

	grunt.loadNpmTasks 'grunt-contrib-requirejs'
	grunt.loadNpmTasks 'grunt-jasmine-task'

	grunt.registerTask 'default', ['jasmine','requirejs','min']
	grunt.registerTask 'test', ['jasmine']
