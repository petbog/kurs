import { classNames } from 'helpers/classNames/classNames'
import cls from './BugButton.module.scss'
import { useEffect, useState } from 'react'



interface BugButtonProps {
  className?: string
}
//компонент для тестирования
const BugButton = ({ className }: BugButtonProps) => {

  const [newErroor, setNewError] = useState(false)

  const throwError = () => setNewError(true)

  useEffect(() => {
    if (newErroor) {
      throw new Error()

    }

  }, [newErroor])


  return (
    <button onClick={throwError} className={classNames(cls.BugButton, {}, [className])}>
      throw Error
    </button>
  )
}


export default BugButton