import React from 'react';
import { BrowserRouter as Router, Switch,
  Route,
  Link} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import InfoPage from './components/Pages/InfoPage';
import InfoListPage from './components/Pages/InfoListPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render () {

  
  return (
    <Router basename={"pos"}>
      <div>
        <div className="App" >
          <Switch>
            <Route path="/informacion/:id" component={InfoPage} />
            <Route path="/informacion_por_lista/" component={InfoListPage} />
            <Route path="/" component={HomePage} />
           
          </Switch>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
