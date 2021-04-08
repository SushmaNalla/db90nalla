var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var book_controller = require('../controllers/book');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// BOOK ROUTES ///
// POST request for creating a book.
router.post('/resource/book', book_controller.book_create_post);
// DELETE request to delete book.
router.delete('/resource/book/:id', book_controller.book_delete);
// PUT request to update book.
router.put('/resource/book/:id', book_controller.book_update_put);
// GET request for one book.
router.get('/resource/book/:id', book_controller.book_detail);
// GET request for list of all book items.
router.get('/resource/book', book_controller.book_list);
module.exports = router;