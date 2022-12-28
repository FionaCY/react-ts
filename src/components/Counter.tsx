import * as React from 'react';
import { NAME } from '../utils/const'

// 创建类型接口
export interface Iprops {
    value: number
}

// 使用接口代替propTypes进行类型校验
const Counter = ({ value }: Iprops) => {
    return <p> {NAME} click {value} times</p>
}


export default Counter;