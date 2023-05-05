import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'components/base';
import store, { persistor } from 'store';
import { lang, name } from 'config';

export interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider(props: IAppProviderProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
