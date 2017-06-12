module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['assets/js/*.js']
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    'assets/bundles/site.min.js': ['assets/js/devconf.js', 'assets/js/site.js', 'assets/js/init.js'],
                }
            }
        },
        cssmin: {
            target: {
                files: {
                'assets/bundles/site.min.css': ['assets/css/site.css']
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);



};
