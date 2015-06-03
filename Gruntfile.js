module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        stage: 0
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: ['**/*.js'],
          dest: 'dist'
        }, {'spell.js': 'lib/spell.js'}]
      }
    }
  });

  grunt.registerTask('compile', ['babel']);
}