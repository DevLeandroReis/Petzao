import '../components/layout/layout.css'
import { useLocation } from 'react-router-dom'

export function OrdersPage() {
  const ok = new URLSearchParams(useLocation().search).get('ok')

  return (
    <div className="container">
      <div className="header">
        <div className="title">Meus pedidos</div>
      </div>

      {ok && (
        <div className="card" style={{background: 'rgba(16,185,129,0.15)', borderColor:'rgba(16,185,129,0.4)'}}>
          Pedido realizado! Acompanhe o status aqui.
        </div>
      )}

      <div className="card">
        Você ainda não possui pedidos recentes.
      </div>
    </div>
  )
}
