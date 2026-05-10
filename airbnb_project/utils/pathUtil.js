const path= require('path');

// we are extracting the directory name of the main file therefore it will hepls us avoid problem of writing relative path again and again.
module.exports=path.dirname(require.main.filename);

// replace the __dirname with oject of above export with res.sendFile(path.join(rootDir,<directory>,<filename>));