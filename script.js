//1
makeObjectDeepCopy = function(obj) {
    if (obj == null || typeof obj !== 'object') {
        return obj;
    }
  
    if (obj instanceof Date) { return new Date(obj); }
    if (obj instanceof String) { return new String(obj); }
    if (obj instanceof Number) { return new Number(obj); }
    if (obj instanceof Boolean) { return new Boolean(obj); }
    if (obj instanceof RegExp) { return new RegExp(obj); }
  
  
    var clone = {};
    if (obj instanceof Array) {
        clone = new Array(obj.length);
    }
  
    for (var key in obj) {
        if (typeof obj[key] === 'function') {
            const that = obj[key];
            let temp = function temporary() { return that.apply(this, arguments); };
            
            for(let k in obj[key]) {
                if (this.hasOwnProperty(k)) {
                    temp[k] = obj[key][k];
                }
            }
            
            clone[key] = temp;
            continue;
        }
        
        clone[key] = makeObjectDeepCopy(obj[key]);
    }
  
    return clone;
};


//2
function selectFromInterval(arr, a, b) {
  if (!Array.isArray(arr)) {
      throw new Error('Ошибка! Первый аргумент невалидный');
  }

  if (isNaN(a)) {
      throw new Error('Ошибка! Второй аргумент невалидный');
  }

  if (isNaN(b)) {
      throw new Error('Ошибка! Третий аргумент невалидный');
  }

  if (b < a) {
      const temp = a;
      a = b;
      b = temp;
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
          throw new Error('Ошибка!');
      }

      if (arr[i] >= a && arr[i] <= b) {
          result.push(arr[i]);
      }
  }

  return result;
}


//3

const myIterable = {
  from: '',
  to: '',

  [Symbol.iterator]() {
      if (this.form === null || this.to === null) {
          throw new Error('Ошибка!');
      }

      if (isNaN(this.from) || this.from === '' || this.from === []) {
          throw new Error('Ошибка!');
      }

      if (isNaN(this.to) || this.to === '' || this.to === []) {
          throw new Error('Ошибка!');
      }

      if (this.from > this.to) {
          throw new Error('Ошибка!');
      }

      this.current = this.from;
      return this;
  },

  next() {
      if (this.current <= this.to) {
          return {done: false, value: this.current++};
      } else {
          return {done: true};
      }
  }
};
