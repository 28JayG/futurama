import { Switch, Route } from 'react-router-dom';

import { AppRoutes } from './constants/routes';

import Welcome from './pages/welcome/welcome.component';
import Characters from './pages/characters/characters.component';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoutes.WELCOME} component={Welcome} />
      <Route exact path={AppRoutes.CHARACTERS} component={Characters} />
    </Switch>
  );
};

export default App;
