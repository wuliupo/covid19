import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <React.Suspense fallback={<div>加载中</div>}>
      <BrowserRouter>
        <Switch>
          {
            routes.map((props) => (
              <Route path={props.path}>
                <props.component />
              </Route>
            ))
          }
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
