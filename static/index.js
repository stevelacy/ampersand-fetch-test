var Model = require('./model');
var model = new Model();

model.fetch({
  success: function(data){
    console.log('success', data);
  },
  error: function(err){
    console.log('error', err);
  }
});
