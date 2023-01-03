// 定义增加 state 类型常量
export const INCREMENT = "INCREMENT";
export type INCREMENT = typeof INCREMENT;

// 定义减少 state 类型常量
export const DECREMENT = "DECREMENT";
export type DECREMENT = typeof DECREMENT;

// const/type模式允许我们以容易访问和重构的方式使用TypeScript的字符串字面量类型。