import { PropsWithChildren } from 'react';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="bg-background h-[calc(100svh-64px)]">{children}</main>
    </>
  );
};

export default Layout;
