/*jslint node:true*/
/*global describe,it,expect,beforeEach,afterEach*/

if (!jasmine.standalone) {

var exec = require('child_process').exec;
var packageInfo = require('../package.json');

/*exec('node ./bin/cli.js --version', function (error, stdout, stderr) {
    console.log(stdout, stderr);
});*/
//console.log(exec('node ./bin/cli.js --version'), {encoding: 'utf8'});

describe('Testing cli.js:', function () {
    'use strict';
    
    describe('Getting version and help on usage:', function () {
        
        it('Get version --version', function (done) {
            exec('node ./bin/cli --version', function (error, stdout, stderr) {
                expect(stdout).toEqual(packageInfo.version + '\n');
                done();
            });
        });
        
        it('Get version -v', function (done) {
            exec('node ./bin/cli -v', function (error, stdout, stderr) {
                expect(stdout).toEqual(packageInfo.version + '\n');
                done();
            });
        });
        
        it('Get help --help', function (done) {
            exec('node ./bin/cli --help', function (error, stdout, stderr) {
                expect(stdout.substr(0, 13)).toEqual('Usage: xml-js');
                done();
            });
        });
        
        it('Get help -h', function (done) {
            exec('node ./bin/cli -h', function (error, stdout, stderr) {
                expect(stdout.substr(0, 13)).toEqual('Usage: xml-js');
                done();
            });
        });
        
        it('Get help when no arguments supplied', function (done) {
            exec('node ./bin/cli', function (error, stdout, stderr) {
                expect(stdout.substr(0, 13)).toEqual('Usage: xml-js');
                done();
            });
        });
        
    });
    
    describe('Convert XML:', function () {
        
        xit('should convert xml file', function (done) {
            exec('node ./bin/cli note.xml', function (error, stdout, stderr) {
                expect(stdout).toEqual(packageInfo.version + '\n');
                done();
            });
        });
        
    });
    
});
    
}