import React, { useState } from 'react'

export const PopupContext = React.createContext({
  setLanguage: () => { },
  modal: '',
})

export const PopupContextProvider = (props) => {

  const setLanguage = (isModal) => {
    setState({ ...state, modal: isModal })
  }

  const initState = {
    setLanguage: setLanguage,
    modal: false
  }

  const [state, setState] = useState(initState);

  return (
    <PopupContext.Provider value={state}>
      {props.children}
    </PopupContext.Provider>
  )
}