import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import Navbar from './Navbar';
import Roles from './pages/Roles';

function App() {

  /* Obtenemos los Meses del Año */
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const date = new Date();
  const month = date.getMonth();

  const backgroundImage = require(`./img/${meses[month]}.jpg`);

  return (

    <div className="full-width d-flex justify-content-center align-items-center imgBack"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'initial',
        minHeight: '100vh', // Asegura que el fondo cubra toda la página
      }}>
      <div className="overlay">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Cards} />
            <Route path="/roles/:id" component={Roles} />
            <Route path="*">
              <Cards />
            </Route>
          </Switch>
      </div>
    </div>

  );
}

export default App;
