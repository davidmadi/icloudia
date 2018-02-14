var express = require('../config/express')();
var supertest = require('supertest')(express);
const assert = require('assert');
var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('postgresql');
const dbFac = global.rootRequire('app/infra/db/dbFactory');

describe('#Account', function(){

  it('#CleanDB',function(done){    

    const conn = global.rootRequire('app/infra/db/DBFactory')();
    conn.connect();
      
    databaseCleaner.clean(conn, (err) => {
      conn.end();
      assert((err == null));
      done(err);
    });
    console.log("base de dados limpa");
  });
    

  it('#Create',function(done){    

    supertest.post('/signup/create')
    .set('Accept','application/json')
    .type('form')
    .send({'email': 'davidmadi@gmail.com', 'name':'david madi'})
    .expect('Content-Type',/application\/json/)
    .expect(200)
    .end(function(err, res){

      
      var result = JSON.parse(res.text);
      if (result.errors)
      {
        console.log(result.errors);
        assert(result.errors.length == 0, result.errors[0].msg);
      }
      else
      {
        assert(result.length > 0, "Id deve ser maior que zero");
        assert(result[0].id > 0, "Id deve ser maior que zero");
      }

      done();
    });
    
    /*
    
    supertest.post('/login')
    .field('email', 'davidmadi@gmail.com')
    .field('password', 'hagadol')
    .set('Accept','application/json')
    .expect('Content-Type',/json/)
    .expect(200)
    .end(function(err, res){
      assert(res.body.email, 'davidmadi@gmail.com')
      assert(res.body.name, 'david madi')
      done();
    });
    */
    
  });

});