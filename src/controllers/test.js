const Test = require('@models/test');

const TestController = {
  helloWorld(req, res) {
    res.sendError('erro no banco ae', 500);
  },
  createSomeone(req, res) {
    const { name, age } = req.body;
    const person = new Test({ name, age });
    person.save((err, person) => {
      if (err) return res.status(500).send({ message: 'erro' });
      res.send(person);
    });
  },
};

module.exports = TestController;
