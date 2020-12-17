const sass = require('node-sass');
module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        outputStyle: 'compressed',
      },
      dist: {
        files: {
          'app/build/css/style.min.css': 'app/scss/style.scss',
        },
      },
    },
    watch: {
      sass: {
        files: 'app/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
      // scripts: {
      //   files: '**/*.js',
      //   tasks: ['newer:js'],
      //   options: {
      //     livereload: true,
      //   },
      // },
      // html: {
      //   files: '*.html',
      //   tasks: ['newer:html'],
      //   options: {
      //     livereload: true,
      //   },
      // },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-newer');
  // grunt.registerTask('sass', ['concat', 'sass']);
};
