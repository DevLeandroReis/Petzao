import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { StorePage } from './pages/StorePage'
import { SearchPage } from './pages/SearchPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { ProfilePage } from './pages/ProfilePage'
import { AppProviders } from './providers/AppProviders'

export default function App() {
  return (
    <AppProviders>
  {/* basename garante que as rotas funcionem em /Petzao/ no GitHub Pages */}
  <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<AppLayout />}> 
            <Route index element={<HomePage />} />
            <Route path="/lojas" element={<StorePage />} />
            <Route path="/busca" element={<SearchPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/pedidos" element={<OrdersPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
