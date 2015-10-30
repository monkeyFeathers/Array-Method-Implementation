# Array Methods

BombArray wraps a native javascript array object and then reimplements the array prototype methods "push", "pop", "shift", and "unshift" as well as "unique" and "frequency2".

### Installation

git clone

npm install

### Usage

Import the object

`var BombArray = require('./src/bombArray');`

Create an instance

`var b = new BombArray([1, 2, 3, 4]);`

Use b.items to access the array directly

`b.items
// [1, 2, 3, 4]`

Use some sweet methods

`b.push(5);
// [1, 2, 3, 4, 5]`

`b.pop();
// 5`

`b.unshift(5);
// [5, 1, 2, 3, 4]`

`b.shift();
// 5`

Unique will return a new array with all duplicates removed

`b.items = [1, 2, 2, 5, 5, 99, 0, 6];
b.unique();
// [1, 2, 5, 99, 0, 6]`

Given b.items is an array of words, frequency2 will return an objects with the most frequent character and the frequency.

`b.items = ['On', 'the', 'other', 'hand', 'we', 'denounce'];
b.frequency2();
// {char:'e', freq:5}`

If there are more than one characters with the highest frequency it will return an array.

`b.items = ['On', 'the', 'other', 'hand', 'we', 'denounce', ','];
b.frequency2();
// [{char:'n', freq:5}, {char:'e', freq:5}]`

### License
MIT
