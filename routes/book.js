var express = require('express');
var router = express.Router();
const book_controlers= require('../controllers/book');

/* GET books */
router.get('/', book_controlers.book_view_all_Page );
module.exports = router;