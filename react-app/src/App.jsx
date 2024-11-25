import Card from './componentes/Card'
import Info from './componentes/InfoPlayer'

export default function App() {
  return (
    <div className='info'>
      <div className="title">
      <h1>APRENDIENDO REACT USANDO LA DOCUMENTACION</h1>
      </div>

      <div className="cards-container">
      <div className="cards">
        <Card />
        <Info />
      </div>

      <div className="cards">
        <Card />
        <Info />
      </div>

      <div className="cards">
        <Card />
        <Info />
      </div>

      </div> 
    </div>
  )
}