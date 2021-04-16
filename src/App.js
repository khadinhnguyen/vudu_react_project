import { Route, Switch } from 'react-router-dom';



import GeneralRoute from './Router/GeneralRoute';
import AdminRouter from './Router/AdminRouter';




function App() {
  return (
    <Switch>


      <Route path="/admin">
        <AdminRouter />
        {/* <GeneralRoute /> */}
      </Route>
      <Route path="/">
        {/* <GeneralRoute /> */}
      </Route>
    </Switch>

  );
}

export default App;
