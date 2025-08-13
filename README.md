# Petzao

Aplicativo web (Vite + React) inspirado em iFood/IQfome para compra de produtos de PET e Agro. Esta versão implementa a área do cliente com navegação por abas, carrinho, checkout simplificado e mock de dados.

## Funcionalidades
- Home com lojas em destaque e promoções
- Lista de produtos por loja
- Busca unificada por lojas e produtos
- Carrinho com ajuste de quantidade e totalizador
- Checkout com endereço e seleção de pagamento (simulado)
- Meus pedidos (placeholder)
- Perfil do cliente (dados locais)

## Rodar localmente
```powershell
npm i ; npm run dev
```
Abra http://localhost:5173

## Estrutura
- `src/components/layout/` shell mobile e tabbar
- `src/pages/` telas principais
- `src/state/` contextos (cart/user) e hooks
- `src/services/mockApi.js` dados simulados
- `src/ui/` componentes reutilizáveis

## Deploy (GitHub Pages)
- Base do Vite: `/Petzao/`
- Router basename: `import.meta.env.BASE_URL`
- SPA fallback: `public/404.html`

Publicar:
```powershell
npm run build ; npm run deploy
```
Acesse: https://DevLeandroReis.github.io/Petzao/
