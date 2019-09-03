var fs = require('fs');

var getFiles = function () {

    var rootDir = __dirname + '/entities';

    fs.readdir(rootDir, function (err, files) { // '/' denotes the root folder
        if (err) throw err;

        // Subdirectory parsing logic START
        var filesArray = [];
        // Subdirectory parsing logic END
        console.log(files)
        return files
    });
};

console.log(getFiles())