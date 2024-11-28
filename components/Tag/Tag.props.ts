import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface TagProps extends ComponentPropsWithoutRef<'div'> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}
