var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/dev.db');
var fs = require('fs');
db.all("SELECT * FROM blog_blogpost", function(err, row) {
    fs.writeFile('data/data.json', JSON.stringify(row),function(){

    })
});

db.close();