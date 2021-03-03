import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import AppContainer from '../AppContainer/AppContainer'

export const AppNavigation: React.FC = () => {
    return (
        <SafeAreaProvider>
            <AppContainer />
        </SafeAreaProvider>
    )
}