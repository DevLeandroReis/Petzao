import { useMemo, useState } from 'react'
import { CartContext } from './cartContext'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (p) => {
    setItems(prev => {
      const found = prev.find(i => i.id === p.id)
      if (found) return prev.map(i => i.id===p.id ? { ...i, qty: i.qty+1 } : i)
      return [...prev, { ...p, qty: 1 }]
    })
  }
  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id))
  const addQty = (id) => setItems(prev => prev.map(i => i.id===id?{...i, qty:i.qty+1}:i))
  const subQty = (id) => setItems(prev => prev.map(i => i.id===id?{...i, qty: Math.max(1, i.qty-1)}:i))
  const clear = () => setItems([])

  const total = useMemo(() => items.reduce((s,i) => s + i.price*i.qty, 0), [items])
  const totalItems = useMemo(() => items.reduce((s,i)=> s+i.qty, 0), [items])

  const value = { items, addItem, removeItem, addQty, subQty, clear, total, totalItems }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// hook export moved to cartContext.js to keep this file exporting only a component
