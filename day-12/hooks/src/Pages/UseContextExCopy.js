import React, {useContext} from 'react'
import Page from './Page';
import {ShareContext} from '../components/ShareContext';

function UseContextExCopy() {
 
  return (
    <div>
      <ShareContext.Provider value={{
        loggedIn: 2
        }}>
        <Page/>
      </ShareContext.Provider>
      UseContextEx
    </div>
  )
}

export default UseContextExCopy
