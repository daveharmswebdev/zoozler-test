process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server');
var knex = require('../../db/knex');

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  it('', () => {
    (true).should.be.true;
  });

  it('should return all todos', function(done) {
    chai.request(server)
    .get('/api/todos')
    .end(function(err, res) {
      console.log(res.body, res.body.length);
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(4);
      res.body[0].should.have.property('todo');
      res.body[0].todo.should.equal('buy beer');
      res.body[0].should.have.property('when');
      res.body[0].when.should.equal('today');
      res.body[0].should.have.property('where');
      res.body[0].where.should.equal('kroger');
      done();
    });
  });

  describe('POST /api/todos', function() {
    it('should add a new todo', function(done) {
      chai.request(server)
      .post('/api/todos')
      .send({
        todo: 'mow lawn',
        when: 'today',
        where: 'home'
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body[0].should.have.property('todo');
        res.body[0].todo.should.equal('mow lawn');
        res.body[0].should.have.property('when');
        res.body[0].when.should.equal('today');
        res.body[0].should.have.property('where');
        res.body[0].where.should.equal('home');
        done();
      });
    });
  });


});
