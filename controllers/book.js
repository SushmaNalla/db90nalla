var Book = require('../models/book');
// List of all Books
exports.book_list = async function (req, res) {
    try {
        theBooks = await Book.find();
        res.send(theBooks);
    }
    catch (err) {
        res.send(`{"error": ${err}}`);
        res.status(500);
    }

};
// for a specific Book.
exports.book_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Book.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Book create on POST.
exports.book_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"Twenty Yawns", "price":35.6, "author":"Jane Smiley"}
    document.name = req.body.name;
    document.price = req.body.price;
    document.author = req.body.author;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle Book delete form on DELETE.
exports.book_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Book delete DELETE ' + req.params.id);
};
// Handle Book update form on PUT.
exports.book_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Book.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.price) toUpdate.price = req.body.price;
        if(req.body.author) toUpdate.author = req.body.author;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.book_view_all_Page = async function (req, res) {
    try {
        theBooks = await Book.find();
        console.log("njfndw")
        res.render('book', { title: 'Book Search Results', results: theBooks });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};   