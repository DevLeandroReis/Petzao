import '../components/layout/layout.css'
import { useCart } from '../state/cartContext'
import { Link } from 'react-router-dom'

export function CartPage() {
  const { items, total, removeItem, addQty, subQty } = useCart()

  return (
    <div className="container">
      <div className="header">
        <div className="title">Carrinho</div>
      </div>
      {items.length === 0 ? (
        <div className="card">Seu carrinho está vazio.</div>
      ) : (
        <>
          <div className="list">
            {items.map(it => (
              <div key={it.id} className="card" style={{display:'flex',alignItems:'center',gap:12}}>
                <img src={it.image} alt="produto" style={{width:64,height:64,borderRadius:12,objectFit:'cover'}} />
                <div style={{flex:1}}>
                  <div style={{fontWeight:700}}>{it.name}</div>
                  <div className="badge">{it.storeName}</div>
                  <div style={{display:'flex',alignItems:'center',gap:8,marginTop:6}}>
                    <button className="btn ghost" onClick={() => subQty(it.id)}>-</button>
                    <span>{it.qty}</span>
                    <button className="btn ghost" onClick={() => addQty(it.id)}>+</button>
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontWeight:700}}>R$ {(it.price*it.qty).toFixed(2)}</div>
                  <button className="btn ghost" onClick={() => removeItem(it.id)}>Remover</button>
                </div>
              </div>
            ))}
          </div>
          <hr className="sep" />
          <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span>Total</span>
            <strong>R$ {total.toFixed(2)}</strong>
          </div>
          <div style={{height:12}} />
          <Link className="btn" to="/checkout">Continuar</Link>
        </>
      )}
    </div>
  )
}
