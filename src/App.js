import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Home from './views/Home.jsx'
import Number from './views/Number.jsx'
import Word from './views/Word.jsx'
import Color from './views/Color.jsx'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/:id">
          <Number />
        </Route>
        <Route exact path="/:word">
          <Word />
        </Route>
        <Route path="/:word/:tColor/:bColor">
          <Color />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
