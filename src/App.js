// CSS
import './css/App.css';

// COMPONENTS
import { Footer } from './components/Footer';

const alertMe = (name) => {
  alert('atention ' + name);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        <article>
        <div className="card text-center">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => { alertMe('Felipe') }}>Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>
        </article>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
