import React from 'react';
import AppNavigation from '@src/navigation';
import {ReduxProvider} from '@src/redux';
// ui config
import '@src/ui/foundationConfig';
import '@src/ui/componentsConfig';

const App: () => React.ReactNode = () => {
  return (
    <ReduxProvider>
      <AppNavigation />
    </ReduxProvider>
  );
};

export default App;
