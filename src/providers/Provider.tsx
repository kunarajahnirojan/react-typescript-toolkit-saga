import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'components/base';
import { lang, name } from 'config';
import store from 'store';
import { Provider } from 'react-redux';
export interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider(props: IAppProviderProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet>
            <html lang={lang} />
            <title>{name}</title>
          </Helmet>
          <BrowserRouter>{props.children}</BrowserRouter>
        </HelmetProvider>
      </Provider>
    </ErrorBoundary>
  );
}
