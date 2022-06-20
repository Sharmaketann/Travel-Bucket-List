import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const cards = data.map((travel) => {
    return <Card key={travel.id} {...travel} />
  })
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <section className='cards--list'>{cards}</section>
      <Footer />
    </div>
  )
}

export default App
