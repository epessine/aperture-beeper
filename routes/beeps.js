const express = require('express');
const router = express.Router();

const Beep = require('../app/models/Beep');

router.post('/beep', (req, res) => {
  const newBeep = new Beep({
    name: req.body.name,
    message: req.body.message
  });

  newBeep
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;