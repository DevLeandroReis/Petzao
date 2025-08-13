export const CATEGORIES = [
  { id: 't', name: 'Todas', relevance: 100 },
  { id: 'racao', name: 'Ração', relevance: 95 },
  { id: 'banho', name: 'Banho e tosa', relevance: 90 },
  { id: 'petshop', name: 'Pet Shop', relevance: 85 },
  { id: 'veterinario', name: 'Veterinário', relevance: 80 },
  { id: 'higiene', name: 'Higiene', relevance: 75 },
  { id: 'acessorios', name: 'Acessórios', relevance: 70 },
  { id: 'remedios', name: 'Remédios', relevance: 65 },
  { id: 'agro', name: 'Agropecuária', relevance: 60 },
  { id: 'pesca', name: 'Pesca', relevance: 55 },
]

const STORES = [
  { id: '1', name: 'Agro Pet Center', category: 'Pet Shop', tags:['petshop','racao','higiene','acessorios'], distance: 1.2, rating: 4.7, freeShipping: true, createdAt: Date.now()-1000*60*60*24*2, logo: 'https://images.unsplash.com/photo-1558907534-59aa4fd2dbe5?q=80&w=200&auto=format&fit=crop' },
  { id: '2', name: 'Fazendinha Agro', category: 'Agropecuária', tags:['agro','racao','remedios'], distance: 2.8, rating: 4.4, freeShipping: false, createdAt: Date.now()-1000*60*60*24*7, logo: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=200&auto=format&fit=crop' },
  { id: '3', name: 'Casa do Pet', category: 'Pet Shop', tags:['petshop','banho','higiene','acessorios'], distance: 1.8, rating: 4.9, freeShipping: true, createdAt: Date.now()-1000*60*60*8, logo: 'https://images.unsplash.com/photo-1601758124515-7f362fcdcf57?q=80&w=200&auto=format&fit=crop' },
  { id: '4', name: 'Vet Saúde', category: 'Clínica', tags:['veterinario','remedios'], distance: 3.1, rating: 4.8, freeShipping: false, createdAt: Date.now()-1000*60*60*24*1, logo: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=200&auto=format&fit=crop' },
  { id: '5', name: 'Mundo da Pesca', category: 'Pesca', tags:['pesca','acessorios'], distance: 4.2, rating: 4.3, freeShipping: false, createdAt: Date.now()-1000*60*60*24*5, logo: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=200&auto=format&fit=crop' },
  { id: '6', name: 'Pet Delivery', category: 'Pet Shop', tags:['petshop','racao','banho','higiene'], distance: 0.9, rating: 4.6, freeShipping: true, createdAt: Date.now()-1000*60*60*12, logo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=200&auto=format&fit=crop' },
  { id: '7', name: 'Fazenda Feliz', category: 'Agropecuária', tags:['agro','racao','remedios'], distance: 3.7, rating: 4.1, freeShipping: false, createdAt: Date.now()-1000*60*60*72, logo: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=200&auto=format&fit=crop' },
  { id: '8', name: 'Agro & Pesca', category: 'Agro/Pesca', tags:['agro','pesca','acessorios'], distance: 5.0, rating: 4.0, freeShipping: false, createdAt: Date.now()-1000*60*60*6, logo: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=200&auto=format&fit=crop' },
  { id: '9', name: 'Pet & Fish Market', category: 'Pet/Pesca', tags:['petshop','pesca','racao'], distance: 2.3, rating: 4.5, freeShipping: true, createdAt: Date.now()-1000*60*60*30, logo: 'https://images.unsplash.com/photo-1534367610401-9f7e0af1f6e0?q=80&w=200&auto=format&fit=crop' },
  { id: '10', name: 'Pet Farma', category: 'Farmácia Pet', tags:['remedios','petshop','higiene'], distance: 1.5, rating: 4.6, freeShipping: false, createdAt: Date.now()-1000*60*60*20, logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=200&auto=format&fit=crop' },
]

const PRODUCTS = [
  { id: 'r1', storeId: '1', storeName: 'Agro Pet Center', name: 'Ração Premium 10kg', price: 129.9, category: 'Rações', image: 'https://images.unsplash.com/photo-1640710008783-1963608f5f3b?q=80&w=300&auto=format&fit=crop' },
  { id: 'r2', storeId: '1', storeName: 'Agro Pet Center', name: 'Areia Higiênica 12kg', price: 49.9, category: 'Higiene', image: 'https://images.unsplash.com/photo-1583331284904-49d9c849cbd7?q=80&w=300&auto=format&fit=crop' },
  { id: 'a1', storeId: '2', storeName: 'Fazendinha Agro', name: 'Suplemento Bovino 20kg', price: 199.9, category: 'Rações', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=300&auto=format&fit=crop' },
  { id: 'a2', storeId: '2', storeName: 'Fazendinha Agro', name: 'Vacina Aftosa', price: 39.9, category: 'Saúde', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=300&auto=format&fit=crop' },
]

const delay = (ms) => new Promise(r => setTimeout(r, ms))

export async function listFeaturedStores() {
  await delay(200)
  return STORES
}

export async function listFeaturedProducts() {
  await delay(200)
  // duplicar uma pequena lista para gerar mais itens na vitrine
  const base = PRODUCTS
  return [...base, ...base].map((p, idx) => ({ ...p, id: p.id + '_v' + idx }))
}

export async function listCategories() {
  await delay(50)
  return [...CATEGORIES].sort((a,b)=> b.relevance - a.relevance)
}

export async function listPromos() {
  await delay(150)
  return [
    { id: 'p1', image: 'https://images.unsplash.com/photo-1601758260975-6ec2ef64a1c9?q=80&w=600&auto=format&fit=crop' },
    { id: 'p2', image: 'https://images.unsplash.com/photo-1516729899514-63b2671af8eb?q=80&w=600&auto=format&fit=crop' },
    { id: 'p3', image: 'https://images.unsplash.com/photo-1604908554008-0d6d4aa76a6a?q=80&w=600&auto=format&fit=crop' },
  ]
}

export async function getStore(id) {
  await delay(100)
  return STORES.find(s => s.id === id)
}

export async function listStoreProducts(id) {
  await delay(200)
  return PRODUCTS.filter(p => p.storeId === id)
}

export async function searchAll(q) {
  await delay(150)
  const query = q.toLowerCase()
  const stores = STORES.filter(s => s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query))
  const products = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query))
  return [
    ...stores.map(s => ({ type: 'store', ...s })),
    ...products.map(p => ({ type: 'product', data: p })),
  ]
}
