var fs = require('fs');
var requirejs = require('requirejs');
var jasmine = require('../lib/jasmine/jasmine').jasmine;
var jasmine_console = require('../lib/jasmine/jasmine_console').jasmine_console;

// configure requirejs
requirejs.config({
  nodeRequire: require,
  baseUrl: __dirname,
  paths: {
    sorts: '../js/sorts'
  }
});

// make define available globally like it is in the browser
global.define = require('requirejs');

// make jasmine available globally like it is in the browser
global.describe = require('../lib/jasmine/jasmine').describe;
global.it = require('../lib/jasmine/jasmine').it;
global.expect = require('../lib/jasmine/jasmine').expect;

// load specs
fs.readdirSync(__dirname+'/spec').map(function(spec) {
  requirejs([__dirname+'/spec/'+spec],function(spec){});
});

// run em
jasmine.getEnv().addReporter(new jasmine_console());
jasmine.getEnv().execute();
