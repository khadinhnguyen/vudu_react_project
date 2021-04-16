import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Home from '../Home';

function GeneralRoute(){
    const match = useRouteMatch();

    return(
        <Switch>
            <Route path={match.path}>
                <Home />
            </Route>
        </Switch>
    )
}

export default GeneralRoute;