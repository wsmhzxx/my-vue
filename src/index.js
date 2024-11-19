// new Vue({})

import { initMixin } from "./init";

// es6的类的写法 一个整体

function Vue(options) {
    this._init(options)
}
// 写成一个个的插件进行对原型的扩展

initMixin(Vue)



// 初始化方法

export default Vue;