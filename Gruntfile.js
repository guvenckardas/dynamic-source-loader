/**
 * Created by gkardas on 22/07/15.
 */


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify:{
            my_target: {
                files: {
                    'dist/slc.min.js': ['source-loader-controller.js']
                }
            }
        }

        });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['uglify']);

};