import { Button } from "app/shered/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/Slice/counterSlice"
import { gitCunterValue } from "../model/Selector/gitCunterValue/gitCunterValue"


export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(gitCunterValue)

  const handleIncrement = () => {
    dispatch(counterActions.increment)
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement)
  }

  return (
    <>
      <div className="">{counterValue}</div>
      <Button onClick={handleIncrement}>increment</Button>
      <Button onClick={handleDecrement}>decrement</Button>
    </>

  )
}