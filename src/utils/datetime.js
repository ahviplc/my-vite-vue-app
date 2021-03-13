// es6
// Cannot use import statement outside a module
// 在模块外部使用import语句，因为Module 的加载实现的是es6语法，
// 所以在浏览器加载html文件时，需要在script 标签中加入type="module"属性
export function nowTime(){
    return new Date()
}
