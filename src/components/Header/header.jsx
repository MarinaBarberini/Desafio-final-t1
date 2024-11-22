import Logo from "../../assets/logo.png"
import busca from "../../assets/busca.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Doados from '../../Pages/Doados/Doados'
import Inicio from '../../Pages/Inicio/Inicio'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import S from "./header.module.scss"
 
export default function header(){
    return(
    <BrowserRouter>
    <header>
            <section className={S.boxLogo}>
            <img src={Logo} alt="Imagem de um livro"></img>
            <h1>Livros vai na web!</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/Inicio">Inicio</Link></li>
                    <li><Link to="/Doados">Livros doados</Link></li>
                    <li><Link to="/QueroDoar">Quero doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
            <input type="text" placeholder="O que você procura?"/>
            <img src={busca} alt="Lupa"></img>
            </div>
        </header>
        <Routes>
        <Route path='Inicio/' element={<Inicio/>}/>
        <Route path='Doados/' element={<Doados/>}/>
        <Route path='QueroDoar/' element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}