// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.cache = new Map();
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     const value = this.cache.get(key);
//     if (!value) return -1;
//     this.cache.delete(key);
//     this.cache.set(key, value);
//     return value;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if (this.cache.has(key)) this.cache.delete(key);
//     this.cache.set(key, value);
//     const keys = this.cache.keys();
//     if (this.cache.size > this.capacity) this.cache.delete(keys.next().value);
// };

// /** 
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
  };
}