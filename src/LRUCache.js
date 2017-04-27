function LRUCache(capacity, init) {

  let cacheObj = {}, usedPropertiesHistory = [];

  function setProperty(property, value) {
    Object.defineProperty(cacheObj, property.toString(), {
      get: () => {
        let index = usedPropertiesHistory.indexOf(property);
        if (index > -1) usedPropertiesHistory.splice(index, 1);
        usedPropertiesHistory.push(property);
        return value;
      },
      set: (val) => { value = val; },
      enumerable: true,
      configurable: true
    });
  }

  Object.keys(init).map((p) => setProperty(p, init[p]));

  Object.defineProperty(cacheObj, 'size', { get: () => Object.keys(cacheObj).length });

  Object.defineProperty(cacheObj, 'capacity', {
    set: (capacity) => { while (cacheObj.size > capacity) deleteLeastUsedProperty(); },
    get: () => capacity,
    enumerable: false
  });

  function deleteLeastUsedProperty() {
    delete cacheObj[usedPropertiesHistory.splice(0, 1)];
  }

  Object.defineProperty(cacheObj, 'cache', {
    get: () => {
      return (property, value) => {
        if (cacheObj.size === cacheObj.capacity && usedPropertiesHistory.length > 0)
          deleteLeastUsedProperty();

        setProperty(property, value);
        return cacheObj;
      }
    },
    enumerable: false
  });

  Object.defineProperty(cacheObj, 'delete', {
    get: () => {
      return (property) => {
        if (property !== 'delete') return delete cacheObj[property];
        return false;
      }
    },
    enumerable: false,
  });

  return cacheObj;
}


export default LRUCache;