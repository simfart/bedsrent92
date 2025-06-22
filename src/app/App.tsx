import { FC, PropsWithChildren } from 'react';
import './styles/global.scss';

export const App: FC<PropsWithChildren> = ({ children }) => {
  return <div className="app">{children}</div>;
};
