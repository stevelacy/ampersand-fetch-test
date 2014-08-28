var AmpersandModel = require('ampersand-model');

var JsonModel = AmpersandModel.extend({
  url: '/v1/json',
  props: {
    name: 'string',
    content: 'string'
  }
});


var HtmlModel = AmpersandModel.extend({
  url: '/v1/html',
  props: {
    name: 'string',
    content: 'string'
  }
});

var NocontentModel = AmpersandModel.extend({
  url: '/v1/nocontent',
  props: {
    name: 'string',
    content: 'string'
  }
});



module.exports.JsonModel = JsonModel;
module.exports.HtmlModel = HtmlModel;
module.exports.NocontentModel = NocontentModel;
