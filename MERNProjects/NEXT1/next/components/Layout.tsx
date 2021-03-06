import React from 'react'
import { Header } from "./"
type Props = {
    children?: React.ReactNode
  };

const Layout = ( {children}:Props ) => {
  return (
    <>
        <Header></Header>
        {children}
    </>
  )
}

export default Layout