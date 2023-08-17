import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary, Loading } from 'components/base';
import { lang, name } from 'config';
import store, { persistor } from 'store';
import animation from 'assets/animations/Loading/clock-loading.json';

export interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider(props: IAppProviderProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate
          loading={<Loading animation={animation} />}
          persistor={persistor}
        >
          <HelmetProvider>
            <Helmet>
              <html lang={lang} />
              <title>{name}</title>
            </Helmet>
            <BrowserRouter>{props.children}</BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
