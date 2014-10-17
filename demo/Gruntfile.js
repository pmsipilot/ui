/**
 * Project PMSIPilotUI. Compilation script usage: grunt :build all grunt test:
 * tests grunt watch: dev mode auto-update.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // validate js files
        jshint: {
            all: ['app/**/*.js']
        },

        // Less build
        less: {
            all: {
                options: {
                    yuicompress: true
                },
                files: {
                    "public/css/pmsipilot-ui.css": "less/main.less"
                }
            }
        },

        // Copy assets
        copy: {
            main: {
                files: [
                    {expand: true, src: ['partials/**'], dest: 'public/'},
                    {expand: true, cwd: 'bower_components/pmsipilot-ui/images/', src: ['**/*'], dest: 'public/images'},
                    {expand: true, src: ['bower_components/fontawesome/fonts/*'], dest: 'public/font/', flatten: true},
                    {expand: true, src: ['bower_components/pmsipilot-ui/font/*'], dest: 'public/font/', flatten: true},
                    {src: ['index.build.html'], dest: 'public/index.html'}
                ]
            }
        },

        // Concatenate assets and hs
        concat: {

            application: {
                src: ['app/**/*.js'],
                dest: 'public/js/app.js'
            },

          vendors: {
                src: [
                    'bower_components/jquery/dist/jquery.js'
                    ,'bower_components/angular/angular.js'
                    ,'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                    ,'bower_components/angular-route/angular-route.js'
                    ,"bower_components/google-code-prettify/src/prettify.js"
                ],
                dest: 'public/js/vendor.js'
            },

            vendors_stylesheets: {
                src: [
                    "bower_components/google-code-prettify/src/prettify.css"
                ],
                dest: 'public/css/vendor.css'
            }
        },

        connect: {
            server: {
                options: {
                    port: 3333,
                    base: 'public',
                    hostname: '0.0.0.0',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint', 'less', 'copy', 'concat']);

    grunt.registerTask('server', function () {
        return grunt.task.run(['default', 'connect']);
    });
};
