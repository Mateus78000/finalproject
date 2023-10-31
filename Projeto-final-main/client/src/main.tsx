import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './templates/Login'
import Home from './templates/Home'
import Signup from './templates/SignUp'
import NotFound from './templates/NotFound'
import './main.css'
/* importa arquivos de pastas para utilizar neste código, inclusive as rotas */

const root = document.getElementById('root')!
/* pega a div "root" do index.html para renderizar a página */

ReactDOM.createRoot(root).render(
  /* ReactRouter cria várias rotas no servidor, que podem provenir serviços http
cada rota dando ao usuario acesso a diferentes arquivos HTML e TSX */
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/signup' Component={Signup} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
