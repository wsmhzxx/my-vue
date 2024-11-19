import { observe } from "./observer/index";

export function initState(vm) {
    // vm.$options
    const opts = vm.$options;
    if (opts.props) {
        initProps(vm);
    }
    if (opts.methods) {
        initMehods(vm);
    }
    if (opts.data) {
        initData(vm);
    }
    if (opts.computed) {
        initComputed(vm);
    }
    if (opts.watch) {
        initWatch(vm);
    }
}

function initProps() {

}
function initMehods() {

}
function initData(vm) {
    // 数据的初始化
    let data = vm.$options.data;
    vm._data = data = typeof data === 'function' ? data.call(vm) : data;

    // 数据的劫持方案 对象Object.defineProperty
    // 数组 单独处理的
    observe(data)
}
function initComputed() {

}
function initWatch() {

}