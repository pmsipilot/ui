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

        // Sass build
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/pmsipilot-ui.css': 'scss/main.scss'
                }
            }
        },

        // Copy assets
        copy: {
            main: {
                files: [
                    {expand: true, src: ['partials/**'], dest: 'public/'},
                    {expand: true, cwd: 'node_modules/pmsipilot-ui/images/', src: ['**/*'], dest: 'public/images'},
                    {expand: true, src: ['node_modules/pmsipilot-ui/node_modules/font-awesome/fonts/*'], dest: 'public/font/', flatten: true},
                    {expand: true, src: ['node_modules/pmsipilot-ui/font/*'], dest: 'public/font/', flatten: true},
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
                    'node_modules/angular/angular.js'
                    ,'node_modules/angular-bootstrap/ui-bootstrap-tpls.js'
                    ,'node_modules/angular-route/angular-route.js'
                    ,"node_modules/google-code-prettify/src/prettify.js"
                ],
                dest: 'public/js/vendor.js'
            },

            vendors_stylesheets: {
                src: [
                    "node_modules/google-code-prettify/src/prettify.css"
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
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint', 'sass', 'copy', 'concat']);

    grunt.registerTask('server', function () {
        return grunt.task.run(['default', 'connect']);
    });
};
