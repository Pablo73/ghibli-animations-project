import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/favorites" component={ Favorites } />
      <Route path="*" component={ PageNotFound } exact />
    </Switch>
  );
}

export default App;
