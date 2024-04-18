const gistTag = require('hexo-tag-embed/dist/tags/gist');
const { snippet } = require('../utils');

/**
* Gist tag
*
* Syntax:
*   Same as official gist tag
*/
module.exports = function (...args) {
  return snippet(null, gistTag.apply(this, args));
}
