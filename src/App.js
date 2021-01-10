import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Switch>
            <Route path='/contact' render={Contact}/>
            <Route path='/' render={Products}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
