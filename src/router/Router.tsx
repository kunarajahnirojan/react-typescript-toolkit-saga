import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LazyPage, NotFound } from 'components/base';
import { Layout } from 'layout';
import * as routes from 'constants/routes';

const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<LazyPage page="Home" />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default Router;
