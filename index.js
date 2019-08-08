
'use strict';

module.exports = {
  rules: {
    'max-len': [2, {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true,
      ignorePattern: 'goog\.(module|require)',
    }]
  },
};
