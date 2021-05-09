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
import UseRef from './Pages/UseRef';
import UseReducer from './Pages/UseReducer';
import AppReducer from './Pages/AppReducer';
import UseMemo from './Pages/UseMemo';
import CustoHooks from './Pages/CustomHooks';

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
        <Route path="/hooks/use-reducer" component={UseReducer} />
        <Route path="/hooks/use-reducer-redux" component={AppReducer} />
        <Route path="/hooks/use-custom" component={CustoHooks} />
      </Switch>
    </Router>
  );
}

export default App;
