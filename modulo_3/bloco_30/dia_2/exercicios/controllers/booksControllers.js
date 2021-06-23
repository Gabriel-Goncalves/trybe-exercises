const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async(_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo deu errado, verifique a mensagem no console.'})
  }
});


module.exports = router;