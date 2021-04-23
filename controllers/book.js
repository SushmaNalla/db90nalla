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
        res.send(err)
        res.status(500)
    }
};
// Handle Book delete form on DELETE.
exports.book_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Book.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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
// Handle a show one view with id specified by query
exports.book_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Book.findById( req.query.id)
        res.render('bookdetail', 
{ title: 'Book Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.book_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('bookcreate', { title: 'bookcreate'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.book_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Book.findById(req.query.id)
        res.render('bookupdate', { title: 'Book Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.book_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Book.findById(req.query.id)
        res.render('bookdelete', { title: 'Book Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};





