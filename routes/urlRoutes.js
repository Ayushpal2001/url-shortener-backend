// routes/urlRoutes.js
const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl, searchShortUrl } = require('../controllers/urlController');

router.post('/shorten', shortenUrl);
router.get('/:shortId', redirectUrl);
router.get('/search', searchShortUrl);

module.exports = router; 
 
