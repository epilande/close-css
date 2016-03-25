var color = require('./randomizers/Color.js');
var border = require('./randomizers/Border.js');

module.exports = {
  'color': color,
  'border': border,
  'flip': function (){
    var x = (Math.floor(Math.random() * 2) === 0);
      if (x){
        return 1;
      }else{
        return 0;
      }
  };
};