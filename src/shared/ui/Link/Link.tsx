import { FC, ReactNode, MouseEvent } from 'react';

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  keepScrollPosition?: boolean;
  target?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: FC<LinkProps> = ({ to, children, className, keepScrollPosition, target, ...props }) => {
  return (
    <a 
      href={to} 
      className={className}
      {...(keepScrollPosition ? { 'keep-scroll-position': '' } : {})} 
      {...(target ? { target } : {})}
      {...props}
    >
      {children}
    </a>
  );
};