import { pushTarget, popTarget } from './dep';

export default class Watcher {
  constructor(getter, options = {}) {
    const { watch, callback } = options;

    this.getter = getter;
    this.watch = watch;
    this.callback = callback;

    this.get();
  }

  get() {
    pushTarget(this);
    this.value = this.getter();
    popTarget();
    return this.value;
  }

  update() {
    if (this.watch) {
      const oldValue = this.value;
      this.get();
      return this.callback(oldValue, this.value);
    }
    this.get();
  }
}
