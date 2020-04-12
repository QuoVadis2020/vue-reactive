# vue-reactive

data里的值发生改变,相关节点的innerHTML需更新,于是引入了Watcher的概念.

在reactive中通过defineProperty来劫持get set,更新后将相关渲染函数收集/触发,Dep.target来找到对应渲染函数的Watcher.

在嵌套组件中,每个组件都有自己的Watcher,那么运行的轨迹也要遵从入栈出栈.

实现了vue的响应式以及watch api
computed还是懵的没啃明白...应该也差不多吧 哈哈
