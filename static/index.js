var Models = require('./model');



var model1 = new Models.JsonModel();
model1.fetch({
  success: function(data){
    console.log('JsonModel success', data);
  },
  error: function(err){
    console.log('JsonModel error', err);
  }
});


var model2 = new Models.HtmlModel();
model2.fetch({
  success: function(data){
    console.log('HtmlModel success', data);
  },
  error: function(err){
    console.log('HtmlModel error', err);
  }
});

var model3 = new Models.NocontentModel();
model3.fetch({
  success: function(data){
    console.log('NocontentModel success', data);
  },
  error: function(err){
    console.log('NocontentModel error', err);
  }
});
