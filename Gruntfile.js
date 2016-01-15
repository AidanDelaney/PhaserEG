module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/init.js',
                ],
                dest: 'phasereg.js',
            }
        },

        uglify: {
            build: {
                src: 'phasereg.js',
                dest: 'phasereg.min.js'
            }
        },

        qunit: {
            all: ['tests/unittest.html'],
        },

        jshint: {
            all: ['Gruntfile.js', 'src/*.js', 'tests/*js'],
        },

        watch: {
            options: {
                livereload: true
            },
            js: {
                files: [ 'Gruntfile.js', 'phasereg.js' ],
                tasks: 'js'
            },
            html: {
                files: [ 'src/index.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'qunit']);
};
