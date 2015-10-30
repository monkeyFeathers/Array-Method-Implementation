'use strict';

var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var spy = require('chai-spies');
var BombArray = require('../src/BombArray');

describe('BombArray', function(){
  var bombArray = new BombArray([1,2,3,4]);

  describe('#push', function(){
    it('should add an element to the end of the collection', function(done){
      expect(bombArray.push(5)).to.deep.eql([1,2,3,4,5]);
      done();
    });
  });

  describe('#pop', function(){
    it('should remove an element from the end of the collection', function(done){
      bombArray.push(7)
      bombArray.pop();
      expect(bombArray.items).to.deep.eql([1,2,3,4,5]);
      done()
    });
    it('should return the thing it pops', function(done){
      expect(bombArray.pop()).to.eql(5)
      done()
    });
  });

  describe('#unshift', function(){
    it('should add an element to the beginning of the array', function(done){
      expect(bombArray.unshift(5)).to.deep.eql([5,1,2,3,4]);
      done()
    });
  });

  describe('#shift', function(){
    it('should remove an element from the beginning of an array', function(done){
      bombArray.unshift(7)
      bombArray.shift();
      expect(bombArray.items).to.deep.eql([5,1,2,3,4]);
      done();
    });
    it('should return the thing that is shifted', function(done){
      bombArray.unshift(5)
      expect(bombArray.shift()).to.equal(5);
      done();
    });
  });

  describe('#unique', function(){
    it('should return an array of unique values', function(done){
      bombArray.items = [1,2,2,5,5,99,0,6];
      expect(bombArray.unique()).to.deep.eql([1,2,5,99,0,6])
      done();
    });
  });

  describe('#frequency2',function(){
    it('should return the most frequent character',function(done){
      bombArray.items = ["On", "the", "other","hand", "we", "denounce"];
      expect(bombArray.frequency2()).to.deep.eql([{'e':5}])
      done();
    });
  });

});
