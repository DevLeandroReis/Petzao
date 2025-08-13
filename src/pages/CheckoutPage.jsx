import '../components/layout/layout.css'
import { useCart } from '../state/cartContext'
import { useUser } from '../state/userContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CheckoutPage() {
  const { items, total, clear } = useCart()
  const { user, setUser } = useUser()
  const [address, setAddress] = useState(user?.address || '')
  const [payment, setPayment] = useState('pix')
  const navigate = useNavigate()

  function confirm() {
    // Simula pedido
    clear()
    navigate('/pedidos?ok=1')
  }

  return (
    <div className="container">
      <div className="header">
        <div className="title">Checkout</div>
      </div>

      <div className="card">
        <div className="subtitle">Endereço de entrega</div>
        <input className="input" value={address} onChange={e=>setAddress(e.target.value)} placeholder="Rua, número, bairro" />
        <div style={{height:8}} />
        <button className="btn ghost" onClick={()=> setUser({ ...user, address })}>Salvar endereço</button>
      </div>

      <div style={{height:12}} />

      <div className="card">
        <div className="subtitle">Pagamento</div>
        <div style={{display:'flex', gap:8}}>
          <button className={payment==='pix'?'btn':'btn ghost'} onClick={()=>setPayment('pix')}>PIX</button>
          <button className={payment==='card'?'btn':'btn ghost'} onClick={()=>setPayment('card')}>Cartão</button>
          <button className={payment==='cash'?'btn':'btn ghost'} onClick={()=>setPayment('cash')}>Dinheiro</button>
        </div>
      </div>

      <div style={{height:12}} />

      <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span>Total</span>
        <strong>R$ {total.toFixed(2)}</strong>
      </div>

      <div style={{height:12}} />
      <button className="btn" disabled={!address || items.length===0} onClick={confirm}>Confirmar pedido</button>
    </div>
  )
}
