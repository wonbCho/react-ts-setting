import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import store from './config/store';
import Loading from '@src/components/Loading';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
<<<<<<< HEAD
          <Suspense fallback={<Loading />}>
            <Switch>
              {routes.map((route, index) =>
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              )}
            </Switch>
          </Suspense>
=======
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route, index) =>
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            )}
          </Switch>
        </Suspense>
>>>>>>> 2eb3f346bac187c1abb45f191f7bff661cd6533c
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
