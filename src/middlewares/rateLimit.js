const rateLimit = require('express-rate-limit');
const { requests } = require('@config/index');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
  windowMS: requests.rateLimits.window,
  max: requests.rateLimits.max,
});

const slower = slowDown({
  windowMs: requests.slowDown.window,
  delayAfter: requests.slowDown.delayAfter,
  delayMs: requests.slowDown.delayMs,
});

module.exports = [slower, limiter];
