
// 拿到数组原型上的方法（原来的方法）
let oldArrayProtoMethods = Array.prototype;

// 继承一下
export let arrayMethods = Object.create(oldArrayProtoMethods);

let methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'sort',
    'splice'
]

methods.forEach(method => {
    arrayMethods[method] = function(...args) {
        // this就是observer里的value
        const result = oldArrayProtoMethods[method].apply(this, arguments)
        let inserted;
        let ob = this.__ob__;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice': //vue.$set原理
                inserted = args.slice(2);
            default:
                break;
        }
        if(inserted) {
            ob.observeArray(inserted); // 给数组新增的值也要进行观测
        }

        return result;
    }
})