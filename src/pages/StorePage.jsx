import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import '../components/layout/layout.css'
import { getStore, listStoreProducts } from '../services/mockApi'
import { ProductCard } from '../ui/ProductCard'

export function StorePage() {
  const [params] = useSearchParams()
  const id = params.get('id') || '1'
  const [store, setStore] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getStore(id).then(setStore)
    listStoreProducts(id).then(setProducts)
  }, [id])

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))), [products])

  if (!store) return <div className="container">Carregando...</div>

  return (
    <div className="container">
      <div className="header">
        <div>
          <div className="title">{store.name}</div>
          <div className="subtitle">{store.category} • {store.distance} km</div>
        </div>
        <Link className="btn ghost" to="/">Voltar</Link>
      </div>

      <div className="grid cols-3" style={{marginBottom:10}}>
        {categories.map(c => (
          <span key={c} className="card" style={{textAlign:'center'}}>{c}</span>
        ))}
      </div>

      <div className="list">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
