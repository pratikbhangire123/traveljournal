import './style.css';
import Header from './Components/Header'
import Card from './Components/Card'
import TravelData from './TravelData';

function App() {

  const data = TravelData.map((item) => {
    return (
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className='body'>
      <Header />
      <section>
        {data}
      </section>
      
    </div>
  );
}

export default App;
