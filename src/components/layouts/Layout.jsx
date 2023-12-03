import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Layout;
