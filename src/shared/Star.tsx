import { FC } from 'react';

export const Star: FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={filled ? '#8d5cf6' : '#ddd'}
    xmlns="http://www.w3.org/2000/svg"
    style={{ transition: 'fill 0.2s' }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.38-2.457a1 1 0 00-1.175 0l-3.38 2.457c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.966z" />
  </svg>
);
