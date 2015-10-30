'use strict';

function BombArray(items) {
  if (Array.isArray(items)) {
    this.items = items;
  } else {
    throw(TypeError, 'not an array');
  }
}

BombArray.prototype = {
  constructor: BombArray,
  push: function(item) {
    this.items[this.items.length] = item;
    return this.items;
  },

  pop: function() {
    var items = this.items;
    if (items.length) {
      var popped = items[items.length - 1];
      items.length = items.length - 1;
      return popped;
    } else {
      return undefined;
    }
  },

  unshift: function(item) {
    var items = this.items;
    for (var i = items.length; i > 0; i--) {
      items[i] = items[i - 1];
    }

    items[0] = item;
    return items;
  },

  shift: function() {
    if (this.items) {
      var items = this.items;
      var shifted = items[0];
      for (var i = 1; i < items.length; i++) {
        items[i - 1] = items[i];
      }

      items.length = items.length - 1;
      return shifted;
    } else {
      return undefined;
    }
  },

  unique: function() {
    var items = this.items;
    var unique = [];
    items.forEach(function(item) {
      if (unique.indexOf(item) === -1) {
        unique.push(item);
      }
    });

    return unique;
  },

  frequency2: function() {
    var items = this.items;
    var chars = [];
    var obj = {};
    items.forEach(function(item) {
      item.split('').forEach(function(char) {
        var lChar = char.toLowerCase();
        if (obj[lChar]) {
          obj[lChar]++;
        } else {
          obj[lChar] = 1;
        }
      });
    });

    var max = 0;
    var store = [];
    for (var letter in obj) {
      var r = {};
      r[letter] = obj[letter];
      if (obj[letter] > max) {
        max = obj[letter];
        store = [];
        store.push(r);
      } else if (obj[letter] === max) {
        store.push(r);
      }
    }

    return store;
  },

};

module.exports = BombArray;
