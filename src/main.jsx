//REACT
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
//PAGINAS
import './index.css'
import Inicio from './Pages/Inicio/Inicio.jsx'
import ApoioEDireitos from './Pages/Apoio-e-direitos/Apoio-e-direitos.jsx'
import AposDenuncia from './Pages/Apos-a-denuncia/Apos-a-denuncia.jsx'
import CanaisDenuncia from './Pages/Canais-de-denuncia/Canais-de-denuncia.jsx'
//COMPONENTS
import Navbar from './Components/Nav/Nav.jsx'
import Footer from "./Components/Footer/Footer.jsx";
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/apoio-e-direitos" element={<ApoioEDireitos />} />
                <Route path="/apos-a-denuncia" element={<AposDenuncia />} />
                <Route path="/canais-de-denuncia" element={<CanaisDenuncia />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </StrictMode>
)