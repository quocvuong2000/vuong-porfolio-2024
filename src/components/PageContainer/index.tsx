import { PropsWithChildren } from 'react';

const PageContainer = ({ children }: PropsWithChildren) => {
  return <section className="text-white">{children}</section>;
};

export default PageContainer;
