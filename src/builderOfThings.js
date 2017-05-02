class Thing {
  constructor(name) {
    let self = this;
    this.name = name;
    this.can = new Proxy({}, {
        get (target, key) {
          return (str, fn = null) => {
            let oldFn;
            if(typeof str === 'function') fn = str;

            if(typeof str === 'string'){
              oldFn = fn.toString().replace('name', `'${self.name}'`);
              self[str] = [];
              fn = (phrase)=>{ self[str].push( eval(`((${oldFn})('${phrase}'))`) ); };
            }
            self[key] = eval(`(${fn})`)
          }
        }
      }
    );

    this.being_the = this.and_the = new Proxy({}, {
      get (target, key) {
        return new Proxy(this, {
          get(target2, valueToSet){
            self[key] = valueToSet;
            return self;
          }
        })
      }
    });

    this.is_the = new Proxy({}, {
      get (is_the, key) {
        return new Proxy(this, {
          get(target, valueToSet){
            self[key] = valueToSet
          }
        })
      }
    });

    this.is_a = new Proxy({}, {
      get (target, key) {
        self[`is_a_${key.toString()}`] = true;
      }
    });

    this.is_not_a = new Proxy({}, {
      get (target, key) {
        self[`is_a_${key.toString()}`] = false;
      }
    });
  }

  has(num) {
    let self = this;

    let handler = {
      get (target, key) {
        let thingName = key;
        if (key.slice(-1).toLocaleLowerCase() === 's') thingName = key.slice(0, -1);

        if (num === 1)
          target[key] = new Thing(thingName);
        else {

          target[key] = target[key] || [];
          for (let i = 0; i < num; i++) target[key].push(new Thing(thingName))

          Reflect.setPrototypeOf(target[key],
            Object.assign(Reflect.getPrototypeOf(target[key]), {
              each: function (fn) {
                fn = fn.toString().replace('having', `${thingName}.having`);
                fn = fn.toString().replace('being_the', `${thingName}.being_the`);
                target[key].map(eval(`(${fn})`))
              }
            })
          )
        }
        return target[key]
      }
    };
    return new Proxy(this, handler)
  }

  having(num) {
    return this.has(num);
  }
}

export default Thing