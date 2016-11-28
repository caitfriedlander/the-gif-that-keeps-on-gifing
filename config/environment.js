var _ = require('lodash');

var localEnvVars = {
  TITLE:      'The Gif That Keeps On Gifing',
  SAFE_TITLE: 'The Gif That Keeps On Gifing'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
