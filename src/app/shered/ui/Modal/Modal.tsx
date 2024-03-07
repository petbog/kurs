import { classNames } from "helpers/classNames/classNames"
import cls from './Modal.module.scss'
import { ReactNode, useCallback, useEffect, useRef, useState } from "react"
import { Portal } from "../Portal/Portal"



interface ModalProps {
  className?: string,
  children?: ReactNode,
  isOpen?: boolean,
  onClose?: () => void
}

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const ANIMATION_DELAU = 500

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAU)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }


    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }

  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.isOpened]: isOpen,
    [cls.isClosin]: isClosing
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}


export default Modal