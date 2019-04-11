const router = require('express').Router();
const TestController = require('@controllers/test');

router
  .get('/', TestController.helloWorld);

module.exports = router;
