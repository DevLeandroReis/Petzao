import { useState } from 'react'
import { UserContext } from './userContext'

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Cliente', phone: '', address: '' })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// hook export moved to userContext.js
