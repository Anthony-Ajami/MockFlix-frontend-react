import React, { FC, ReactNode, useContext, useEffect } from 'react'

const Default: FC<{ children: ReactNode }> = ({ children }) => {

  return (<>
    <div className='container'>
      {children}
    </div>
  </>)
}

export default Default