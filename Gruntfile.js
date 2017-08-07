module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

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
                    drop_console: false
                }
            },
            target: {
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
        },
        watch: {
  scripts: {
    files: ['assets/js/*.js', 'assets/css/*.css'],
    tasks: ['jshint', 'uglify', 'cssmin'],
    options: {
      spawn: false,
    },
  },
},
    });

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);



};
