import './App.css'
import LandignPage from './pages/landingPage/LandignPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <body>
      <CartProvider>
        <Header />
        <LandignPage />
        <Footer />
      </CartProvider>
    </body>
  )
}

export default App
