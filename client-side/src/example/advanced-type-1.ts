// 交叉类型 &
// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//     let res = {} as T & U // 设置交叉类型
//     res = Object.assign(arg1, arg2)
//     return res
// }
// mergeFunc({ a: 'a' }, { b: 'b' }) //{a: "a", b: "b"}

// 联合类型 |
// const getLengthFunc = (content: string | number): number => {
//     if (typeof content === 'string') {
//         return content.length
//     } else {
//         return content.toString().length
//     }
// }
// boolean(getLengthFunc(123)) // 3
// boolean(getLengthFunc('abcde')) // 5
// boolean(getLengthFunc(true)) // error: 没有boolean类型

// 类型保护
const valueList = [123, 'abc']
const getRandomValue = () => {
    const number = Math.random() * 10
    if (number < 5) { return valueList[0] }
    else { return valueList[1] }
}
const item = getRandomValue()
console.log(item) // 随机输出123 或者 abc

// 因为item无法确定是string类型 还是number类型 所以ts中会报错
// if (item.length) {
//     console.log(item.length);
// } else {
//     console.log(item.toFixed());
// }
// 解决方案有两种
// 1.使用类型断言：(item as string).length
// 缺点：多处使用 比较繁琐 不方便
// if ((item as string).length) {
//     console.log((item as string).length);
// } else {
//     console.log((item as number).toFixed());
// }

// 2.使用类型保护
// a.简单的可以直接用typeof 来判断
// 使用typeof=== 有俩条件：
//   1)、只能使用 等或者不等来判断
//   2)、只能是string/number/boolean/symbol类型中的一种

if (typeof item === 'string') {
    console.log(item.length); // string
} else {
    console.log(item.toFixed()); // 不是string 自动判断number
}
if (typeof item === 'Object'){ } // 不是上面四种类型 会报错


// b.复杂点的类型可以定义一个方法来判断
function isString(value: number | string): value is string {
    return typeof value === 'string'
}
if (isString(item)) {
    console.log(item.length); // string
} else {
    console.log(item.toFixed()); // 不是string 自动判断number
}




// null和undefined
// 类型保护和类型断言
// 类型别名
// 字面量类型
// 枚举成员类型
// 可辨识联合