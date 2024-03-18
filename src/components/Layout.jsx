import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Suspense } from "react";
import { Loader } from "./Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      </main>
    </>
  );
};

export default Layout;
