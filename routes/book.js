var express = require('express');
var router = express.Router();
const book_controlers= require('../controllers/book');

/* GET books */
router.get('/', book_controlers.book_view_all_Page );
router.get('/detail', book_controlers.book_view_one_Page);
router.get('/create', book_controlers.book_create_Page);
/* GET create update page */
router.get('/update', book_controlers.book_update_Page);
router.get('/delete', book_controlers.book_delete_Page);

module.exports = router;