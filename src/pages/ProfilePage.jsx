import '../components/layout/layout.css'
import { useUser } from '../state/userContext'

export function ProfilePage() {
  const { user, setUser } = useUser()

  return (
    <div className="container">
      <div className="header">
        <div className="title">Perfil</div>
      </div>
      <div className="card">
        <div className="subtitle">Seus dados</div>
        <input className="input" placeholder="Nome" value={user?.name||''} onChange={e=>setUser({...user, name:e.target.value})} />
        <div style={{height:8}} />
        <input className="input" placeholder="Telefone" value={user?.phone||''} onChange={e=>setUser({...user, phone:e.target.value})} />
        <div style={{height:8}} />
        <input className="input" placeholder="Endereço" value={user?.address||''} onChange={e=>setUser({...user, address:e.target.value})} />
      </div>

      <div style={{height:12}} />

      <button className="btn">Salvar</button>
    </div>
  )
}
