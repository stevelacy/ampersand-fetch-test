var AmpersandModel = require('ampersand-model');

var Model = AmpersandModel.extend({
  url: '/v1/items',
  props: {
    name: 'string',
    content: 'string'
  }
});

module.exports = Model;
