import { Outlet, NavLink } from 'react-router-dom'
import './layout.css'
import { useCart } from '../../state/cartContext'

export function AppLayout() {
  const { totalItems } = useCart()

  return (
    <div className="app-shell">
      <main className="content">
        <Outlet />
      </main>
      <nav className="tabbar" aria-label="Navegação principal">
        <NavLink to="/" end className={({isActive}) => isActive ? 'tab active' : 'tab'}>
          <span>Home</span>
        </NavLink>
        <NavLink to="/lojas" className={({isActive}) => isActive ? 'tab active' : 'tab'}>
          <span>Lojas</span>
        </NavLink>
        <NavLink to="/busca" className={({isActive}) => isActive ? 'tab active' : 'tab'}>
          <span>Buscar</span>
        </NavLink>
        <NavLink to="/carrinho" className={({isActive}) => isActive ? 'tab active' : 'tab'}>
          <span>Carrinho{totalItems > 0 ? ` (${totalItems})` : ''}</span>
        </NavLink>
        <NavLink to="/perfil" className={({isActive}) => isActive ? 'tab active' : 'tab'}>
          <span>Perfil</span>
        </NavLink>
      </nav>
    </div>
  )
}
