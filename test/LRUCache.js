// Link https://www.codewars.com/kata/53b406e67040e51e17000c0a/train/javascript
/*
 Implement a Least Recently Used (LRU) cache. An LRU cache is a key-value store that contains a set capacity for the
 number of elements it holds, which is stored in a property. The size should also be a property. When trying to add a new
 key-value pair, if cache.size == cache.capacity, the Least Recently Used key is removed.

 Hint: You will will need to use the Object.defineProperty facility

 Example Behavior:

 var store = new LRUCache(3 // Size of the cache
 , {a: 1}); // Optional initial values for cache
 store.size; // should be 1
 store.capacity; // should be 3
 store.a; // should be 1;
 store.cache('b', 2)['b']; // should be 2
 store.a = 5;
 store.a; // should be 5
 store.cache('c', 3).cache('d', 4).b; // should be undefined, since 'b' was removed because it was the least recently used
 store.delete('d');
 store.d ; // should be undefined, since 'd' was deleted
 store.size ; // should be 2
 store.cache('c', 4);
 store.c; // should be 4
 store.capacity = 1; // should resize the store to have just one element
 Object.keys(store); // should be ['c']
 Full API Specification:

 The user should be able to make a new cache object with new LRUCache(n), where n is the cache's (initial) capacity
 The constructor should be able to take a javascript object as an optional second parameter, which will be copied and
 put into the cache Items can be added to the cache using a method called cache
 cache takes two arguments, a key and a value
 The new key should be added as a property to the cache
 The new property should be enumerable
 It should be possible to reassign the new property
 Caching an already existing property should update its value
 The cache method should return the cache itself, so the method can be chained (ie, the builder pattern)
 The cache method itself should not be enumerable, writable, nor configurable
 Items can be deleted from the cache using a method called delete
 This method should not be enumerable, writable, nor configurable
 This method should have the same return values as the delete builtin
 The number of elements stored in the cache should be accessible via the size property
 This property should not be enumerable, writable nor configurable
 The capacity should be accessible by via the capacity property
 Making the capacity smaller should trigger the cache to delete the least recently used items until the size of the
 cache is smaller than or equal to the capacity
 This property should not be enumerable
 The size property should never acceed the capacity property of a cache
 An item in the cache is used every time its value is read or assigned, or it is cached using the cache method
 */
const assert = require('assert');
import LRUCache from '../src/LRUCache';

let store = new LRUCache(3, {a: 1});
assert.equal(store.size, 1, 'store.size');
assert.equal(store.capacity, 3, 'store.capacity');
assert.equal(store.a, 1, 'store.a');
assert.equal(store.cache('b', 2)['b'], 2, 'store.b');
store.a = 5;
assert.equal(store.a, 5, 'store.a');
store.cache('c', 3).cache('d', 4);
assert.equal(store.b, undefined, 'store.b');
assert.equal(store.c, 3, 'store.c');
assert.equal(store.d, 4, 'store.d');
assert.equal(store.a, 5, 'store.a');
assert.equal(store.size, 3, 'store.size');
assert.equal(store.delete('delete'), false, "store.delete('delete')");
assert.equal(store.delete('d'), true, "store.delete('d')");
assert.equal(store.d, undefined, 'store.d');
assert.equal(store.delete('e'), true, "store.delete('e')");
assert.equal(store.size, 2, 'store.size');
store.cache('c', 4);
assert.equal(store.c, 4, 'store.c');
store.capacity = 1;
assert.equal(Object.keys(store).length, 1, "Object.keys(store).length");
assert.equal(Object.keys(store)[0], 'c', "Object.keys(store).length");