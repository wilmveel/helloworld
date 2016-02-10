var assert = require('assert');
var request = require('supertest');

describe('App', function() {

    var app = require('./index');

    describe('GET /', function () {
        it('should return Hello World', function (done) {
            request("localhost:5000")
                .get('/')
                .end(function(err, res){
                    assert.equal('Hello World!!!', res.text);
                    done()
                })
        });
    });
});