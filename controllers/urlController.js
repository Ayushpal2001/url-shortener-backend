// controllers/urlController.js
const { nanoid } = require('nanoid');
const Url = require('../models/Url');
const validUrl = require('valid-url');

exports.shortenUrl = async (req, res) => {
  try {
    let { longUrl } = req.body;

    if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://')) {
      longUrl = 'http://' + longUrl;
    }

    if (!validUrl.isUri(longUrl)) {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    const existing = await Url.findOne({ longUrl });
    if (existing) {
      return res.json({ shortUrl: `${process.env.BASE_URL}/${existing.shortId}` });
    }

    const shortId = nanoid(8);
    const newUrl = new Url({ longUrl, shortId });
    await newUrl.save();

    res.json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).send('URL not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Redirect error');
  }
};

exports.searchShortUrl = async (req, res) => {
  try {
    let { longUrl } = req.query;

    if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://')) {
      longUrl = 'http://' + longUrl;
    }

    const existing = await Url.findOne({ longUrl });

    if (existing) {
      return res.json({ shortUrl: `${process.env.BASE_URL}/${existing.shortId}` });
    } else {
      return res.status(404).json({ error: 'URL not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Search error' });
  }
};
 
