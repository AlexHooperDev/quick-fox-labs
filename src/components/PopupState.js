import React, { useState, useEffect } from 'react'

export const ModalContext = React.createContext({
  modal: false,
  setModal: () => { }
})

export const ModalContextProvider = (props) => {

  const setModal = (isModal) => {
    console.log('setting state to true');
    setState({ ...state, modal: isModal });
  }

  const setCookieConsent = () => {
    setState({ ...state, cookieConsent: true });
    localStorage.setItem('gdpr', 'true');
  }

  const initState = {
    modal: false,
    setModal: setModal,
    cookieConsent: false,
    setCookieConsent: setCookieConsent
  }

  const [state, setState] = useState(initState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <ModalContext.Provider value={state}>
      {props.children}
    </ModalContext.Provider>
  )
}