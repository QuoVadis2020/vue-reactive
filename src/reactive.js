import Dep from './dep';

function isObject(val) {
  return val !== null && typeof val === 'object';
}

export default function reactive(data) {
  if (isObject(data)) {
    Object.keys(data).forEach(key => {
      defineReactive(data, key);
    });
  }
  return data;
}

function defineReactive(data, key) {
  let val = data[key];
  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return val;
    },
    set(newVal) {
      val = newVal;
      dep.notify();
    }
  });

  if (isObject(val)) {
    reactive(val);
  }
}
