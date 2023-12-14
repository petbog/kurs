import React, { useState } from "react"
import s from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className={s.counter}>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}