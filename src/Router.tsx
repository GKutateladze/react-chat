import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Router = () => {

  const routes = [
    {
      path: '/login',
      component: lazy(() => import('./components/pages/LoginPage/LoginPage'))
    },
    {
      path: '/chat',
      component: lazy(() => import('./components/pages/ChatPage/ChatPage'))
    }
  ];

  const routerOutlet = routes.map((r) => {
    return <Suspense fallback={<div>...</div>} key={r.path}><Route path={r.path} component={r.component} /></Suspense>;
  });

  return (
    <>
      {routerOutlet}
    </>
  );
};

export default Router;