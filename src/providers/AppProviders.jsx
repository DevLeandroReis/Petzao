import { CartProvider } from '../state/cart'
import { UserProvider } from '../state/user'

export function AppProviders({ children }) {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  )
}
