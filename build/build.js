const shell = require('shelljs');

// Remove old dist, copy assets again
shell.rm('-rf', './dist');
shell.mkdir('./dist');
shell.cp('-R', './assets', './dist');
