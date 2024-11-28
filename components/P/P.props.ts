import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface PProps extends ComponentPropsWithoutRef<'p'> {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}
