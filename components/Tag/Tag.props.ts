import { ComponentPropsWithoutRef } from 'react';

export interface TagProps extends ComponentPropsWithoutRef<'div'> {
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}
