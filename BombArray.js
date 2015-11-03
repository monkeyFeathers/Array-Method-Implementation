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
    var chars = [];
    var obj;
    var store;

    this.items.forEach(function(item) {
      item.split('').forEach(function(char) {
        chars.push(char.toLowerCase());
      });
    });

    obj = this.mapToCounter(chars);
    store = this.count(obj);

    return store;
  },

  mapToCounter: function(chars) {
    var obj = {};
    chars.forEach(function(char){
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    })
    return obj;
  },

  count: function(countObj) {
    var store = [];
    var max = 0;
    for (var letter in countObj) {
      var r = {};
      r.char = letter;
      r.freq = countObj[letter];
      if (countObj[letter] > max) {
        max = countObj[letter];
        store = [];
        store.push(r);
      } else if (countObj[letter] === max) {
        store.push(r);
      }
    }
    return store;
  },

  freq2: function() {
    var store;
    var obj;
    var chars = this.items.map(function(item) {
      var bombItem = new BombArray(item.toLowerCase().split(''));
      return bombItem.unique();
    });
    chars = chars.reduce(function(a, b) {
      return a.concat(b);
    });

    obj = this.mapToCounter(chars);
    store = this.count(obj);

    return store;
  }

};

module.exports = BombArray;
