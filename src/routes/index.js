const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const okgo = { title: 'rastreadora.mx' };
    res.render('index', okgo);
});

module.exports = router;