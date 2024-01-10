import React, {useState, createContext} from 'react'

export const Context = createContext()

function UseContext({children}) {
    const [dark, setDark] = useState(false)
  return (
    <div>
        <Context.Provider value={{dark, setDark}}>
          {children}
        </Context.Provider>
    </div>
  )
}

export default UseContext