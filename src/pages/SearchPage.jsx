import { useEffect, useMemo, useState } from 'react'
import '../components/layout/layout.css'
import { searchAll } from '../services/mockApi'
import { ProductCard } from '../ui/ProductCard'
import { Link } from 'react-router-dom'

export function SearchPage() {
  const [q, setQ] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const t = setTimeout(() => {
      if (q.trim()) searchAll(q).then(setResults)
      else setResults([])
    }, 250)
    return () => clearTimeout(t)
  }, [q])

  const has = useMemo(() => ({ products: results.filter(r => r.type==='product'), stores: results.filter(r => r.type==='store') }), [results])

  return (
    <div className="container">
      <div className="header">
        <div className="title">Buscar</div>
      </div>
      <input className="input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Ração, banho e tosa, agro..." autoFocus />
      {q && (
        <div className="badge">{results.length} resultados</div>
      )}
      <div className="list" style={{marginTop:10}}>
        {has.stores.length>0 && <div className="subtitle">Lojas</div>}
        {has.stores.map(s => (
          <Link key={s.id} to={`/lojas?id=${s.id}`} className="card" style={{textDecoration:'none', color:'inherit'}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <img src={s.logo} alt="logo" style={{width:40,height:40,borderRadius:10,objectFit:'cover'}} />
              <div>
                <div style={{fontWeight:700}}>{s.name}</div>
                <div className="badge">{s.category}</div>
              </div>
            </div>
          </Link>
        ))}
        {has.products.length>0 && <div className="subtitle">Produtos</div>}
        {has.products.map(p => (
          <ProductCard key={p.id} product={p.data} />
        ))}
      </div>
    </div>
  )
}
