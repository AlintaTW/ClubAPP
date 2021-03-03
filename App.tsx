import React from 'react';
import AppNavigation from '@src/navigation'

import { ReduxProvider } from '@src/redux';

const App: () => React.ReactNode = () => {
  return (
    <ReduxProvider>
      <AppNavigation />
    </ReduxProvider>
  );
};


export default App;
