var ghpages = require('gh-pages');

ghpages.publish('build', {add: true}, function(err) {});