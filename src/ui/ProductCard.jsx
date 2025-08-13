import { useCart } from '../state/cartContext'

export function ProductCard({ product }) {
  const { addItem } = useCart()

  const onErr = (e) => { e.currentTarget.src = 'https://placehold.co/136x136?text=Produto' }
  return (
    <div className="card" style={{display:'flex',gap:12,alignItems:'center'}}>
      <img src={product.image} alt={product.name} onError={onErr} style={{width:96,height:96,borderRadius:12,objectFit:'cover'}} />
      <div style={{flex:1,minWidth:0}}>
        <div className="name" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{product.name}</div>
        <div className="badge" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{product.storeName}</div>
        <div className="price">R$ {product.price.toFixed(2)}</div>
      </div>
      <button className="btn" onClick={() => addItem(product)} style={{whiteSpace:'nowrap'}}>Adicionar</button>
    </div>
  )
}
