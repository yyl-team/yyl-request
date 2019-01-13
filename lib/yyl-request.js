const request = require('request');

const extRequest = function (...argv) {
  return new Promise ((next) => {
    argv.push((...rArgv) => {
      next(rArgv);
    });
    request(...argv);
  });
};

extRequest.get = function (...argv) {
  return new Promise ((next) => {
    argv.push((...rArgv) => {
      next(rArgv);
    });
    request.get(...argv);
  });
};

extRequest.post = function (...argv) {
  return new Promise ((next) => {
    argv.push((...rArgv) => {
      next(rArgv);
    });
    request.post(...argv);
  });
};

extRequest.origin = request;

module.exports = extRequest;
