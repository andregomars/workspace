const Db = require('mongodb').Db,
    Server = require('mongodb').Server;
    assert = require('assert');

const db = new Db('mydb', new Server('localhost', 27017));
db.open(function(err, db) {
    assert.equal(null, err);

    db.addUser('andre', '1234', function(err, result) {
        assert.equal(null, err);
        db.authenticate('andre', '1234', function(err, result) {
            assert.equal(true, result);
            db.close();
        });
    });
});


    