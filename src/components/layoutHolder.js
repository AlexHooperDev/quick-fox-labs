import React from 'react';
import Layout from './layout'
import { ModalContextProvider } from './PopupState';

export default function LayoutHolder({ children }) {
  return (
    < ModalContextProvider >
      <Layout>
        {children}
      </Layout>
    </ModalContextProvider>
  )
}