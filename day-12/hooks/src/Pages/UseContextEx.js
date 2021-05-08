import React, {useContext} from 'react'
import Page from './Page';
import {ShareContext} from '../components/ShareContext';

function UseContextEx() {
 
  return (
    <div>
      <ShareContext.Provider value={{
        loggedIn: 1
        }}>
        <Page/>
      </ShareContext.Provider>
      UseContextEx
    </div>
  )
}

export default UseContextEx
