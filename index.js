import { reactive, Watcher, watch } from './src/index';

const data = reactive({
  msg: 'Hello World'
});


new Watcher(() => {
  document.getElementById('app').innerHTML = `msg is ${data.msg}`;
});

watch(
  () => data.msg,
  (old, newVal) => {
    console.log('old: ', old);
    console.log('newVal: ', newVal);
  }
);

window.data = data;
