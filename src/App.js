import React, { useEffect, lazy, Suspense  } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import './App.css';



import Header from './components/header/header.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Loader from './components/loader/loader.component';

// const HomePage = lazy(() => import('../src/pages/homepage/homepage.component'));

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>

        </Suspense>
      </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
