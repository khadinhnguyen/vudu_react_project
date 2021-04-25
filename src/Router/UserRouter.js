import { Route, Switch, useRouteMatch} from 'react-router-dom';

import SignIn from '../SignIn';


export default function UserRouter(){
    const match = useRouteMatch();
    return(
        <Switch>
            <Route path={`${match.path}/sign-in`}>
                <SignIn />
            </Route>
        </Switch>
    )

}

