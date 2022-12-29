import type { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden overflow-y-auto bg-zinc-900 text-gray-50'>
      {children}
    </div>
  );
};

export default Layout;
