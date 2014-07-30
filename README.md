karmatest
=========

simple tutorial of using karma with angularjs.

This project integraetes karma with AngularJS. It has the corresponding Gruntfile.js and package.json which will allow to run the testcases throught grun

What is the structure of the project?
source/ 
   counter.js
  counter-test.js
runner/
   package.json
   Gruntfile.js
   karma.conf.js
   
   
   
package.json - defines all the dependanices of the project
GruntfIle.js - has the default goal to run the karma tests
karma.conf.js - defines the configuration for karma, which will run the jasmine tests


Prerequisites
Need to have nodeJs installed on your machines, to run the npm commands

How do I run the project?
1. cd /karamtest/runner
2. npm install 
3. grunt   //just type grunt, this will automatically run the karma testcase for you

Other References
This tutorial is based on a detailed blog 
http://kwilson.me.uk/blog/use-karma-and-grunt-to-run-your-jasmine-tests-in-real-time/
