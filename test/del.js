"use strict";

const del = require('del');

del(['temp/test/*'], {force: true}).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});

// del(patterns, [options])
// Returns a promise for an array of deleted paths.
//
// del.sync(patterns, [options])
// Returns an array of deleted paths.
// del.sync(['public/assets/**', '!public/assets', '!public/assets/goat.png']);