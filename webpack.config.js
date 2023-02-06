const path = require('path')
//core node module
module.exports = {
  //export object from file
  mode: 'development',
  entry: './src/index.js',
  //Specify the file to look for javascript source file
  output: {
    //This is an object
    path: path.resolve(__dirname, 'dist'),
    //path to whatever folder  we want object file to be put in
    //__dirname gets directory of file
    //Go into dist file
    //Needs to get absolute path not relative
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true
  //When webpack run, it will watch for changes in index.js
  //Spits out bundle into bundle.js
}
