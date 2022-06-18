//1
function makeObjectDeepCopy(obj){
  const clone = {};
  for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                 if (obj[key] instanceof Array) {clone[key] = obj[key].slice();}
                 else if (obj[key] instanceof Date) clone[key] = new Date(obj[key]);
                 else clone[key] = obj[key];
            }
            else clone[key] = obj[key];
        }
    }
    return clone;
}


//2
function selectFromInterval(arr, a, b) {
  if (!Array.isArray(arr)) {
      throw new Error('Ошибка!');
  }

  if (isNaN(a)) {
      throw new Error('Ошибка!');
  }

  if (isNaN(b)) {
      throw new Error('Ошибка!');
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
