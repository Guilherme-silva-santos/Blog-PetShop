import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/about'
import Page404 from './pages/Page404'
import Cabecalho from './Coponents/cabecalho'

function App() {

  return (
  <Router>
    <Cabecalho/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About />}/>
        <Route path='*' element={<Page404/>}/>
        </Routes>
    </Router> 
)
} 

// Router são as rotas que o navegador vai seguir 
// Route envelopa cada componente, e cada um dos componentes envelopado é uma rota 
// exact para exibir apenas um componente em cada página
//Routes para que o react renderize a pagina sem que fique rocurando em outros lugares



export default App
