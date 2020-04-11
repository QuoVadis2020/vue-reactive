import { reactive, Watcher } from './src/index';

const data = reactive({
  msg: 'Hello World'
});


new Watcher(() => {
  document.getElementById('app').innerHTML = `msg is ${data.msg}`;
});

window.data = data;
