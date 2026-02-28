# Daniel LZ — Site M.I.D.A.S

## 🚀 Deploy Rápido

### Para a Manus (ou qualquer plataforma):

```bash
# 1. Instalar dependências
npm install

# 2. Build de produção
npm run build

# 3. Hospedar a pasta "dist/" gerada
```

A pasta `dist/` é o site final estático — basta hospedar ela em qualquer servidor.

### Para rodar local (desenvolvimento):

```bash
npm install
npm run dev
```

---

## 📁 Estrutura do Projeto

```
daniellz-site/
├── index.html          ← Entry point (fontes, meta tags, favicon)
├── package.json        ← Dependências e scripts
├── vite.config.js      ← Config do Vite
├── public/
│   └── favicon.svg     ← Ícone da aba
└── src/
    ├── main.jsx        ← Renderiza o React
    └── App.jsx         ← Todo o site (componente principal)
```

## 🛠 Tecnologias

- **React 18** — Interface
- **Framer Motion** — Animações
- **Three.js** — Background neural 3D
- **Vite** — Build ultrarrápido
- **Google Fonts** — Barlow Condensed, DM Sans, Share Tech Mono
