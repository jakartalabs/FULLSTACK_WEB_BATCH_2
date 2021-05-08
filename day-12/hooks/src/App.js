import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UseStateEx from './Pages/UseStateEx';
import UseEffectEx from './Pages/UseEffectEx';
import UseContextEx from './Pages/UseContextEx';
import UseContextExCopy from './Pages/UseContextExCopy';
import UseRef from  './Pages/UseRef';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hooks/use-state">
          <UseStateEx />
        </Route>
        <Route path="/hooks/use-effect">
          <UseEffectEx  data="sdad1"/>
        </Route>
        <Route path="/hooks/use-context" component={UseContextEx} />
        <Route path="/hooks/use-context2" component={UseContextExCopy} />
        <Route path="/hooks/use-ref" component={UseRef} />
      </Switch>
    </Router>
  );
}

export default App;
