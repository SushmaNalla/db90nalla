// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"book", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
   }