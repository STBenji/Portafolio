import PortfolioPage from './Page/Page'
import AOS from 'aos'
import 'aos/dist/aos.css' 
AOS.init()

function App() {
  return (
    <main className="text-white">
      <PortfolioPage />
    </main>
  )
}

export default App
