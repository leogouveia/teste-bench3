const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const clients = await Client.findAll({ limit: 10 });
  return res.json(clients)
});

router.get('/hello', (req, res, next) => {
  res.render('index', { title: 'Express' });
})
module.exports = router;
