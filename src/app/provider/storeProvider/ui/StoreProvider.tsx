import { ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { stateScema } from "../config/stateScema"


interface storeProviderProps {
  children?: ReactNode,
  initialState?:stateScema
}

export const StoreProvider = (props: storeProviderProps) => {

  const { children,initialState } = props

  const store = createReduxStore(initialState)
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}