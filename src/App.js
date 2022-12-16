// CSS
import './css/App.css';

// COMPONENTS
import { Footer } from './components/Footer';
import { PageFactures } from './pages/PageFactures';

const alertMe = (name) => {
  alert('atention ' + name);
}

function App() {
  return (
    <div className="App">
      <PageFactures></PageFactures>
      <Footer></Footer>
    </div>
  );
}

export default App;
