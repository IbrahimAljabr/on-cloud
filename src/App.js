import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

/**
 * App entry point component.
 *
 * @return {JSX.Element}
 */
function App() {

  return (
    <>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          {routes.map(
            ({
              label,
              exact,
              path,
              component: Component,
            }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                element={
                  
                <Component />
                }
              />
            )
          )}
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;