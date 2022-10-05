import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/RootNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {store} from 'redux/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
