import * as React from 'react';
import { NAME } from '@/utils/const';

interface Iprops {
    value: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const Counter: React.FC<Iprops> = ({value, onIncrement, onDecrement}: Iprops) => {
    return (
        <div>
            <p> {NAME} click {value} times</p>
            <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
            <button onClick={ onDecrement }> - </button>
        </div>
    )
}


export default Counter;