import { useEffect, useState } from 'react'
import '../components/layout/layout.css'
import { listFeaturedStores, listPromos, listCategories } from '../services/mockApi'
import { Link } from 'react-router-dom'
import { useUser } from '../state/userContext'
import { Stars } from '../ui/Stars'

export function HomePage() {
  const [stores, setStores] = useState([])
  const [promos, setPromos] = useState([])
  const [categories, setCategories] = useState([])
  const { user } = useUser()
  const [openMenu, setOpenMenu] = useState(false)
  const [cat, setCat] = useState('t')
  const [storeFilter, setStoreFilter] = useState('Todas')

  useEffect(() => {
  listFeaturedStores().then(setStores)
  listPromos().then(setPromos)
  listCategories().then(setCategories)
  }, [])

  // filtros de lojas
  const storeFilters = ['Todas','Frete grátis','Últimas adicionadas']

  const filteredStores = stores.filter(s => {
    const catOk = cat==='t' ? true : (s.tags||[]).includes(cat)
    const shipOk = storeFilter==='Frete grátis' ? !!s.freeShipping : true
    const lastOk = storeFilter==='Últimas adicionadas' ? (Date.now()-s.createdAt) < 1000*60*60*24*3 : true
    return catOk && shipOk && lastOk
  })

  return (
    <div className="container">
      {/* Topbar com menu e filtro compacto */}
      <div className="topbar">
        <div className="row">
          <button className="iconbtn" onClick={()=>setOpenMenu(true)} aria-label="Abrir menu">≡</button>
          <input className="input filter-input" placeholder={`Buscar perto de você, ${user?.name||'cliente'}...`} />
        </div>
      </div>

  {/* Banners de promo (sem título) - primeiro */}
  <div className="banners scroll-hint">
        {promos.map(pm => (
          <div key={pm.id} className="banner-card">
            <img src={pm.image} alt="Promoção" onError={(e)=>{e.currentTarget.src='https://placehold.co/600x280?text=Promo'}} />
          </div>
        ))}
      </div>

  {/* Categorias principais */}
  {/* Categorias como filtro das lojas (carrossel com ícone e label) */}
  <div className="hscroll scroll-hint">
        {categories.map(cg => (
          <div key={cg.id} className={`category-card ${cat===cg.id?'active':''}`} onClick={()=>setCat(cg.id)}>
            {renderCategoryIcon(cg.id)}
            <div className="label">{cg.name}</div>
          </div>
        ))}
      </div>

      {/* Filtros de lojas (abaixo das categorias) */}
      <div className="chips">
        {storeFilters.map(sf => (
          <button key={sf} className={`chip ${storeFilter===sf?'active':''}`} onClick={()=>setStoreFilter(sf)}>{sf}</button>
        ))}
      </div>

      {/* Lojas com estrelas (uma por linha) */}
      <div className="list">
        {filteredStores.map(s => (
          <Link key={s.id} to={`/lojas?id=${s.id}`} className="card" style={{textDecoration:'none', color:'inherit'}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <img src={s.logo} alt="logo" onError={(e)=>{e.currentTarget.src='https://placehold.co/80x80?text=Loja'}} style={{width:48,height:48,borderRadius:12,objectFit:'cover'}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:700}}>{s.name}</div>
                <div className="badge">{s.category} • {s.distance} km</div>
                <div style={{marginTop:4}}><Stars value={s.rating||4.5} /></div>
              </div>
              {s.freeShipping && <span className="badge" style={{color:'#16a34a'}}>Frete grátis</span>}
            </div>
          </Link>
        ))}
      </div>

      {/* Drawer simples (placeholder) */}
      {openMenu && (
        <>
          <div className="drawer open">
            <div style={{fontWeight:800, fontSize:18, marginBottom:8}}>Menu</div>
            <div className="badge">Olá{user?.name?`, ${user.name}`:''}</div>
            <hr className="sep" />
            <button className="btn ghost" onClick={()=>setOpenMenu(false)}>Fechar</button>
          </div>
          <div className="drawer-backdrop" onClick={()=>setOpenMenu(false)} />
        </>
      )}
    </div>
  )
}

// Ícones de categorias (cor herdada via CSS: .category-card svg { color: var(--brand) })
function CategoryIconAll() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20"/>
    </svg>
  )
}
function CategoryIconPet() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
      <circle cx="5" cy="8" r="2"/><circle cx="9" cy="5" r="2"/><circle cx="15" cy="5" r="2"/><circle cx="19" cy="8" r="2"/>
      <path d="M6 15c0-3 3-5 6-5s6 2 6 5-2.239 5-6 5-6-2-6-5z"/>
    </svg>
  )
}
function CategoryIconAgro() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 6-4 10-10 10 6 0 10 4 10 10 0-6 4-10 10-10-6 0-10-4-10-10z"/>
    </svg>
  )
}

function renderCategoryIcon(id) {
  switch(id) {
    case 't':
      return <CategoryIconAll />
    case 'petshop':
      return <CategoryIconPet />
    case 'agro':
      return <CategoryIconAgro />
    case 'racao':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20h16M7 20V8a5 5 0 0110 0v12"/>
        </svg>
      )
    case 'banho':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10h18M5 10V6a3 3 0 016 0v4"/>
          <circle cx="8" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>
        </svg>
      )
    case 'veterinario':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21V3M7 8l5-5 5 5"/>
        </svg>
      )
    case 'higiene':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="12" rx="2"/>
          <path d="M7 8V6a2 2 0 114 0v2"/>
        </svg>
      )
    case 'acessorios':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><path d="M11 12h2"/>
        </svg>
      )
    case 'remedios':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="8" rx="2"/>
          <path d="M12 8v8M8 12h8"/>
        </svg>
      )
    case 'pesca':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8a4 4 0 108 0V6"/>
          <circle cx="6" cy="14" r="2"/>
        </svg>
      )
    default:
      return <CategoryIconAll />
  }
}
