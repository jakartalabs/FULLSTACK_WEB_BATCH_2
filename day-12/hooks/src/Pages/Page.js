import React, {useContext} from 'react'
import { ShareContext } from '../components/ShareContext';

export default function Page() {
  const data = useContext(ShareContext);
  if (data.loggedIn === 1) {
    return (
      <div>
        Login
      </div>
    )
  }else{
    return (
      <div>
        Not Login
      </div>
    )
  }
 
}
