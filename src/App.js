import './styles/App.css'
import React from 'react';
import Header from './components/Header'
import Flower1 from './assets/images/front-page/flowers1.jpg'
import Flower2 from './assets/images/front-page/flowers2.jpg'
import Flower3 from './assets/images/front-page/flowers3.jpg'
import Flower4 from './assets/images/front-page/flowers4.jpg'
import Flower5 from './assets/images/front-page/flowers5.jpg'
import Flower6 from './assets/images/front-page/flowers6.jpg'
import Flower7 from './assets/images/front-page/flowers7.jpg'
import Flower8 from './assets/images/front-page/flowers8.jpg'
import Flower9 from './assets/images/front-page/flowers9.jpg'
import Flower10 from './assets/images/front-page/flowers10.jpg'


function App() {
  return (
    <div className='App'>
      <Header pageHeader='Experience Outside, Inside'/>
      <main className='home-content'>
        <div className = 'flowers-container'>
          <img src={Flower1} alt = 'flowers' className='flowers'/>
          <img src={Flower2} alt = 'flowers' className='flowers'/>
          <img src={Flower3} alt = 'flowers' className='flowers'/>
        </div>
        <div className = 'flowers-container'>
          <img src={Flower4} alt = 'flowers' className='flowers'/>
          <img src={Flower5} alt = 'flowers' className='flowers'/>
          <img src={Flower6} alt = 'flowers' className='flowers'/>
        </div>
        <div className = 'flowers-container'>
          <img src={Flower7} alt = 'flowers' className='flowers'/>
          <img src={Flower8} alt = 'flowers' className='flowers'/>
          <img src={Flower9} alt = 'flowers' className='flowers'/>
          <img src={Flower10} alt = 'flowers' className='flowers'/>
        </div>
      </main>
    </div>
  );
}

export default App;
