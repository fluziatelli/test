module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      build: {
          options: {
          sassDir: 'app/styles/sass',
          cssDir: 'app/styles/css',
          raw: 'preferred_syntax = :sass\n' // Use `raw` since it's not directly available
        }
      },
      dev: {               
        options: {
          sassDir: 'app/styles/sass',
          cssDir: 'app/styles/css'
        }
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-compass');
    
    
    grunt.registerTask('default', ['compass:build']);
    

};