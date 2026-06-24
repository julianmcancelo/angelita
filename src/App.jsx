import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Escuchar from './components/Escuchar/Escuchar'
import Shows from './components/Shows/Shows'
import Acerca from './components/Acerca/Acerca'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Escuchar />
        <Shows />
        <Acerca />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
